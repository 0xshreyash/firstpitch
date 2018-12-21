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

export default class MainPage extends Component<{}> {
    constructor(props) {
        super(props);
        // It automatically fills the width of the parent
        //innerColor (string) - the color used to fill the keys
        //fillColor (boolean) - black and white (true) or pick the innerColor (false)
        //keyMargin - the space between white keys
        //blackWidth - width of black keys
        //height - total height of piano
        //whiteHeight - height of white keys
        //blackHeight - height of black keys
        //borderColor - color of the border around each key

        this.state = {
            startAnimation: true,
            stopAnimation: false,
            waveAmplitude: Platform.OS === 'ios' ? 1 : 100,
            waveWidth: Platform.OS === 'ios' ? 3 : 250,
            totalFiles: this.props.audioFiles.length,
            numWrong: 0,
            started: false,
            currentPosition: -1,
            currentTrack: undefined,
            correctAnswer: undefined,
            buttonsDisabled: true,
            pianoHeight: 250,
            score: 0

        };
        this.onPressPlay = this.onPressPlay.bind(this);
        this.updateTrack = this.updateTrack.bind(this);
        this.onChooseAnswer = this.onChooseAnswer.bind(this);
        this.playSound = this.playSound.bind(this);
    }

    componentDidMount() {
        SoundPlayer.onFinishedPlaying((success: boolean) => { // success is true when the sound is played
            this.setState({
                buttonsDisabled: false
            });
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
        console.warn(this.state.correctAnswer, buttonID);
        if (!(this.state.correctAnswer === buttonID)) {
            this.setState(prevState => ({
                numWrong: prevState.numWrong + 1
            }));
        }
        else {
            this.setState(prevState => ({
                score: prevState.score + 1
            }));
        }
        this.setState({
            buttonsDisabled: true
        });
        this.updateTrack();
    }

    playSound() {
        //Sound.setCategory('Playback');
        let index = this.state.currentTrack.lastIndexOf('.');
        let name = this.state.currentTrack.slice(0, index);
        let ext = this.state.currentTrack.slice(index + 1, this.state.currentTrack.length);
        console.warn(name, ext);
        try {
            SoundPlayer.playSoundFile(name, ext);
        } catch (e) {
            console.warn(`Cannot play the sound file`, e)
        }

        /*
        console.warn('In play sound method');
        let note = new Sound(this.state.currentTrack, Sound.MAIN_BUNDLE, (error) => {
            console.warn('Heard back');
            if (error) {
                console.warn('Failed to load the sound', error);
            }
            else {
                note.play((success) => {
                    if (success) {
                        console.warn('Successfully finished playing');
                    } else {
                        console.warn('Playback failed due to audio decoding errors');
                        note.reset();
                    }
                });

            }
        });
        //console.warn(Platform.OS);
        */
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
        }, () => (setTimeout(this.playSound, 1000)));
    }
    render() {
        // <Piano {...this.pianoProps}/>
        return <SafeAreaView style={styles.container}>
            <View style={[styles.headerContainer]}>
                <Header score={this.state.score}/>
            </View>
            <View style={[styles.waveContainer]}>
                <Wave startAnimation={this.state.startAnimation} stopAnimation={this.state.stopAnimation}
                      waveAmplitude={this.state.waveAmplitude} waveWidth={this.state.waveWidth}/>
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
        },
    });