import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {withMappedNavigationProps} from "react-navigation-props-mapper";
import {withNavigation, NavigationActions} from 'react-navigation';
import Buttons from '@assets/buttons';
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

class StageLevelInfo extends Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.navigation.dispatch(NavigationActions.back())
    }

    render() {
        return (
            <View>
                <Header leftIcon = "backButton"
                        leftOnPress = {this.goBack}
                        rightIcon = "tick"
                        rightOnPress={()=>this.props.navigation.navigate("Game", {...this.props})}>
                    Level Info
                </Header>
                <View>
                    <SmallText style = {styles.levelNumber}>LEVEL: {this.props.levelNum}</SmallText>
                    <MediumText style = {styles.levelTitle}>{this.props.levelName}</MediumText>
                </View>
                <View>
                    <SmallText style = {styles.levelInfo}>INSTRUMENTS: {this.props.instruments.map(GlobalStyles.toInstrument).join(" ").toUpperCase()}</SmallText>
                    <SmallText style = {styles.levelInfo}>OCTAVES: {this.props.octaves.map(GlobalStyles.toOctave).join(" ").toUpperCase()}</SmallText>
                    <SmallText style = {styles.levelInfo}>LENGTH: {this.props.gameLen}</SmallText>
                    <SmallText style = {styles.levelInfo}>NOTES: {this.props.notes.join(" ").toUpperCase().replace("S", "#")}</SmallText>
                    <SmallText style = {styles.levelInfo}>WRONGS ALLOWED: {this.props.wrongsAllowed}</SmallText>
                    <SmallText style = {styles.levelInfo}>WAVE COLOR PROBABILITY: {this.props.waveColorProbability}</SmallText>
                </View>
            </View>
        );
    }
}



const styles = {
    levelTitle:{
        textAlign: "center",
        fontSize: 40,
        marginBottom: 50,
        letterSpacing: 1,
    },
    levelNumber:{
        marginBottom: 20,
        marginTop: 40,
        textAlign: "center",
    },
    levelInfo:{
        textAlign: "center",
        marginLeft: 40,
        marginRight: 40,
        paddingTop: 15,
        borderColor: "#b1beb7",
        paddingBottom: 15,
        borderBottomWidth: 1,
    }
}

export default withMappedNavigationProps()(StageLevelInfo);
