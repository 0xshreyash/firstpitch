import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Platform
} from 'react-native';
import Sound from 'react-native-sound';
import Header from '../Header/Header';
import Wave from '../Wave/Wave';
import BottomPanel from '../BottomPanel/BottomPanel';


export default class MainPage extends Component<{}> {
    constructor(props) {
        super(props);
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
            correctAnswer: undefined
        };
        this.onPressPlay = this.onPressPlay.bind(this);
        this.updateTrack = this.updateTrack.bind(this);
        this.onChooseAnswer = this.onChooseAnswer.bind(this);
        this.playSound = this.playSound.bind(this);
    }

    onPressPlay() {
        this.setState({
            started: true
        });
        this.updateTrack();
    }

    onChooseAnswer(event, buttonID) {
        //console.warn(buttonID);
        if(!(this.state.correctAnswer === buttonID)) {
            this.setState(prevState => ({
                numWrong: prevState.numWrong + 1
            }));
        }
        this.updateTrack();
    }

    playSound() {

        Sound.setCategory('Playback');
        let note = new Sound(this.state.currentTrack, Sound.MAIN_BUNDLE, (error) => {
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
            //console.warn('Duration in seconds: ' + note.getDuration() + 'number of channels: ' + note.getNumberOfChannels());
        });
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
        if(nextAns.charAt(1) === 'b') {
            nextAns = nextAns[0] + '#';
        }
        console.warn(nextAns);
        console.warn(nextTrack);
        this.setState({
            currentPosition: nextPos,
            currentTrack: nextTrack,
            correctAnswer: nextAns,
        }, () => (setTimeout(this.playSound, 1000)));
    }

    render() {
        return <View style={styles.container}>
            <View style={[styles.headerContainer]}>
                <Header/>
            </View>
            <View style={[styles.waveContainer]}>
                <Wave startAnimation={this.state.startAnimation} stopAnimation={this.state.stopAnimation}
                      waveAmplitude={this.state.waveAmplitude} waveWidth={this.state.waveWidth}/>
            </View>
            <View style={[styles.bottomPanelContainer]}>
                <BottomPanel started={this.state.started} options={this.props.notes}
                  onPressPlay={this.onPressPlay} onChooseAnswer={this.onChooseAnswer}/>
            </View>
        </View>;
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