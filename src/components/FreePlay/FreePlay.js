import {
    TextInput,
    AsyncStorage,
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Dimensions,
    ScrollView,
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
            notes: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'As', 'Cs', 'Ds', 'Fs', 'Gs'],
            octaves: [2, 3],
            instruments: ["piano", "epiano", "sqwave", "strings", "synth", "synthtrumpet"],
            waveColorProbability: 1,
            wrongsAllowed: 3,
        };
        this.onForwardPress = this.onForwardPress.bind(this);
        this.toggleList = this.toggleList.bind(this);
    }


    onForwardPress() {
        this.props.navigation.replace("Game", {
            gameLen: this.state.gameLen,
            instruments: this.state.instruments,
            octaves: this.state.octaves,
            notes: this.state.notes,
            waveColorProbability: this.state.waveColorProbability,
            wrongsAllowed: this.state.wrongsAllowed
        })
    }

    toggleList(listName, element){
        list = this.state[listName];
        //cannot have less than one option. eg must have one note and one octave
        if(list.length <= 1){
            return;
        }
        if(list.includes(element)){
            list.splice(list.indexOf(element), 1);
        }else{
            list.push(element);
        }
        this.setState({
            [listName]: list
        })
    }

    render() {
        return (
            <ScrollView style={styles.settingsContainer}>
                <View style={styles.setting}>
                    <View style={styles.settingText}>
                        <Text>Color Help Probability: {this.state.waveColorProbability}</Text>
                    </View>
                    <Slider
                        style={styles.settingInput}
                        step={0.1}
                        minimumValue={0}
                        maximumValue={1}
                        onValueChange={(value)=>this.setState({waveColorProbability:value})}
                        value={this.state.waveColorProbability}
                    />
                </View>
                <View style={styles.setting}>
                    <View style={styles.settingText}>
                        <Text>Wrongs Allowed: {this.state.wrongsAllowed}</Text>
                    </View>
                    <Slider
                        style={styles.settingInput}
                        step={1}
                        minimumValue={1}
                        maximumValue={10}
                        onValueChange={(value)=>this.setState({wrongsAllowed:value})}
                        value={this.state.wrongsAllowed}
                    />
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
                        onValueChange={(value)=>this.setState({gameLen:value})}
                        value={this.state.gameLen}
                    />
                </View>

                <View style = {styles.buttonContainer}>
                    {(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'As', 'Cs', 'Ds', 'Fs', 'Gs']).map((noteName) => {return (
                        <TouchableOpacity key = {noteName} onPress = {()=>this.toggleList("notes", noteName)} style = {[styles.settingButton, this.state.notes.includes(noteName) ? styles.buttonOn : styles.buttonOff]}>
                            <Text style = {styles.settingText }>{ noteName.replace("s", "#") }</Text>
                        </TouchableOpacity>
                    );})}
                </View>
                <View style = {styles.buttonContainer}>
                    {([0, 1, 2, 3, 4]).map((octaveNumber) => {return (
                        <TouchableOpacity key = {octaveNumber} onPress = {()=>this.toggleList("octaves", octaveNumber)} style = {[styles.settingButton, this.state.octaves.includes(octaveNumber) ? styles.buttonOn : styles.buttonOff]}>
                            <Text style = {styles.settingText }>{ octaveNumber }</Text>
                        </TouchableOpacity>
                    );})}
                </View>
                <View style = {styles.buttonContainer}>
                    {(["piano", "epiano", "sqwave", "strings", "synth", "synthtrumpet"]).map((instrument) => {return (
                        <TouchableOpacity key = {instrument} onPress = {()=>this.toggleList("instruments", instrument)} style = {[styles.settingButton, {width: 150, textAlign: "center"}, this.state.instruments.includes(instrument) ? styles.buttonOn : styles.buttonOff]}>
                            <Text style = {styles.settingText }>{ instrument }</Text>
                        </TouchableOpacity>
                    );})}
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
            </ScrollView>
        )
            ;
    }
}
export default withMappedNavigationProps()(FreePlay);
