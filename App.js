import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Platform,
    FlatList
} from 'react-native';

import StraightPiano from './src/components/Piano/Piano'

import RNSiriWaveView from 'react-native-siri-wave-view'

export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            startAnimation: true,
            stopAnimation: false,
            screenWidth: Dimensions.get("window").width,
            waveAmplitude: Platform.OS === 'ios' ? 1 : 100,
            waveType: 0,
            numberOfWaves: 1,
            waveWidth: Platform.OS === 'ios' ? 3 : 250,

        }
    }
    // It automatically fills the width of the parent
        //innerColor (string) - the color used to fill the keys
        //fillColor (boolean) - black and white (true) or pick the innerColor (false)
        //keyMargin - the space between white keys
        //blackWidth - width of black keys
        //height - total height of piano
        //whiteHeight - height of white keys
        //blackHeight - height of black keys
        //borderColor - color of the border around each key
    pianoProps = {
        fillColor: true,
        innerColor: "white",
        keyMargin: 0,
        blackWidth: 40,
        whiteWidth: 40,
        height: 250,
        whiteHeight: 250,
        blackHeight: 150,
        borderColor : "black"
    };
    render() {
        return (
        <View style={styles.container}>
            <View style={[styles.topMenuContainer]}>
            </View>
            <View style={[styles.waveContainer]}>
                <RNSiriWaveView height={300} width={this.state.screenWidth} amplitude={this.state.waveAmplitude}
                                type={this.state.waveType} numberOfWaves={this.state.numberOfWaves}
                                primaryWaveLineWidth={this.state.waveWidth}
                                startAnimation={this.state.startAnimation} stopAnimation={this.state.stopAnimation}/>
            </View>
            <View style={[styles.buttonContainer]}>

                <StraightPiano {...this.pianoProps}></StraightPiano>
            </View>
        </View>
    );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: "#FFFFFF",
    },
    topMenuContainer: {
        flex: 1,
        alignItems: "stretch"
    },
    waveContainer: {
        flex: 3,
        justifyContent: "center",
        alignItems: "stretch"
    },
    buttonContainer: {
        flex: 3,
        backgroundColor: "white",
    },
    button: {
        height: 40,
        width: 100,
        backgroundColor: "#add8e6",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }
});
