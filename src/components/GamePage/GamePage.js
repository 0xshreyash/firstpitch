import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    Platform,
    SafeAreaView,
    AsyncStorage,
    TouchableOpacity,
    Image,
    Text
} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import Header from './Header';
import Wave from '../Wave/Wave';
import BottomPanel from './BottomPanel';
import {withMappedNavigationProps} from "react-navigation-props-mapper";
import {ColorTutorialEntries} from "../../static/ColorTutorialEntries"
import Buttons from '@assets/buttons';
import styles from "./GamePageStyles";


class GamesPage extends Component {
    constructor(props) {
        super(props);
        this.getAudioFiles = this.getAudioFiles.bind(this);
        this.onPressPlay = this.onPressPlay.bind(this);
        this.updateTrack = this.updateTrack.bind(this);
        this.onChooseAnswer = this.onChooseAnswer.bind(this);
        this.playSound = this.playSound.bind(this);
        this.state = {
            // wave
            startAnimation: true,
            stopAnimation: false,
            waveAmplitude: Platform.OS === 'ios' ? 1 : 100,
            waveWidth: Platform.OS === 'ios' ? 3 : 250,
            // file to choose from
            audioFiles: [],
            totalFiles: 0,
            // stats
            numWrong: 0,
            started: false,
            currentPosition: -1,
            currentTrack: undefined,
            correctAnswer: undefined,
            buttonsDisabled: true,
            score: 0,
            waveColor: '#000000',
            numberOfWaves: 5,

            //correcting
            displayNote: "",
        };
        this.gapDuration = 800
    }


    componentDidMount() {
        SoundPlayer.onFinishedPlaying((success: boolean) => { // success is true when the sound is played
          console.log("Finished playing note!", success);
        });
        let files = this.getAudioFiles();
        let numFiles = files.length;
        this.setState({
            audioFiles: files,
            totalFiles: numFiles,
        })
    }

    componentWillUnmount() {
        SoundPlayer.unmount()
    }

    extractNoteFromAudiofile(filename){
        //remove the instrument
        parts = filename.split("_");
        note = parts.pop().toUpperCase();
        //remove the number at the end
        return note.slice(0, note.length-1);
    }

    setWaveColour(name){
        //reset it
        this.setState({
            waveColor: "black"
        })
        if(Math.random() > this.props.waveColorProbability){
            return;
        }
        for(var i = 0; i < ColorTutorialEntries.length; i++){
            entry = ColorTutorialEntries[i];
            if(this.extractNoteFromAudiofile(name) == entry["note"].toUpperCase()){
                this.setState({
                    waveColor: entry["color"]
                });
                return;
            }
        }
    }


    getAudioFiles() {
        let instruments = this.props.instruments;
        let notes = this.props.notes;
        let octaves = this.props.octaves;
        let suffix = '.mp3';
        let files = [];
        for (let i = 0; i < instruments.length; i++) {
            let instrument = instruments[i];
            for (let j = 0; j < notes.length; j++) {
                let note = notes[j].toLowerCase();
                for (let k = 0; k < octaves.length; k++) {
                    files.push(instrument + '_' + note + octaves[k] + suffix)
                }
            }
        }
        // console.warn(files);
        return files;
    };

    onPressPlay() {
        this.setState({
            started: true
        });
        this.updateTrack();
    }

    onChooseAnswer(event, buttonID) {
        // console.warn(this.state.correctAnswer, buttonID);
        this.setState({
            displayNote: this.state.correctAnswer
        })
        setTimeout(() => this.setState({displayNote:""}), this.gapDuration);
        if (!(this.state.correctAnswer.toLowerCase() === buttonID.toLowerCase())) {
            this.setState(prevState => ({
                numWrong: prevState.numWrong + 1,
                buttonsDisabled: true,
            }), this.updateTrack);
        } else {
            SoundPlayer.playSoundFile("correct", "mp3");
            this.setState(prevState => ({
                score: prevState.score + 1,
                buttonsDisabled: true
            }), this.updateTrack);
        }
    }


    playSound() {
        //Sound.setCategory('Playback');

        this.setState({
            buttonsDisabled: false
        });
        let index = this.state.currentTrack.lastIndexOf('.');
        let name = this.state.currentTrack.slice(0, index);
        let ext = this.state.currentTrack.slice(index + 1, this.state.currentTrack.length);
        // console.warn(name, ext);
        this.setWaveColour(name);
        try {
            SoundPlayer.playSoundFile(name, ext);
        } catch (e) {
            console.warn(`Cannot play the sound file`, e)
        }
    }

    gameLost(){
        SoundPlayer.playSoundFile("fail_piano", "mp3")
        this.props.navigation.navigate("ScoreScreen", {
            score: this.state.score,
        });
    }

    gameWon = async()=>{
        SoundPlayer.playSoundFile("success_piano", "mp3")
        if(this.props.levelNum){
            currUnlocked = await AsyncStorage.getItem("unlockedLevels");
            currUnlocked = JSON.parse(currUnlocked)
            nextLevel = Math.max(currUnlocked, this.props.levelNum+1)
            await AsyncStorage.setItem("unlockedLevels", JSON.stringify(nextLevel));
        }
        this.props.navigation.navigate("ScoreScreen", {
            score: this.state.score,
        });
    }

    updateTrack() {
        //commented it out because we want randomness in production
        // let nextPos = this.state.currentPosition === undefined ? 0 : this.state.currentPosition + 1;

        let nextPos = Math.floor(Math.random()*this.state.audioFiles.length)

        //lost the game
        if(this.state.numWrong >= this.props.wrongsAllowed){
            this.gameLost();
            return;
        }

        //won the game
        if (this.state.score >= this.props.gameLen) {
            this.gameWon();
            return;
        }
        let nextTrack = this.state.audioFiles[nextPos % this.state.totalFiles];
        let parts = nextTrack.split('/');
        let file = parts[parts.length - 1];
        let name = (file.split('.'))[0];
        name = name.split('_')[1];
        let nextAns = name.slice(0, name.length - 1);
        if (nextAns.charAt(1) === 'b') {
            nextAns = nextAns[0].toUpperCase() + '#';
        }
        //console.warn(nextAns);
        //console.warn(nextTrack);
        this.setState({
            currentPosition: nextPos,
            currentTrack: nextTrack,
            correctAnswer: nextAns.toUpperCase(),
        }, () => (setTimeout(this.playSound, this.gapDuration)));
    }

    render() {
        //replay is only available when the game is started.
        let replay;
        if(this.state.started && !this.buttonDisabled){
            replay = (<TouchableOpacity onPress = {this.playSound} style = {{height:50, width: 50, borderWidth: 2, borderRadius: 8}}>
                            <Image source = {Buttons.replay} style={{ width: "100%", height: "100%" }} resizeMode={'contain'}/>
                        </TouchableOpacity>);
        }
        return <SafeAreaView style={styles.container}>
            <View style={[styles.headerContainer]}>
                <Header score={this.state.score} numWrong = {this.state.numWrong} wrongsAllowed = {this.props.wrongsAllowed} navigation={this.props.navigation}/>
            </View>

            <View style={[styles.waveContainer]}>
                <Wave startAnimation={this.state.startAnimation} stopAnimation={this.state.stopAnimation}
                      waveAmplitude={this.state.waveAmplitude} waveWidth={this.state.waveWidth}
                      waveColor={this.state.waveColor}
                      numberOfWaves={this.state.numberOfWaves}/>
                {replay}
                <Text style = {{color: this.state.waveColor }}>{this.state.displayNote}</Text>
            </View>

            <View style={[styles.bottomPanelContainer]}>
                <BottomPanel started={this.state.started} options={new Set(this.props.notes)}
                             onPressPlay={this.onPressPlay} onChooseAnswer={this.onChooseAnswer}
                             disabled={this.state.buttonsDisabled}
                             pianoHeight={this.state.pianoHeight}/>

            </View>
        </SafeAreaView>;
    }
}
export default withMappedNavigationProps()(GamesPage);


GamesPage.defaultProps = {
    wrongsAllowed: 3,
    notes: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'As', 'Cs', 'Ds', 'Fs', 'Gs'],
    waveColorProbability: 1,
    gameLen: 20,
    instruments: ["piano"],
    octaves: [3]
};
