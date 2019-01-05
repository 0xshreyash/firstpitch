import {TextInput, AsyncStorage, View, SafeAreaView, TouchableOpacity, Image, Dimensions} from "react-native";
import React, {Component} from "react"
import {withMappedNavigationProps} from "react-navigation-props-mapper";
import Buttons from "@assets/buttons";
import SoundPlayer from 'react-native-sound-player';
import {TextButton,
        GlobalStyles,
        Wave,
        LargeText,
        Header,
        IconButton,
        SmallText,
        ParagraphText,
        Piano} from "../Index"

const viewportHeight = Dimensions.get("window").height;

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            numPages: 8,
            firstName: '',
            lastName: '',
        };
        this.onForwardPress = this.onForwardPress.bind(this);
        this.renderMid = this.renderMid.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.setNames = this.setNames.bind(this);
    }

    componentWillUnmount() {
        SoundPlayer.unmount()
    }

    handleFirstNameChange(text) {
        this.setState({
            firstName: text
        });

    }

    handleLastNameChange(text) {
        this.setState({
            lastName: text
        });
    }


    getMid() {
        switch (this.state.index) {
            case 0:
                return  "Hello! We're excited to be part of your quest to acquire perfect pitch!";
            case 1:
                return "Perfect Pitch is the ability to identify a note when you hear it"
            case 2:
                return "For example did you know that this was a D#?"
            case 3:
                return "Or this was an A?"
            case 4:
                return "First Pitch will teach you to recognize these notes with repetition and their association with colors."
            case 5:
                return "There are two modes. The first is free play where you can modify the game however you want. The other is to progress through our stages and try to finish the game"
            case 6:
                return "Thanks for downloading and playing First Pitch. Have Fun!"
            case 7:
                return (<View>
                    <ParagraphText style = {styles.text}>{ "Before we get started, please enter your name in the field below:".toUpperCase()}</ParagraphText>
                    <TextInput
                        style={styles.formField}
                        placeholder="FIRST NAME"
                        onChangeText={this.handleFirstNameChange}
                        value={this.state.firstName}
                    />
                </View>);
        }
    }

    renderMid(){
        content = this.getMid();
        if(typeof content == "string"){
            return (<ParagraphText style = {styles.text}>{ content.toUpperCase()}</ParagraphText>)
        }
        return content
    }
    playSound(){
        if(this.state.index == 3){
            SoundPlayer.playSoundFile("piano_a3", "mp3");
        }
        if(this.state.index == 2){
            SoundPlayer.playSoundFile("piano_ds3", "mp3");
        }
    }


    async onForwardPress() {
        if (this.state.index === this.state.numPages-1) {
            if (this.state.firstName !== '') {
                this.setNames();
                this.props.navigation.replace("MainMenu");
            }
            if (this.state.firstName === '') {

            }
            if (this.state.lastName === '') {

            }
        } else {
            await this.setState((prevState) => (
                {
                    index: prevState.index + 1,
                })
            )
        }
        this.playSound();
    }

    async setNames() {
        try {
            await AsyncStorage.setItem('firstName', this.state.firstName);
            await AsyncStorage.setItem('lastName', this.state.lastName);
            await AsyncStorage.setItem('bestScore', "0");
        } catch (error) {
            // Error saving data
            console.warn("Error saving name.");
        }
    }


    render() {
        return (
            <SafeAreaView style={GlobalStyles.container}>
                <View style={styles.waveContainer}>
                    <Wave startAnimation={true} stopAnimation={false}
                          numberOfWaves={1}/>
                </View>
                <View style={styles.textContainer}>
                    {this.renderMid()}
                </View>
                <View style = {styles.forwardButtonContainer}>
                    <IconButton style = {{height: 50, width: 50}}
                                onPress={this.onForwardPress}
                                icon="forwardButton"
                                disabled = {this.state.index == 7 && this.state.firstName == ''}/>
                </View>
            </SafeAreaView>
        );
    }
}


const styles = {
    textContainer:{
        marginTop: "40%",
        marginBottom: "20%",
        marginLeft: "15%",
        marginRight: "15%"
    },
    forwardButtonContainer:{
        position: "absolute",
        top: "60%",
        justifyContent: "center",
        alignItems: "center"
    },
    waveContainer: {
        position: "absolute",
        bottom: "20%"
    },
    formField: {
        marginTop: "5%",
        alignSelf: "center",
        textAlign: "center",
        height: 40,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: 250,
        padding: 8,
        fontSize: 18,
        marginBottom: 10,
        letterSpacing: 2,
    },
    text:{
        textAlign: "center",
        fontSize: 20
    }
}
;

export default withMappedNavigationProps()(SignIn);
