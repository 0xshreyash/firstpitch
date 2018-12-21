import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


export default class LevelButton extends Component {
    render () {
        return (
            <TouchableOpacity
                style = {[styles.levelButton]}
            >
                <Image
                  source={{ uri: "https://images.vexels.com/media/users/3/143528/isolated/preview/cc4fe6d36794d677dbd7090cb2c9a9b2-eighth-note-music-by-vexels.png" }}
                  style={styles.levelImage}
                />
                <Text style = {[styles.levelText]}>LEVEL 1</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    levelImage:{
        flex: 1,
        resizeMode: 'contain',
        width: "100%",
        margin: 40,
    },
    levelButton:{
            flex: 1,
            margin: 5,
            shadowColor: "#7e7d7d",
            shadowOffset: {
            	width: 0,
            	height: 2,
            },
            shadowOpacity: 0.30,
            shadowRadius: 2,
            elevation: 8,
            backgroundColor: "white",
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center"
    },
    levelText:{
        flex: 1,
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: 4,
        color: "#d5d5d7",
    }
})
