import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text,
} from 'react-native';
import PianoKey from '../PianoKey/PianoKey';
// import Button from 'react-native-button'

const playButton = '../../../assets/icons/play-button.png';
const keyProps = {
    fillColor: true,
    innerColor: "white",
    keyMargin: 0,
    blackWidth: 40,
    whiteWidth: 40,
    height: 250,
    whiteHeight: 250,
    blackHeight: 150,
    borderColor: "black"
};

export default class Piano extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyMap: {
                'A': ['W', 6],
                'B': ['W', 7],
                'C': ['W', 1],
                'D': ['W', 2],
                'E': ['W', 3],
                'F': ['W', 4],
                'G': ['W', 5],
                'A#': ['B', 6],
                'C#': ['B', 1],
                'D#': ['B', 2],
                'F#': ['B', 4],
                'G#': ['B', 5],
            },
            keys: ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C#', 'D#', 'F#', 'G#', 'A#'],
            keyProps: {
                fillColor: true,
                innerColor: "white",
                keyMargin: 0,
                blackWidth: 40,
                whiteWidth: 40,
                whiteHeight: 250,
                blackHeight: 250,
                borderColor: "black"
            },
        };
        this.generatePianoStyle = this.generatePianoStyle.bind(this);
    }


    generatePianoStyle() {
        return {
            height: this.props.pianoHeight,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            paddingTop: 8,
        }
    };

    render() {

        return (!this.props.started ?
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.onPressPlay}>
                    <View style={styles.playButton}>
                        <Image source={require(playButton)} style={[styles.playButtonImage]}/>
                    </View>
                </TouchableOpacity>
            </View> :
            <View style={[this.generatePianoStyle()]}>{
                (this.state.keys).map(
                    (name) => {
                        return (
                            <PianoKey keyNum={this.state.keyMap[name][1]} keyColor={this.state.keyMap[name][0]}
                                      keyName={name} {...keyProps} disabled={this.props.disabled ||
                                      !this.props.options.has(name)}
                                      onPress={(event) => this.props.onChooseAnswer(event, name)}/>
                        );
                    }
                )
            }

            </View>);
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
