import {Text, View} from "react-native";
import React, {Component} from "react"
import {withMappedNavigationProps} from "react-navigation-props-mapper";

class WelcomePage extends Component {

    componentDidMount() {
        setTimeout(() => this.props.navigation.replace("MainMenu", {
            audioFiles: getAudioFiles(),
            notes: getNotes()
        }), 1000);
    }

    render() {
        return (
            <View style={styles.welcomeTextContainer}>
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
