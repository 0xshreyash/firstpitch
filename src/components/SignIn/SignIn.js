import {TextInput, AsyncStorage, View, SafeAreaView, TouchableOpacity, Image, Dimensions} from "react-native";
import React, {Component} from "react"
import {withMappedNavigationProps} from "react-navigation-props-mapper";
import Wave from "../Wave/Wave";
import AppText from "../AppText/AppText";
import Buttons from "@assets/buttons";
import SoundPlayer from 'react-native-sound-player';

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


    renderMid() {
        switch (this.state.index) {
            case 0:
                return (<AppText style={styles.text}>
                    Hello! We're excited to be part of your quest to acquire
                    perfect pitch!
                </AppText>);
            case 1:
                return(
                    <AppText style={styles.text}>
                        Perfect Pitch is the ability to identify a note when you hear it.
                    </AppText>
                )
            case 2:
                return(
                    <AppText style={styles.text}>
                        For example did you know that this was a D#?
                    </AppText>
                )
            case 3:
                return(
                    <AppText style={styles.text}>
                        Or this was an A?
                    </AppText>
                )
            case 4:
                return(
                    <AppText style={styles.text}>
                        First Pitch will teach you to recognize these notes with repetition and their association with colors.
                    </AppText>
                )
            case 5:
                return(
                    <AppText style={styles.text}>
                        There are two modes. The first is free play where you can modify the game however you want.
                        The other is to progress through our stages and try to finish the game
                    </AppText>
                )

            case 6:
                return(
                    <AppText style={styles.text}>
                        Thanks for downloading and playing First Pitch. Have Fun!
                    </AppText>
                )
            case 7:
                return (<View>
                    <AppText style={styles.text}>
                        Before we get started, please enter your name in the field
                        below:
                    </AppText>
                    <TextInput
                        style={styles.formField}
                        placeholder="First Name"
                        onChangeText={this.handleFirstNameChange}
                        value={this.state.firstName}
                    />
                    <TextInput
                        style={styles.formField}
                        placeholder="Last Name"
                        onChangeText={this.handleLastNameChange}
                        value={this.state.lastName}
                    />
                </View>);
        }
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
            <SafeAreaView style={styles.formContainer}>
                <View style={styles.waveContainer}>
                    <Wave startAnimation={true} stopAnimation={false}
                          numberOfWaves={2}/>
                </View>
                <View style={styles.middleContainer}>
                    {this.renderMid()}
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity disabled = {this.state.index == 7 && this.state.firstName == ''}
                        onPress={this.onForwardPress}>
                        <Image source={Buttons.forwardButton}/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}


const styles = {
        formContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
        },
        waveContainer: {
            position: "absolute",
            top: viewportHeight * 0.2,
            marginBottom: 50,
        },
        middleContainer: {
            margin: 30,
        },
        formField: {
            alignSelf: "center",
            textAlign: "center",
            height: 40,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            width: 250,
            padding: 8,
            fontSize: 18,
            marginBottom: 10,
        },
        text: {
            fontSize: 20,
            margin: 20,
            alignSelf: 'center',
            color: 'black',
        },
    }
;

export default withMappedNavigationProps()(SignIn);
