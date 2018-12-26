import React, {Component} from 'react';
import {View, Text, Slider, Picker, Switch} from 'react-native';
import styles from './FreePlayStyle';


export default class GameMechanicSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 50,
            gameLengthInf: false,
            gameLengthDisabled: false
        };
    }

    change(value) {
        this.setState(() => {
            return {
                value: parseFloat(value),
            };
        });
    }

    toggleGameLength(value){
        this.setState({gameLengthInf: value});
    }

    render() {
        const {value, gameLengthInf, gameLengthDisabled} = this.state;

        return (
            <View style = {styles.settingsContainer}>
                <Text style = {styles.title}>Game Mechanics</Text>
                <View style = {styles.setting}>
                    <View style = {styles.settingText}>
                        <Text>Game Length</Text>
                        <Text style={styles.text}>{String(value)}</Text>
                    </View>
                    <View style = {styles.settingText}>
                        <Text>&#8734;</Text>
                        <Switch
                            onValueChange = {(value) => this.setState({gameLengthInf: value})}
                            value = {gameLengthInf}/>
                    </View>
                    <Slider
                        style = {styles.settingInput}
                        step={1}
                        maximumValue={100}
                        onValueChange={this.change.bind(this)}
                        value={value}
                        disabled={gameLengthInf}
                    />

                </View>
            </View>
        );
    }
}
