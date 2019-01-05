import React, {Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image, Platform} from 'react-native';
import {NavigationActions, withNavigation} from "react-navigation";
import Buttons from '@assets/buttons';
import {withMappedNavigationProps} from "react-navigation-props-mapper";
import {TextButton,
        GlobalStyles,
        Wave,
        LargeText,
        Header,
        IconButton,
        SmallText,
        ParagraphText,
        Piano} from "../Index"

class ColorInfo extends Component {

    constructor(props) {
        super(props);
    }

    goBack() {
        this.props.navigation.dispatch(NavigationActions.back())
    }

    render() {
        return (
            <SafeAreaView style = {GlobalStyles.container}>
                <Header leftOnPress={()=>this.goBack()} leftIcon= "backButton">
                    Explanation
                </Header>
                <SmallText style = {styles.title}>{"Chromesthesia".toUpperCase()}</SmallText>
                <ParagraphText style = {styles.text}>
                    The color piano creates an association between color and notes. For example C is associated with blue.
                    All of this came from another phenomenon called Chromesthesia, which is the ability to see colors in sound.
                </ParagraphText>
                <ParagraphText style = {styles.text}>
                    We want to create more and more connections between you and music, that is why we designed this color piano.
                    Try to remember these associations because they will help you in the games. When the color of the wave isn't black, it is the color associated with that note!
                </ParagraphText>
            </SafeAreaView>

        );
    }
}

const styles = {
    title:{
        marginTop: 60,
        marginBottom: 20
    },
    text:{
        margin: 35,
        textAlign: "center"
    }
}
export default withMappedNavigationProps()(ColorInfo);
