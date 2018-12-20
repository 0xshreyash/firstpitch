import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TouchableHighlight,
} from 'react-native';



export default class PianoKey extends Component{
    constructor(props) {
      super(props);
      this.state = {
          keyHeight: 100,
          keyWidth: 35,
          semicircleLength: 90,
          zoomScale: 1.3,
          backgroundColor: this.props.keyColor === "B" ? "black" : "white",
      };
    }

    onPress(){
        this.props.setNote(this.props.keyName);
    }

    calculateTransform = function(key_num, key_color){
        var angle = (360/24) * key_num + 180;
        var _semicircleLength = this.state.semicircleLength;
        if(key_color === 'W'){
            _semicircleLength *= 1.3;
        }
        var x = Math.cos(angle*Math.PI/180) * _semicircleLength;
        var y = Math.sin(angle*Math.PI/180) * _semicircleLength;
        return [x-this.state.keyWidth/2, y-this.state.keyHeight/2, angle]
    }

    generateStyle = function(){
        let [x, y, angle] = this.calculateTransform(this.props.keyNum, this.props.keyColor);
        style = {
            position: "absolute",
            top: 100,
            left: 210,
            //smallwidth
            width: 35,
            height: 0,
            //height
            borderBottomWidth: 150,
            borderBottomColor: this.state.backgroundColor,
            borderLeftWidth: 15,
            borderRightWidth: 15,
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderStyle: 'solid',
            transform: [
                {translateX: x},
                {translateY: y},
                {rotateZ: `${angle-90}deg`}
            ],
        }
        return style
    }



    render(){
        return (
            <TouchableHighlight style = {this.generateStyle()} onPress= {()=>this.onPress()}>
                <Text></Text>
            </TouchableHighlight>
        )
    }
}
