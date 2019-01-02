import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {withMappedNavigationProps} from "react-navigation-props-mapper";
import {withNavigation} from 'react-navigation';
import Buttons from '@assets/buttons';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');


class StageButton extends Component {

    buttonStyle() {
        let columns = this.props.columns;
        let margin = this.props.buttonMargin;
        let widthPercentage = this.props.widthPercentage;
        let heightPercentage = this.props.heightPercentage;
        let rows = 2;
        return {
            margin: margin,
            shadowColor: "#7e7d7d",
             shadowOffset: {
                 width: 0,
                 height: 2,
             },
             shadowOpacity: 0.30,
             shadowRadius: 2,
             elevation: 8,
            backgroundColor: "#eeeeee",
            borderRadius: 5,
            borderColor: "blue",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            minWidth: (viewportWidth * widthPercentage * 0.01 - 2 * margin * columns) / columns - 3,
            height: (viewportHeight * heightPercentage * 0.01 - 2 * margin * rows) / rows - 3,
        }
    }

    render() {
        if(this.props.levelNum <= this.props.unlockedLevels){
            return (
                <TouchableOpacity style={[this.buttonStyle()]} onPress={()=>this.props.navigation.navigate("Game", {...this.props})}>
                    <Text style={[styles.levelTitle]}>{this.props.index+1 }</Text>
                </TouchableOpacity>
            );
        }
        else{
            return (
                <TouchableOpacity disabled = {true} style={[this.buttonStyle(), styles.disabledButton]}>
                    <Image style={[styles.lockImage]} resizeMode='contain' source={Buttons.lock} />
                </TouchableOpacity>
            );
        }

    }
}



const styles = StyleSheet.create({
    levelImage: {
        flex: 2,
        resizeMode: 'contain',
        width: "100%",
        margin: 40,
    },
    lockImage:{
        position: "absolute",
        height: 60,
        width: 60
    },
    disabledButton:{
        opacity: 0.3
    },
    levelTitle: {
        // flex: 1,
        fontSize: 50,
        fontWeight: 'bold',
        letterSpacing: 4,
        color: "#444444",
    },
    levelSubtitle: {
        flex: 1,
        fontSize: 13,
    }
})

export default withNavigation(StageButton);

StageButton.defaultProps = {
    unlockedLevels: 1,
};
