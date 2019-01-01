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
import styles from "./FreePlayStyles";

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
            notes: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'As', 'Cs', 'Ds', 'Fs', 'Gs']
        };
        this.onForwardPress = this.onForwardPress.bind(this);
        this.gameLenChange = this.gameLenChange.bind(this);
        this.repSelected = this.repSelected.bind(this);
        this.noteToggle = this.noteToggle.bind(this);
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
            notes: this.state.notes,
            solfege: this.state.solfege,
            flat: this.state.flat,
        })
    }

    noteToggle(noteName){
        notes = this.state.notes;
        if(notes.includes(noteName)){
            notes.splice(notes.indexOf(noteName), 1 );
        }else{
            notes.push(noteName);
        }
        this.setState({
            notes: notes
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
                </View>
                <View style = {styles.notesContainer}>
                    {
                        (['A', 'B', 'C', 'D', 'E', 'F', 'G', 'As', 'Cs', 'Ds', 'Fs', 'Gs']).map(
                            (noteName) => {
                                return (
                                    <TouchableOpacity onPress = {()=>this.noteToggle(noteName)} style = {[styles.noteButton, this.state.notes.includes(noteName) ? styles.noteOn : styles.noteOff]}>
                                        <Text style = {styles.settingText }>{ noteName.replace("s", "#") }</Text>
                                    </TouchableOpacity>
                                );
                            }
                        )
                    }
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
            </SafeAreaView>
        )
            ;
    }
}
export default withMappedNavigationProps()(FreePlay);
