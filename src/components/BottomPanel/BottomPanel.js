import React from 'react';


import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import Button from 'react-native-button'

const BottomPanel = ({
                         onPressPlay,
                         onChooseAnswer,
                         paused,
                         correctAnswer,
                         options
                     }) => (
    <View style={styles.container}>
        {paused ?
            <TouchableOpacity onPress={onPressPlay}>
                <View style={styles.playButton}>
                    <Image source={require('../../../assets/icons/play-button.png')} style={[styles.playButtonImage]}/>
                </View>
            </TouchableOpacity> :
            <View style={styles.buttonContainer}>{options.map((option) => {
                        return (<TouchableOpacity>
                                <Text>
                                {option}
                                </Text>
                        </TouchableOpacity>
                        );
                    }
                )
            }</View>
        }
    </View>
);

export default BottomPanel;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
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

    playButtonImage: {
        height: 80,
        width: 80
    }

});
