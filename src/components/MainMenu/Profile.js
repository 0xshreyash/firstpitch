import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, Platform } from 'react-native';
import PropTypes from 'prop-types';
import styles from './MenuStyle';
import Wave from '../Wave/Wave';
import { withNavigation } from 'react-navigation';


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class Profile extends Component {


    render () {
        const {navigate} = this.props.navigation;
        return (
            <View style = {styles.slideInnerContainer}>
                <View style = {styles.waveBackground}>
                    <Wave startAnimation={true} stopAnimation={false}
                            waveColor={'#000000'}
                            backgroundColor={'#ffffff'}
                            numberOfWaves={2}
                            primaryWaveLineWidth={Platform.OS === 'ios' ? 0.25 : 100}
                            amplitude={0.25}
                            height={100}/>
                </View>
                <View style = {styles.titles}>
                    <Text style = {styles.titleText}>First Pitch</Text>
                    <Text style = {styles.subtitleText}>Welcome Harry</Text>
                    <TouchableOpacity onPress={() => navigate("ColorTutorial")}>
                        <Text style={ styles.titleText}>--Color Tutorial--</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

export default withNavigation(Profile);
