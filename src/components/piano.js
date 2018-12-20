import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TouchableHighlight,
} from 'react-native';

import PianoKey from './piano_key';

export default class Piano extends Component{
    constructor(props) {
      super(props);
      this.state = {
        note: "",
      };
    }

    setNote = (note)=>{
        this.setState({ note:note })
    }
    render(){
        return (

            <View style = {[styles.piano]}>
                <Text style = {[styles.noteText]}>{this.state.note}</Text>
                <PianoKey keyNum = "13" keyColor = 'W' keyName = "B" setNote = {this.setNote}></PianoKey>
                <PianoKey keyNum = "14" keyColor = 'B' keyName = "A#" setNote = {this.setNote}></PianoKey>
                <PianoKey keyNum = "15" keyColor = 'W' keyName = "A" setNote = {this.setNote}></PianoKey>
                <PianoKey keyNum = "16" keyColor = 'B' keyName = "G#" setNote = {this.setNote}></PianoKey>
                <PianoKey keyNum = "17" keyColor = 'W' keyName = "G" setNote = {this.setNote}></PianoKey>
                <PianoKey keyNum = "18" keyColor = 'B' keyName = "F#" setNote = {this.setNote}></PianoKey>
                <PianoKey keyNum = "19" keyColor = 'W' keyName = "F" setNote = {this.setNote}></PianoKey>
                <PianoKey keyNum = "20" keyColor = 'W' keyName = "E" setNote = {this.setNote}></PianoKey>
                <PianoKey keyNum = "21" keyColor = 'B' keyName = "D#" setNote = {this.setNote}></PianoKey>
                <PianoKey keyNum = "22" keyColor = 'W' keyName = "D" setNote = {this.setNote}></PianoKey>
                <PianoKey keyNum = "23" keyColor = 'B' keyName = "C#" setNote = {this.setNote}></PianoKey>
                <PianoKey keyNum = "24" keyColor = 'W' keyName = "C" setNote = {this.setNote}></PianoKey>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    noteText:{
        position: "absolute",
        left: 200
    },
    piano: {
        height: 400,
        width: 400,
        position: "absolute",
        transform: [
            {rotateZ: "-6deg"}
        ]
    },
});
