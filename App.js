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
import Piano from './src/components/piano'

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
                <TouchableOpacity style={[styles.button]} onPress={() => {
                    this.setState({
                        startAnimation: true,
                        stopAnimation: false
                    });
                }}>
                    <Text>Start</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={() => {
                    this.setState({
                        startAnimation: false,
                        stopAnimation: true
                    });
                }}>
                    <Text>Stop</Text>
                </TouchableOpacity>
                <Piano></Piano>
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
        alignItems: "stretch",
        backgroundColor: "#e75353",
        position: "relative"
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
