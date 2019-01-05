import React, {Component} from 'react';
import {SafeAreaView, AsyncStorage, Image, Text, TouchableOpacity, View, Dimensions} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {withMappedNavigationProps} from "react-navigation-props-mapper";
import Buttons from '@assets/buttons';
import {TextButton,
        GlobalStyles,
        Wave,
        LargeText,
        Header,
        IconButton,
        SmallText,
        ParagraphText,
        Piano} from "../Index"

class PauseScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView style={GlobalStyles.container, {height: "100%", width: "100%", justifyContent: "center", alignItems: "center"}}>
                <View style={styles.options}>
                    <SmallText style = {{color:'white', margin: 10}}>LEVEL: {this.props.levelNum}</SmallText>
                    <TextButton style = {styles.menuButton} onPress={()=>this.props.navigation.goBack()}>Resume</TextButton>
                    <TextButton style = {styles.menuButton} onPress={() => this.props.navigation.navigate("MainMenu")}>Quit</TextButton>
                </View>

            </SafeAreaView>
        );
    }
}

const styles = {
    options:{
        padding: 20,
        borderRadius: GlobalStyles.borderRadiusHigh,
        backgroundColor: GlobalStyles.colorPrimary,
        flexDirection: "column",
        alignItems: "center",
        width: "80%",
        paddingBottom: 30,
    },
    menuButton:{
        alignSelf: "stretch",
        margin: 10,
        padding: 10,
    }
};

export default withMappedNavigationProps()(PauseScreen);
