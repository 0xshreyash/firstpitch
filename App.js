import React, {Component} from 'react';
import MainPage from './src/components/MainPage/MainPage'

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    static getAudioFiles() {
        let instruments = ['piano'];
        let notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A#', 'C#', 'D#', 'F#', 'G#'];
        let octaves = ['2', '3'];
        let suffix = '.mp3';
        let prefix = './assets/audio/';
        let files = [];
        for(let i = 0; i < instruments.length; i++) {
            let instrument = instruments[i];
            for(let j = 0; j < notes.length; j++) {
                let note = notes[j];
                for(let k = 0; k < octaves.length; k++) {
                    files.push(prefix + instrument + '/' + note + octaves[k] + suffix)
                }
            }
        }
        return files
    }

    render() {
        return <MainPage audioFiles={App.getAudioFiles()}/>;
    }
}

