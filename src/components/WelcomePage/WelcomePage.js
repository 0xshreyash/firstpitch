import {Text, View} from "react-native";
import React, {Component} from "react"
import {withMappedNavigationProps} from "react-navigation-props-mapper";
import WaveView from "../WaveView/WaveView";

class WelcomePage extends Component {

    componentDidMount() {
        setTimeout(() => this.props.navigation.replace("Menu", {
            audioFiles: getAudioFiles(),
            notes: getNotes()
        }), 1500);
    }

    render() {
        return (
            <View style={styles.welcomeTextContainer}>
                <WaveView
                    style={styles.waveBall}
                    H={50}
                    waveParams={[
                        {A: 0, T: 100, fill: '#62c2ff'},
                        {A: 40, T: 100, fill: '#ff5555'},
                    ]}
                    animated={false}
                    speedIncreasePerWave={0}
                />
                <Text style={styles.welcomeText}>First Pitch</Text>

            </View>
        );
    }
}


const styles = {
    welcomeTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    welcomeText: {
        fontSize: 50,
        fontColor: 'black',
    },
    wave: {
        width: 100,
        aspectRatio: 1,
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    waveBall: {
        width: 100,
        aspectRatio: 1,
        borderRadius: 100,
        overflow: 'hidden',
    }
};

const getAudioFiles = function () {
    let instruments = ['piano'];
    let notes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'as', 'cs', 'ds', 'fs', 'ss'];
    let octaves = ['2', '3'];
    let suffix = '.mp3';
    let files = [];
    for (let i = 0; i < instruments.length; i++) {
        let instrument = instruments[i];
        for (let j = 0; j < notes.length; j++) {
            let note = notes[j];
            for (let k = 0; k < octaves.length; k++) {
                files.push(instrument + '_' + note + octaves[k] + suffix)
            }
        }
    }
    return files
};

const getNotes = function () {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A#', 'C#', 'D#', 'F#', 'G#'];
};

export default withMappedNavigationProps()(WelcomePage);