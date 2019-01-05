import React, {Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image, Platform} from 'react-native';
import {ColorTutorialEntries} from '../../static/ColorTutorialEntries';
import {NavigationActions, withNavigation} from "react-navigation";
import Buttons from '@assets/buttons';
import {withMappedNavigationProps} from "react-navigation-props-mapper";
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

class ColorTutorial extends Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "white",
            subtitle: "",
            note: "",
            // wave
            startAnimation: true,
            stopAnimation: false,
            waveAmplitude: Platform.OS === 'ios' ? 1 : 250,
            waveWidth: Platform.OS === 'ios' ? 3 : 450,
            waveColor: 'white',
            numberOfWaves: 5,
        };
        this.goBack = this.goBack.bind(this);
        this.onChooseAnswer = this.onChooseAnswer.bind(this);
    }

    componentDidMount() {
        SoundPlayer.onFinishedPlaying((success: boolean) => { // success is true when the sound is played
          console.log("Finished playing note!", success);
        });
    }
    componentWillUnmount() {
        SoundPlayer.unmount()
    }

    goBack() {
        this.props.navigation.dispatch(NavigationActions.back())
    }

    onChooseAnswer(event, noteName){
        SoundPlayer.stop();
        filename = "piano_" + noteName.toLowerCase() + "3";
        SoundPlayer.playSoundFile(filename, "mp3")
        for(let i = 0; i < ColorTutorialEntries.length; i++){
            obj = ColorTutorialEntries[i]
            if(obj["note"] == noteName){
                this.setState({
                    waveColor: obj["color"],
                    note: obj["note"],
                    subtitle: obj["subtitle"]
                })
                return;
            }
        }
    }

    render() {
        const {currSlide} = this.state;
        const {navigation} = this.props.navigation;

        return (
            <SafeAreaView style={GlobalStyles.container}>
                <Header leftOnPress={this.goBack} leftIcon = "backButton"
                        rightOnPress={()=>this.props.navigation.navigate("ColorInfo")} rightIcon={"information"}>
                    Tutorial
                </Header>
                <View style = {styles.waveContainer}>
                    <Wave startAnimation={this.state.startAnimation} stopAnimation={this.state.stopAnimation}
                          waveAmplitude={this.state.waveAmplitude} waveWidth={this.state.waveWidth}
                          waveColor={this.state.waveColor}
                          numberOfWaves={this.state.numberOfWaves}/>
                </View>
                <View style = {styles.middle}>
                    <LargeText style = {{color:this.state.waveColor, marginBottom: 20}}>{this.state.note.replace("s", "#")}</LargeText>
                    <ParagraphText style = {styles.explanation}>{this.state.subtitle}</ParagraphText>
                </View>
                <View style = {styles.pianoContainer}>
                    <Piano onChooseAnswer = {this.onChooseAnswer}/>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = {
    waveContainer:{
        marginTop: 60,
    },
    explanation:{
        marginLeft: 30,
        marginRight: 30,
        textAlign: "center",
    },
    middle:{
        flex:3,
        flexDirection: "column",
        alignItems: "center"
    },
    pianoContainer:{
        alignSelf: "stretch"
     }
}
export default withMappedNavigationProps()(ColorTutorial);
