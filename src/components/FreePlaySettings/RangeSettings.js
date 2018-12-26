import React, {Component} from 'react';
import {View, Text, Slider, Switch} from 'react-native';
import styles from './FreePlayStyle';


export default class VisualSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lowOctaves: false,
        };
    }

    render() {
        const {lowOctaves} = this.state;

        return (
            <View style = {styles.settingsContainer}>
                <Text style = {styles.title}>Range</Text>
                <View style = {styles.setting}>
                    <View style = {styles.settingText}>
                        <Text>Low Octaves</Text>
                    </View>
                    <Switch
                        onValueChange = {(value) => this.setState({lowOctaves: value})}
                        value = {lowOctaves}/>
                </View>
            </View>
        );
    }
}
