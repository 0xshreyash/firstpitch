import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {withMappedNavigationProps} from "react-navigation-props-mapper";
import {withNavigation, NavigationActions} from 'react-navigation';
import Buttons from '@assets/buttons';

class StageLevelInfo extends Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
        console.warn(this.props.notes);
    }

    goBack() {
        this.props.navigation.dispatch(NavigationActions.back())
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.goBack}>
                    <Image source={Buttons.backButton}/>
                </TouchableOpacity>
                <View>
                    <Text>Level Num: {this.props.levelNum}</Text>
                    <Text>Level Name : {this.props.levelName}</Text>
                    <Text>Instruments: {this.props.instruments}</Text>
                    <Text>Octaves: {this.props.octaves}</Text>
                    <Text>Length: {this.props.gameLen}</Text>
                    <Text>Notes: {this.props.notes}</Text>
                    <Text>wrongsAllowed: {this.props.wrongsAllowed}</Text>
                    <Text>WaveColor Probability: {this.props.waveColorProbability}</Text>
                </View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Game", {...this.props})}>
                    <Text style = {{fontSize: 50}}>GO</Text>
                </TouchableOpacity>
            </View>
        );
    }
}



const styles = StyleSheet.create({

})

export default withMappedNavigationProps()(StageLevelInfo);
