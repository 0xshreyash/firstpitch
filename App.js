import React, {Component} from 'react';
import GamePage from './src/components/GamePage/GamePage';
import MainMenu from './src/components/MainMenu/MainMenu';
import {createStackNavigator, createAppContainer} from 'react-navigation'


const AppNavigator = createStackNavigator({
    Home: {
        screen: MainMenu
    },
    Game: {
        screen: GamePage
    }
});

export default createAppContainer(AppNavigator);

const getAudioFiles = function() {
    let instruments = ['piano'];
    let notes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'as', 'cs', 'ds', 'fs', 'ss'];
    let octaves = ['2', '3'];
    let suffix = '.mp3';
    let files = [];
    for(let i = 0; i < instruments.length; i++) {
        let instrument = instruments[i];
        for(let j = 0; j < notes.length; j++) {
            let note = notes[j];
            for(let k = 0; k < octaves.length; k++) {
                files.push(instrument + '_' + note + octaves[k] + suffix)
            }
        }
    }
    return files
};

const getNotes = function() {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A#', 'C#', 'D#', 'F#', 'G#'];
};




