import React from 'react';

import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';

const Controls = ({
                      onPressPlay,
                      onChooseAnswer,
                      playing,
                      correctAnswer,
                      options
                  }) => (
    <View style={styles.container}>
        {!playing ?
            <TouchableOpacity onPress={onPressPlay}>
                <View style={styles.playButton}>
                    <Image source={require('../../../assets/icons/play-button.png')} style={[styles.playButtonImage]}/>
                </View>
            </TouchableOpacity> :
            <TouchableOpacity onPress={onPressPlay}>
                <View style={styles.playButton}>
                    <Image source={require('../../../assets/icons/settings.png')}/>
                </View>
            </TouchableOpacity>
        }
    </View>
);

export default Controls;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 8,
    },
    playButton: {
        height: 72,
        width: 72,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 72 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    secondaryControl: {
        height: 18,
        width: 18,
    },
    off: {
        opacity: 0.30,
    },
    playButtonImage: {
        height: 80,
        width: 80
    }

});
