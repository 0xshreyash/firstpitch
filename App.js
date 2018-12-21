import React, {Component} from 'react';
import {
    Platform
} from 'react-native';
import MainPage from './src/components/MainPage/MainPage'


export default class App extends Component {

    constructor(props) {
        super(props);
    }

    static getAudioFiles() {
        let instruments = ['piano'];
        let notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'As', 'Cs', 'Ds', 'Fs', 'Gs'];
        let octaves = ['2', '3'];
        let suffix = '.mp3';
        let prefix = './';
        let files = [];
        for(let i = 0; i < instruments.length; i++) {
            let instrument = instruments[i];
            for(let j = 0; j < notes.length; j++) {
                let note = notes[j];
                if (Platform.OS === 'android') {
                    note = note.toLowerCase();
                }
                for(let k = 0; k < octaves.length; k++) {
                    files.push(prefix + instrument + '_' + note + octaves[k] + suffix)
                }
            }
        }
        return files
    }

    static getNotes() {
        return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A#', 'C#', 'D#', 'F#', 'G#'];
    }

    render() {
        return <MainPage audioFiles={App.getAudioFiles()} notes={App.getNotes()}/>;
    }
}

