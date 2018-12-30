import {TextInput, AsyncStorage, View, SafeAreaView, TouchableOpacity, Image, Dimensions} from "react-native";
import React, {Component} from "react"
import {withMappedNavigationProps} from "react-navigation-props-mapper";
import Wave from "../Wave/Wave";
import AppText from "../AppText/AppText";
import Buttons from "@assets/buttons";

const viewportHeight = Dimensions.get("window").height;

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            numPages: 2,
            firstName: '',
            lastName: '',
            disabled: false,
        };
        this.onForwardPress = this.onForwardPress.bind(this);
        this.renderMid = this.renderMid.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.setNames = this.setNames.bind(this);
        this.checkEnabling = this.checkEnabling.bind(this);
    }

    handleFirstNameChange(text) {
        this.setState({
            firstName: text
        }, this.checkEnabling);

    }

    handleLastNameChange(text) {
        this.setState({
            lastName: text
        }, this.checkEnabling);
    }

    checkEnabling() {
        if (this.state.firstName !== '' && this.state.lastName !== '') {
            this.setState({
                    disabled: false,
                }
            )
        }
        else {
            this.setState({
                    disabled: true,
                }
            )
        }

    }

    renderMid() {
        switch (this.state.index) {
            case 0:
                return (<AppText style={styles.text}>
                    Hello! We're excited to be part of your quest to acquire
                    perfect pitch!
                </AppText>);
            case 1:
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

    onForwardPress() {
        if (this.state.index === this.state.numPages - 1) {
            if (this.state.firstName !== '' && this.state.lastName !== '') {
                this.setNames();
                this.props.navigation.replace("MainMenu");
            }
            if (this.state.firstName === '') {

            }
            if (this.state.lastName === '') {

            }
        } else {
            if (this.state.index === this.state.numPages - 2) {
                this.setState({
                    disabled: true,
                })
            }
            this.setState((prevState) => (
                {
                    index: prevState.index + 1,
                })
            )
        }
    }

    async setNames() {
        try {
            await AsyncStorage.setItem('firstName', this.state.firstName);
            await AsyncStorage.setItem('lastName', this.state.lastName);
        } catch (error) {
            // Error saving data
            console.warn("Error saving name.");
        }
    }

    buttonStyle() {
        return {
            color: this.state.disabled ? '#222222' : '#000000'
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
                    <TouchableOpacity style={[styles.forwardButton]} onPress={this.onForwardPress}
                                      disabled={this.state.disabled}>
                        <Image source={this.state.disabled ? Buttons.forwardGray : Buttons.forwardButton}/>
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
        forwardButtonContainer: {
            marginTop: 50,
            justifyContent: "right",
            height: 50,
            width: 50,
            alignItems: "flex-end",
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
