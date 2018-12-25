import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');


export default class LevelButton extends Component {

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
        return (
            <TouchableOpacity style={[this.buttonStyle()]} onPress={this.props.onPress}>
                <Text style={[styles.levelTitle]}>{this.props.level}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    levelImage: {
        flex: 2,
        resizeMode: 'contain',
        width: "100%",
        margin: 40,
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
