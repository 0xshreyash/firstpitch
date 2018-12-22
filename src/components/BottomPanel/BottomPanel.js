import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text,
} from 'react-native';
import Piano from '../Piano/Piano';
// import Button from 'react-native-button'

const playButton = '../../../assets/icons/play-button.png';

export default class BottomPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pianoHeight: 250,
            fillColor: true,
        }
    }

    render() {
        return (!this.props.started ?
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.onPressPlay}>
                    <View style={styles.playButton}>
                        <Image source={require(playButton)} style={[styles.playButtonImage]}/>
                    </View>
                </TouchableOpacity>
            </View> : <Piano height={this.state.pianoHeight} disabled={this.props.disabled}
                             options={this.props.options}
                             onChooseAnswer={this.props.onChooseAnswer}
                             fillColor={this.state.fillColor}/>
        );
    }
}

const
    styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 8,
        },

        playButton: {
            height: 72,
            width: 72,
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 72 / 2,
            alignItems: 'center',
            justifyContent: 'center',
        },
        playButtonImage: {
            height: 80,
            width: 80
        }

    });
