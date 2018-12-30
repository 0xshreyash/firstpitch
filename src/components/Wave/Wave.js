import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    StyleSheet,
    Dimensions,
    Platform,
} from 'react-native';

import RNSiriWaveView from "react-native-siri-wave-view";

const ios = Platform.OS === 'ios';

const Wave = (props) => (
    <View style={styles.container}>
        <RNSiriWaveView {...props}/>
    </View>
);

export default Wave;

Wave.propTypes = {
    primaryWaveLineWidth: PropTypes.number,
    secondaryWaveLineWidth: PropTypes.number,
    frequency: PropTypes.number,
    width: PropTypes.number
};

Wave.defaultProps = {
    primaryWaveLineWidth: ios ? 2 : 100,
    secondaryWaveLineWidth: ios  ? 1 : 250,
    frequency: ios ? 1.5 : 1,
    width: Dimensions.get("window").width,
};

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
