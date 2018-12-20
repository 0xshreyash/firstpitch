import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Platform
} from 'react-native';
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
            paused: true,
            currentPosition: 0,
        };
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
                <BottomPanel paused={false} options={this.props.notes}/>
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