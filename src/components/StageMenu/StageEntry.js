import React, { Component } from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity, Dimensions, Platform } from 'react-native';
import PropTypes from 'prop-types';
import styles from './StageStyle';
import StageButton from "./StageButton";
import Wave from '../Wave/Wave';
import Buttons from '@assets/buttons';
import {NavigationActions} from 'react-navigation';
import {withMappedNavigationProps} from "react-navigation-props-mapper";


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class StageEntry extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        data: PropTypes.object.isRequired,
    };

    levelButtonProps = {
        columns: 2,
        widthPercentage: 95,
        heightPercentage: 50,
        buttonMargin: 5,
    };

    generateButtons(){
        const { data: { levels}} = this.props;
        return (levels.map(
            (level, index) => {
                combinedProps = {...this.levelButtonProps, ...level, unlockedLevels: this.props.unlockedLevels, index:index};
                return [
                      <StageButton key = {index} {...combinedProps}/>
                ]
            }
        ))
    }




    levelButtonsStyling(){
        return {
            width: viewportWidth * this.levelButtonProps.widthPercentage * 0.01,
            height: viewportHeight * this.levelButtonProps.heightPercentage * 0.01,
            transform: [
                {translateY: viewportHeight * 0.2}
            ],
            flexDirection: "row",
            flexWrap: "wrap",
        }
    }

    render () {
        const { data: { title, subtitle,}} = this.props;
        return (
            <SafeAreaView style = {styles.slideInnerContainer}>
                <View style = {this.levelButtonsStyling()}>
                    { this.generateButtons() }
                </View>
                <View style = {styles.titles}>
                    <Text style = {styles.titleText}>{ title.toUpperCase() }</Text>
                    <Text style = {styles.subtitleText}>{ subtitle.toLowerCase() }</Text>
                </View>
            </SafeAreaView>

        );
    }
}

export default withMappedNavigationProps()(StageEntry);
