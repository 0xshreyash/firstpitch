import React, {Component} from 'react';
import {View, Text, Slider} from 'react-native';
import styles from './FreePlayStyle';


export default class AssociationSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 50,
        };
    }

    change(value) {
        this.setState(() => {
            return {
                value: parseFloat(value),
            };
        });
    }
    render() {
        const {value} = this.state;

        return (
            <View style = {styles.settingsContainer}>
                <Text style = {styles.title}>Associations</Text>
                <View style = {styles.setting}>
                    <View style = {styles.settingText}>
                        <Text>Wave Colour Probability</Text>
                        <Text style={styles.text}>{String(value)}</Text>
                    </View>
                    <Slider
                        style = {styles.settingInput}
                        step={1}
                        maximumValue={100}
                        onValueChange={this.change.bind(this)}
                        value={value}
                    />
                </View>

            </View>
        );
    }
}
