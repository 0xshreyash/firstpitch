import React, {Component} from 'react';

import {
    Text,
    TouchableOpacity,
} from 'react-native';


/*
Used for each key of the piano. Can be either white of black.
 */
export default class PianoKey extends Component {

    constructor(props) {
        super(props);

        this.generateKeyStyle = this.generateKeyStyle.bind(this);
        this.generateTextStyle = this.generateTextStyle.bind(this);
    }

    /*
     Generate style for the text on the key
     */
    generateTextStyle() {
        let color = 'black';
        if(this.props.keyName === 'C#') {
            console.warn(this.props.keyColor, this.props.fillColor);
        }
        if(this.props.keyColor === 'B' && this.props.fillColor) {
            color = 'white';
        }
        return {color: color, fontSize: 15, marginBottom: 20};
    }

    /*
     Generate style for this key
     */
    generateKeyStyle() {
        let keyNum = this.props.keyNum;
        let keyColor = this.props.keyColor;
        let borderColor = !this.props.disabled ? 'black' : 'gray';
        let blackColor = !this.props.disabled ? 'black' : 'gray';
        let style = {
            height: this.props.whiteHeight,
            flex: 1,
            margin: this.props.keyMargin,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "flex-end",
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            borderColor: borderColor,
            borderWidth: 1,


        };
        let styleBlack = {
            backgroundColor: blackColor,
            position: "absolute",
            left: (100/7)*(keyNum-1) + (100*2/14) + "%",
            transform: [{translateX: -this.props.blackWidth/2-this.props.keyMargin}],
            width: this.props.blackWidth,
            top: 0,
            height: this.props.blackHeight,
            borderLeftWidth: this.props.fillColor ? 0 : 5,
            borderBottomWidth: this.props.fillColor ? 0 : 5,
        };
        let styleNoFill = {
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: this.props.borderColor,
        };
        if(keyColor === "B"){
            style = {...style, ...styleBlack};
        }
        else {
            style = {...style};
        }
        if(!this.props.fillColor){
            style = {...style, ...styleNoFill};
        }
        return style
    }

    render() {

        return (
            <TouchableOpacity style = {this.generateKeyStyle()}  onPress={()=>this.props.onPress()} disabled={this.props.disabled}>
                <Text style ={this.generateTextStyle()}>{this.props.keyName}</Text>
            </TouchableOpacity>
        )

    }
}
