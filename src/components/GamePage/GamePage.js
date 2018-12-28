import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Platform,
    SafeAreaView
} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import Header from '../Header/Header';
import Wave from '../Wave/Wave';
import BottomPanel from '../BottomPanel/BottomPanel';
import {withMappedNavigationProps} from "react-navigation-props-mapper";


class GamesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // wave
            startAnimation: true,
            stopAnimation: false,
            waveAmplitude: Platform.OS === 'ios' ? 1 : 100,
            waveWidth: Platform.OS === 'ios' ? 3 : 250,
            // file to choose from
            totalFiles: this.props.audioFiles.length,
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
        };
        this.onPressPlay = this.onPressPlay.bind(this);
        this.updateTrack = this.updateTrack.bind(this);
        this.onChooseAnswer = this.onChooseAnswer.bind(this);
        this.playSound = this.playSound.bind(this);
        this.playNextTrack = this.playNextTrack.bind(this);
    }

    componentDidMount() {
        SoundPlayer.onFinishedPlaying((success: boolean) => { // success is true when the sound is played
          console.log("Finished playing note!", success);
        });
    }
    componentWillUnmount() {
        SoundPlayer.unmount()
    }

    onPressPlay() {
        this.setState({
            started: true
        });
        this.updateTrack();
    }

    onChooseAnswer(event, buttonID) {
        //console.warn(buttonID);
        //console.warn(this.state.correctAnswer, buttonID);
        if (!(this.state.correctAnswer === buttonID)) {
            this.setState(prevState => ({
                numWrong: prevState.numWrong + 1
            }));
        } else {
            this.setState(prevState => ({
                score: prevState.score + 1
            }));
        }
        this.setState({
            buttonsDisabled: true
        });
        this.updateTrack();
    }

    playNextTrack() {
        this.setState({
            buttonsDisabled: false
        }, this.playSound);
    }

    playSound() {
        //Sound.setCategory('Playback');
        this.setState({
            buttonsDisabled: false
        });
        let index = this.state.currentTrack.lastIndexOf('.');
        let name = this.state.currentTrack.slice(0, index);
        let ext = this.state.currentTrack.slice(index + 1, this.state.currentTrack.length);
        console.warn(name, ext);
        try {
            SoundPlayer.playSoundFile(name, ext);
        } catch (e) {
            console.warn(`Cannot play the sound file`, e)
        }
    }

    updateTrack() {
        let nextPos = this.state.currentPosition === undefined ? 0 : this.state.currentPosition + 1;
        let nextTrack = this.props.audioFiles[nextPos % this.state.totalFiles];
        //console.warn(nextTrack);
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
        }, () => (setTimeout(this.playSound, 0)));
    }
    render() {
        return <SafeAreaView style={styles.container}>
            <View style={[styles.headerContainer]}>
                <Header score={this.state.score}/>
            </View>

            <View style={[styles.waveContainer]}>
                <Wave startAnimation={this.state.startAnimation} stopAnimation={this.state.stopAnimation}
                      waveAmplitude={this.state.waveAmplitude} waveWidth={this.state.waveWidth}
                      waveColor={this.state.waveColor}
                      numberOfWaves={this.state.numberOfWaves}/>

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
export default withMappedNavigationProps()(GamesPage)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: "#FFFFFF",
    },
    headerContainer: {
        flex: 1
    },
    waveContainer: {
        flex: 3,
        justifyContent: "center",
        alignItems: "stretch",
    },
    bottomPanelContainer: {
        flex: 3,
        alignItems: "stretch",
        justifyContent: "center",
        margin: 3,
        //padding: 20,
    },
});
