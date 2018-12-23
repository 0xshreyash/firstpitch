import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';
import RNSiriWaveView from "react-native-siri-wave-view";


let width = {
    width: Dimensions.get("window").width,
}

const Wave = (props) => (
    <View style={styles.container}>
        <RNSiriWaveView {...props} {...width}/>
    </View>
);

export default Wave;

const styles = StyleSheet.create({
    container: {
        marginTop: 3,
        marginRight: 3,
    },
    settingsButton: {
        position: 'absolute',
        top: 0,
        right: 0
    },
    settingsButtonImage: {
        height: 40,
        width: 40
    }
});
