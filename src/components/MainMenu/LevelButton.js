import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');


export default class LevelButton extends Component {

    buttonStyle(){
        columns = this.props.columns;
        margin = this.props.buttonMargin;
        widthPercentage = this.props.widthPercentage;
        heightPercentage = this.props.heightPercentage;
        rows = 2;
        return {
                margin: margin,
                // shadowColor: "#7e7d7d",
                // shadowOffset: {
                //     width: 0,
                //     height: 2,
                // },
                // shadowOpacity: 0.30,
                // shadowRadius: 2,
                // elevation: 8,
                backgroundColor: "white",
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                minWidth: (viewportWidth * widthPercentage * 0.01 - 2*margin*columns)/columns - 3,
                height: (viewportHeight * heightPercentage * 0.01 - 2*margin*rows)/rows - 3,
        }
    }
    render () {
        return (
            <TouchableOpacity style = {[this.buttonStyle()]}>
                {/*<Image
                  source={ this.props.icon }
                  style={styles.levelImage}
                  <Text style = {[styles.levelSubtitle]}>{ this.props.text }</Text>
                />*/}
                <Text style = {[styles.levelTitle]}>{ this.props.level }</Text>

            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    levelImage:{
        flex: 2,
        resizeMode: 'contain',
        width: "100%",
        margin: 40,
    },
    levelTitle:{
        // flex: 1,
        fontSize: 50,
        fontWeight: 'bold',
        letterSpacing: 4,
        color: "#d5d5d7",
    },
    levelSubtitle:{
        flex: 1,
        fontSize: 13,
    }
})
