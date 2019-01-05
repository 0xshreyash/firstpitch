import {Text, Platform, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback} from "react-native";
import React, {Component} from "react"
import {withMappedNavigationProps} from "react-navigation-props-mapper";
import {MediumText, GlobalStyles, SmallText} from "../Index"

class TextButton extends Component {
    constructor(props){
        super(props)
        if(this.props.inverse == true){
            styles.button.backgroundColor = "black";
        }else{
            styles.button.backgroundColor = "white";
        }
        if(this.props.size == "small"){
            styles.button.padding = 15
            styles.button.borderRadius = GlobalStyles.borderRadiusExtreme
        }
    }
    onPress(){
        this.props.onPress();
    }
    render() {
        if(this.props.inverse){
            color = "white"
        }else{
            color = "black"
        }
        if(this.props.size == "small"){
            text = (
                <SmallText style = {{color:color}}>
                    {this.props.children.toUpperCase()}
                </SmallText>
            )
        }else{
            text = (
                <MediumText style = {{color:color}}>
                    {this.props.children}
                </MediumText>
            )
        }
        return (
            <TouchableOpacity onPress={()=>this.onPress()} style={[styles.button, this.props.style]}>
                {text}
            </TouchableOpacity>
        );
    }
}

export default withMappedNavigationProps()(TextButton);


const styles = {
    button:{
        backgroundColor: "white",
        borderRadius: GlobalStyles.borderRadiusLow,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        opacity: 1,
    },
};
