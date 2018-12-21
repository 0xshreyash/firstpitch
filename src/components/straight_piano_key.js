import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TouchableHighlight,
} from 'react-native';



export default class StraightPianoKey extends Component{
    constructor(props) {
      super(props);
    }

    onPress(){
        this.props.setNote(this.props.keyName);
    }

    generateStyle = function(){
        keyNum = this.props.keyNum;
        keyColor = this.props.keyColor;
        style = {
            height: this.props.whiteHeight,
            flex: 1,
            margin: this.props.keyMargin,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "flex-end"
        }
        styleBlack = {
            backgroundColor: "black",
            position: "absolute",
            left: (100/7)*(keyNum-1) + (100*2/14) + "%",
            transform: [{translateX: -this.props.blackWidth/2-this.props.keyMargin}],
            width: this.props.blackWidth,
            top: 0,
            height: this.props.blackHeight,
        }
        styleNoFill = {
            backgroundColor: this.props.innerColor,
            borderWidth: 2,
            borderRadius: 2,
            borderColor: this.props.borderColor
        }
        if(keyColor === "B"){
            style = {...style, ...styleBlack}
        }
        if(!this.props.fillColor){
            style = {...style, ...styleNoFill}
        }
        return style
    }



    render(){
        return (
            <TouchableOpacity style = {this.generateStyle()}  onPress= {()=>this.onPress()}>
                <Text style = {{color: "white", fontSize: 15, marginBottom: 20}}>{ this.props.keyName}</Text>
            </TouchableOpacity>
        )
    }
}
