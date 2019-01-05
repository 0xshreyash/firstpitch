import {Text, Platform, TouchableOpacity, StyleSheet, Image} from "react-native";
import React, {Component} from "react"
import {withMappedNavigationProps} from "react-navigation-props-mapper";
import Buttons from '@assets/buttons';

class IconButton extends Component {
    constructor(props){
        super(props)
        if(this.props.pauseButtonIsTOOPHAT == true){
            styles.button.height= 30
            styles.button.width= 30
            console.warn("istoophat")
        }

    }

    onPress(){
        this.props.onPress();
    }

    render() {
        return (
            <TouchableOpacity disabled = {this.props.icon == undefined || this.props.disabled} style={[styles.button, this.props.style]} onPress={()=>this.onPress()}>
                <Image source={Buttons[this.props.icon]} style = {styles.icon}/>
            </TouchableOpacity>
        );
    }
}

export default withMappedNavigationProps()(IconButton);

// <TouchableOpacity style={[styles.backButton, {borderWidth:2, height: 50, width: 50}]} onPress={()=>this.props.navigation.navigate("ColorInfo")}>
//     <Image source={Buttons.information} style = {{height: "100%", width: "100%"}}/>
// </TouchableOpacity>

const styles = {
    button:{
        height: 40,
        width: 40,
    },
    icon:{
        height: "100%",
        width: "100%"
    }
};
