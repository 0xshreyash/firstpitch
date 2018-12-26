import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import styles from './ColorTutorialStyle';
import Wave from '../Wave/Wave';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class ColorEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
    };

    render () {
        const { data: { note, color, subtitle }} = this.props;

        return (
            <View style = {styles.slideInnerContainer}>
                <Wave startAnimation={true} stopAnimation={false}
                    waveColor={'#ffffff'}
                    numberOfWaves={ 1 }
                    primaryWaveLineWidth={100}
                    height={200}/>
                <Text style = {styles.subtitleText}>{ subtitle }</Text>
            </View>

        );
    }
}
