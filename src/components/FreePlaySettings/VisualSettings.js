import React, {Component} from 'react';
import {View, Text, Slider, Picker} from 'react-native';
import styles from './FreePlayStyle';


export default class VisualSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            representation: "sharp"
        };
    }

    render() {
        const {value} = this.state;

        return (
            <View style = {styles.settingsContainer}>
                <Text style = {styles.title}>Visuals</Text>
                <View style = {styles.setting}>
                    <View style = {styles.settingText}>
                        <Text>Representation</Text>
                    </View>
                    <Picker
                      selectedValue={this.state.representation}
                      onValueChange={(itemValue, itemIndex) => this.setState({representation: itemValue})}>
                      <Picker.Item label="&#9839;" value="sharp" />
                      <Picker.Item label="&#9837;" value="flat" />
                    </Picker>
                </View>
            </View>
        );
    }
}
