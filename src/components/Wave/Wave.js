import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';
import RNSiriWaveView from "react-native-siri-wave-view";

let height = 300;
let screenWidth = Dimensions.get("window").width;
let waveType = 0;
let numberOfWaves = 1;

const Wave = ({
                  waveAmplitude,
                  waveWidth,
                  startAnimation,
                  stopAnimation,
              }) => (
    <View style={styles.container}>
        <RNSiriWaveView height={height} width={screenWidth} amplitude={waveAmplitude}
                        type={waveType} numberOfWaves={numberOfWaves}
                        primaryWaveLineWidth={waveWidth}
                        startAnimation={startAnimation} stopAnimation={stopAnimation}/>
    </View>
);

export default Wave;

const styles = StyleSheet.create({
    container: {
        marginTop: 3,
        marginRight: 3,
    },
    settingsButton: {
        position: 'absolute',
        top: 0,
        right: 0
    },
    settingsButtonImage: {
        height: 40,
        width: 40
    }
});