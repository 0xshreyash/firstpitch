import {
    TextInput,
    AsyncStorage,
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Dimensions,
    Slider,
    Text, Switch
} from "react-native";
import React, {Component} from "react"
import {withMappedNavigationProps} from "react-navigation-props-mapper";
import Wave from "../Wave/Wave";
import AppText from "../AppText/AppText";
import MultiSelect from 'react-native-multiple-select';
import Buttons from "@assets/buttons";

const viewportHeight = Dimensions.get("window").height;

class FreePlay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gameLen: 5,
        };
        this.onForwardPress = this.onForwardPress.bind(this);
        this.gameLenChange = this.gameLenChange.bind(this);
    }

    gameLenChange(value) {
        this.setState(
            {
                gameLen: value,
            }
        );
    }

    onForwardPress() {
        this.props.navigation.replace("Game", {
            gameLen: this.state.gameLen,
            instruments: ['piano'],
            octaves: [2, 3],
            notes: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'As', 'Cs', 'Ds', 'Fs', 'Gs'],
        })
    }


    render() {
        return (
            <SafeAreaView style={styles.settingsContainer}>
                <View style={styles.waveContainer}>
                    <Wave startAnimation={true} stopAnimation={false}
                          numberOfWaves={2}/>
                </View>
                <View style={styles.setting}>
                    <View style={styles.settingText}>
                        <Text>Game Length: {this.state.gameLen}</Text>
                    </View>
                    <Slider
                        style={styles.settingInput}
                        step={1}
                        minimumValue={1}
                        maximumValue={100}
                        onValueChange={this.gameLenChange}
                        value={this.state.gameLen}
                    />
                </View>
                < View style={styles.buttonContainer}>
                    < TouchableOpacity
                        style={[styles.forwardButton]}
                        onPress={this.onForwardPress}
                        disabled={this.state.disabled}>
                        < Image
                            source={this.state.disabled ? Buttons.forwardGray : Buttons.forwardButton}
                        />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>);
    }
}


const styles = {
        settingsContainer: {
            flex: 1,
        },
        buttonContainer: {
            margin: 20,
            alignSelf: "flex-end",
        },
        setting: {
            borderColor: "grey",
            padding: 10,
            zIndex: 1000,
        },
        settingText: {
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between"
        },
        settingInput: {
            zIndex: 1000,
        },
        waveContainer: {
            marginBottom: 50,
        },
        menuContainer: {
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

export default withMappedNavigationProps()(FreePlay);
