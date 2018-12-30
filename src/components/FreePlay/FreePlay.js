import {
    TextInput,
    AsyncStorage,
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Dimensions,
    Slider,
    Text,
    Picker,
} from "react-native";
import React, {Component} from "react"
import {withMappedNavigationProps} from "react-navigation-props-mapper";
import AppText from "../AppText/AppText";
import Buttons from "@assets/buttons";

class FreePlay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gameLen: 5,
            representationOptions: [
                {
                    id: '#',
                    name: '#',
                },
                {
                    id: "\u266D",
                    name: "\u266D",
                },
                {
                    id: 'Solfege(#)',
                    name: 'Solfege(#)',
                },
                {
                    id: 'Solfege(\u266D)',
                    name: 'Solfege(\u266D)',
                },
            ],
            rep: '#',
            flat: false,
            solfege: false,
        };
        this.onForwardPress = this.onForwardPress.bind(this);
        this.gameLenChange = this.gameLenChange.bind(this);
        this.repSelected = this.repSelected.bind(this);
    }

    repSelected(rep) {
        let solfege = rep.includes("Solfege");
        let flat = !rep.includes("#");
        this.setState({
            rep: rep,
            flat: flat,
            solfege: solfege,
        });
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
            solfege: this.state.solfege,
            flat: this.state.flat,
        })
    }


    render() {
        return (
            <SafeAreaView style={styles.settingsContainer}>
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
                <View style={styles.dropDownSetting}>
                    <View style={styles.dropDownSettingText}>
                        <AppText>Representation: </AppText>
                    </View>
                    <View style={styles.dropDown}>
                        <Picker
                            mode="dropdown"
                            selectedValue={this.state.rep}
                            onValueChange={this.repSelected}
                            itemStyle={styles.itemStyle}>
                            {
                                this.state.representationOptions.map(
                                    (item) => (
                                        <Picker.Item label={item.name} value={item.id}/>
                                    )
                                )
                            }
                        </Picker>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.forwardButton}
                            onPress={this.onForwardPress}
                            disabled={this.state.disabled}>
                            <Image
                                source={this.state.disabled ? Buttons.forwardGray : Buttons.forwardButton}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

            </SafeAreaView>
        )
            ;
    }
}


const styles = {
        settingsContainer: {
            flex: 1,
        },
        dropDown: {
            flex: 0.5,
        },
        itemStyle: {
            fontSize: 15,
            height: 75,
            color: 'black',
            textAlign: 'center',
            fontWeight: 'bold'
        },
        dropDownSetting: {
            zIndex: 1000,
            flexDirection: "row",
        },
        dropDownSettingText: {
            margin: 25,
            flex: 0.5,
            fontSize: 30,
        },
        buttonContainer: {
            marginTop: 100,
            alignSelf: "center",
        },
        setting: {
            padding: 10,
            zIndex: 1000,
        },
        repSetting: {
            flexDirection: 'row',
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
