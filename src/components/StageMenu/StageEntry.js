import React, { Component } from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity, Dimensions, Platform } from 'react-native';
import PropTypes from 'prop-types';
import StageButton from "./StageButton";
import Buttons from '@assets/buttons';
import {NavigationActions} from 'react-navigation';
import {withMappedNavigationProps} from "react-navigation-props-mapper";
import {TextButton,
        GlobalStyles,
        Wave,
        LargeText,
        Header,
        IconButton,
        SmallText,
        ParagraphText,
        MediumText,
        Piano} from "../Index"

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
            // width: viewportWidth * this.levelButtonProps.widthPercentage * 0.01,
            // height: viewportHeight * this.levelButtonProps.heightPercentage * 0.01,
            flexDirection: "row",
            flexWrap: "wrap",
        }
    }

    render () {
        const { data: { title, subtitle,}} = this.props;
        return (
            <SafeAreaView style = {styles.stageContainer}>
                <View style = {styles.titles}>
                    <MediumText style = {{textAlign: "center", fontSize: 30, letterSpacing: 5}}>{"Stage " + this.props.stageNum }</MediumText>
                    <SmallText style = {{textAlign: "center", letterSpacing: 2}}>{ subtitle.toUpperCase() }</SmallText>
                </View>
                <View style = {this.levelButtonsStyling()}>
                    { this.generateButtons() }
                </View>
            </SafeAreaView>

        );
    }
}

export default withMappedNavigationProps()(StageEntry);


const styles = {
    titles:{
        borderWidth: 2,
        padding: 2,
        marginBottom: 40,
    },
    stageContainer: {
        flexDirection: "column",
        width: "100%",
        flex: 1,
        paddingHorizontal: 0,
        alignItems: "center",
        justifyContent: "center",
    },
};
