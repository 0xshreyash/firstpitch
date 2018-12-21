import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Platform
} from 'react-native';
import SoundPlayer from 'react-native-sound-player'
import Header from '../Header/Header';
import Wave from '../Wave/Wave';
import BottomPanel from '../BottomPanel/BottomPanel';


export default class GamePage extends Component<{}> {
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
        console.warn(buttonID);
        if(!(this.state.correctAnswer === buttonID)) {
            this.setState(prevState => ({
                numWrong: prevState.numWrong + 1
            }));
        }
        this.updateTrack();
    }

    playSound() {
        try {
            console.warn('One', this.state.currentTrack);
            // play the file tone.mp3
            let divideFrom = this.state.currentTrack.lastIndexOf('.');
            let name = this.state.currentTrack.splice(0, divideFrom);
            let ext = this.state.currentTrack.splice(divideFrom + 1, this.state.currentTrack.length - 1);
            console.warn('Two', ext);
            SoundPlayer.playSoundFile(name, ext);
        } catch (e) {
            console.log(`Cannot play the sound file`, e);
        }
    }

    updateTrack() {
        let nextPos = this.state.currentPosition === undefined? 0 : this.state.currentPosition + 1;
        let nextTrack = this.props.audioFiles[nextPos % this.state.totalFiles];
        console.warn(nextTrack);
        let parts = nextTrack.split('/');
        let file = parts[parts.length - 1];
        let name = (file.split('.'))[0];
        let nextAns = name.slice(0, name.length - 1);
        this.setState({
            currentPosition: nextPos,
            currentTrack: nextTrack,
            correctAnswer: nextAns,
        }, this.playSound);
    }

    render() {
        const track = this.props.audioFiles[this.state.currentPosition];

        /*
        const video = (<Video source={{uri: track}} // Can be a URL or a local file.
                              ref="audioElement"
                              paused={this.state.paused}               // Pauses playback entirely.
                              resizeMode="cover"           // Fill the whole screen at aspect ratio.
                              repeat={false}                // Repeat forever.
                              onLoadStart={this.loadStart} // Callback when video starts to load
                              onLoad={this.setDuration.bind(this)}    // Callback when video loads
                              onProgress={this.setTime.bind(this)}    // Callback every ~250ms with currentTime
                              onEnd={this.onEnd}           // Callback when playback finishes
                              onError={this.videoError}    // Callback when video cannot be loaded
                              style={styles.audioElement}/>);
        */
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
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
