import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TouchableHighlight,
} from 'react-native';

import StraightPianoKey from '../PianoKey/PianoKey';

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

    generatePianoStyle = function() {
        return {
            height: this.props.height,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
        }
    };

    render(){
        keyProps = {
            setNote: this.setNote,
        };
        keyProps = {...this.props, ...keyProps};

        return (

            <View style = {[this.generatePianoStyle()]}>
                <Text style = {[styles.noteText]}>{this.state.note}</Text>
                <StraightPianoKey keyNum = "1" keyColor = 'W' keyName = "C" {...keyProps} disabled={false}></StraightPianoKey>
                <StraightPianoKey keyNum = "2" keyColor = 'W' keyName = "D" {...keyProps} disabled={false}></StraightPianoKey>
                <StraightPianoKey keyNum = "3" keyColor = 'W' keyName = "E" {...keyProps} disabled={false}></StraightPianoKey>
                <StraightPianoKey keyNum = "4" keyColor = 'W' keyName = "F" {...keyProps} disabled={false}></StraightPianoKey>
                <StraightPianoKey keyNum = "5" keyColor = 'W' keyName = "G" {...keyProps} disabled={false}></StraightPianoKey>
                <StraightPianoKey keyNum = "6" keyColor = 'W' keyName = "A" {...keyProps} disabled={false}></StraightPianoKey>
                <StraightPianoKey keyNum = "7" keyColor = 'W' keyName = "B" {...keyProps} disabled={false}></StraightPianoKey>
                <StraightPianoKey keyNum = "6" keyColor = 'B' keyName = "A#" {...keyProps} disabled={false}></StraightPianoKey>
                <StraightPianoKey keyNum = "5" keyColor = 'B' keyName = "G#" {...keyProps} disabled={false}></StraightPianoKey>
                <StraightPianoKey keyNum = "4" keyColor = 'B' keyName = "F#" {...keyProps} disabled={false}></StraightPianoKey>
                <StraightPianoKey keyNum = "2" keyColor = 'B' keyName = "D#" {...keyProps} disabled={false}></StraightPianoKey>
                <StraightPianoKey keyNum = "1" keyColor = 'B' keyName = "C#" {...keyProps} disabled={false}></StraightPianoKey>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    noteText:{
        position: "absolute",
        left: 10,
        top: -30,
    },
});
