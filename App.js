import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Platform
} from 'react-native';
import Header from './src/components/Header/Header';
import Wave from './src/components/Wave/Wave';
import BottomPanel from './src/components/BottomPanel/BottomPanel';

export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            startAnimation: true,
            stopAnimation: false,
            waveAmplitude: Platform.OS === 'ios' ? 1 : 100,
            waveWidth: Platform.OS === 'ios' ? 3 : 250
        }
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
                <BottomPanel/>
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
    button: {
        height: 40,
        width: 100,
        backgroundColor: "#add8e6",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    }
});