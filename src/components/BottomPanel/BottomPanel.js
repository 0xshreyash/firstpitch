import React from 'react';


import {
    View,
    StyleSheet,
    ScrollView,
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
                        return (<Button
                                containerStyle={{
                                    padding: 10,
                                    height: 50,
                                    width: 70,
                                    overflow: 'scroll',
                                    borderRadius: 4,
                                    backgroundColor: '#EEEEEE',
                                    margin: 10,
                                }} disabledContainerStyle={{backgroundColor: 'grey'}}
                                style={{fontSize: 20, color: 'black', justifyContent: 'center', alignItems: 'center'}}>{option}</Button>
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
        justifyContent: 'center',
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
