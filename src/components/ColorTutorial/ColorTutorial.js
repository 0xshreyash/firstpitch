import React, {Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image, Platform} from 'react-native';
import {sliderWidth, itemWidth} from './ColorTutorialStyle';
import styles from './ColorTutorialStyle';
import {ColorTutorialEntries} from '../../static/ColorTutorialEntries';
import {NavigationActions, withNavigation} from "react-navigation";
import Buttons from '@assets/buttons';
import {withMappedNavigationProps} from "react-navigation-props-mapper";
import Piano from "../Piano/Piano";
import Wave from '../Wave/Wave';
import SoundPlayer from 'react-native-sound-player';


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
            waveAmplitude: Platform.OS === 'ios' ? 1 : 100,
            waveWidth: Platform.OS === 'ios' ? 3 : 250,
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
                    backgroundColor: obj["color"],
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
            <SafeAreaView style={[styles.container, {backgroundColor: this.state.backgroundColor}]}>
                <SafeAreaView style={styles.header}>
                    <TouchableOpacity style={styles.backButton} onPress={this.goBack}>
                        <Image source={Buttons.backButton} styles={styles.backButtonImage}/>
                    </TouchableOpacity>
                </SafeAreaView>
                <View style = {{flex:3}}>
                    <Wave startAnimation={this.state.startAnimation} stopAnimation={this.state.stopAnimation}
                          waveAmplitude={this.state.waveAmplitude} waveWidth={this.state.waveWidth}
                          waveColor={this.state.waveColor}
                          numberOfWaves={this.state.numberOfWaves}/>
                    <Text>Note: {this.state.note}</Text>
                    <Text>Explanation: {this.state.subtitle}</Text>
                </View>
                <View style = {{flex:3}}>
                    <Piano onChooseAnswer = {this.onChooseAnswer}/>
                </View>
            </SafeAreaView>
        );
    }
}

export default withMappedNavigationProps()(ColorTutorial);
