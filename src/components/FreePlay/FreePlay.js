import {
    View,
    SafeAreaView,
    ScrollView,
    Slider,
} from "react-native";
import React, {Component} from "react"
import {withMappedNavigationProps} from "react-navigation-props-mapper";
import {TextButton,
        GlobalStyles,
        Header,
        SmallText} from "../Index"
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
            wrongsAllowed: this.state.wrongsAllowed,
        })
    }

    toggleList(listName, element){
        let list = this.state[listName];
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
            <SafeAreaView  style={[GlobalStyles.container]}>
            <ScrollView style = {styles.container} showsVerticalScrollIndicator={false}>
                <Header leftIcon="backButton"
                        leftOnPress ={()=>this.props.navigation.goBack()}
                        rightIcon="tick"
                        rightOnPress={this.onForwardPress}
                        style = {{margin:0}}>
                        Free Play
                </Header>
                <View style={[styles.setting, {marginTop:60}]}>
                    <View style={styles.settingText}>
                        <SmallText>{ "Color Help Probability".toUpperCase()}</SmallText>
                        <SmallText>{Math.round(this.state.waveColorProbability * 10) / 10}</SmallText>
                    </View>
                    <Slider
                        style={styles.settingInput}
                        step={0.1}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor='black'
                        thumbTintColor='black'
                        onValueChange={(value)=>this.setState({waveColorProbability:value})}
                        value={this.state.waveColorProbability}
                    />
                </View>
                <View style={styles.setting}>
                    <View style={styles.settingText}>
                        <SmallText>{ "Wrongs Allowed".toUpperCase()}</SmallText>
                        <SmallText>{this.state.wrongsAllowed}</SmallText>
                    </View>
                    <Slider
                        style={styles.settingInput}
                        step={1}
                        minimumValue={1}
                        maximumValue={10}
                        minimumTrackTintColor='black'
                        thumbTintColor='black'
                        onValueChange={(value)=>this.setState({wrongsAllowed:value})}
                        value={this.state.wrongsAllowed}
                    />
                </View>
                <View style={styles.setting}>
                    <View style={styles.settingText}>
                        <SmallText>{ "Game Length".toUpperCase()}</SmallText>
                        <SmallText>{this.state.gameLen}</SmallText>
                    </View>
                    <Slider
                        style={styles.settingInput}
                        step={1}
                        minimumValue={1}
                        maximumValue={100}
                        minimumTrackTintColor='black'
                        thumbTintColor='black'
                        onValueChange={(value)=>this.setState({gameLen:value})}
                        value={this.state.gameLen}
                    />
                </View>
                <View>
                    <SmallText>NOTES</SmallText>
                    <View style = {styles.buttonContainer}>
                        {(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'As', 'Cs', 'Ds', 'Fs', 'Gs']).map((noteName) => {return (
                            <TextButton size = "small"
                                        inverse = {true}
                                        key = {noteName}
                                        onPress = {()=>this.toggleList("notes", noteName)}
                                        style = {[{height: 70, width: 70,}, styles.button, this.state.notes.includes(noteName) ? styles.buttonOn : styles.buttonOff]}>
                                { noteName.replace("s", "#") }
                            </TextButton>
                        );})}
                    </View>
                </View>

                <View>
                    <SmallText>OCTAVES</SmallText>
                    <View style = {styles.buttonContainer}>
                        {([0, 1, 2, 3, 4]).map((octaveNumber) => {return (
                            <TextButton
                                size = "small"
                                key = {octaveNumber}
                                onPress = {()=>this.toggleList("octaves", octaveNumber)}
                                style = {[{width:150}, styles.button, this.state.octaves.includes(octaveNumber) ? styles.buttonOn : styles.buttonOff]}>
                                { GlobalStyles.toOctave(octaveNumber) }
                            </TextButton>
                        );})}
                    </View>
                </View>

                <View>
                    <SmallText>INSTRUMENTS</SmallText>
                    <View style = {styles.buttonContainer}>
                        {(["piano", "epiano", "sqwave", "strings", "synth", "synthtrumpet"]).map((instrument) => {return (
                            <TextButton
                                size = "small"
                                key = {instrument}
                                onPress = {()=>this.toggleList("instruments", instrument)}
                                style = {[{width: 150}, styles.button, this.state.instruments.includes(instrument) ? styles.buttonOn : styles.buttonOff]}>
                                { GlobalStyles.toInstrument(instrument) }
                            </TextButton>
                        );})}
                    </View>
                </View>
            </ScrollView>
            </SafeAreaView>
        )
            ;
    }
}
export default withMappedNavigationProps()(FreePlay);
