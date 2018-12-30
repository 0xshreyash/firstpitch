import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import Piano from '../Piano/Piano';
import Buttons from '@assets/buttons';


export default class BottomPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pianoHeight: 250,
            fillColor: true,
            flatSymbol: '',
            sharpSymbol: '',

        }
    }

    componentDidMount() {
        if(this.props.flat) {
            this.setState({
                flatSymbol: '\u266D',
                sharpSymbol: '',
            })
        }
        else {
            this.setState({
                flatSymbol: '',
                sharpSymbol: '#',
            })
        }
    }


    render() {
        return (!this.props.started ?
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.onPressPlay}>
                    <View style={styles.playButton}>
                        <Image source={Buttons.playButton} style={[styles.playButtonImage]}/>
                    </View>
                </TouchableOpacity>
            </View> : <Piano height={this.state.pianoHeight} disabled={this.props.disabled}
                             options={this.props.options}
                             solfege={this.props.solfege}
                             flat={this.state.flatSymbol}
                             sharp={this.state.sharpSymbol}s
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
