import React, {Component} from 'react';
import {
    View,
} from 'react-native';
import PianoKey from './PianoKey';

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
                'As': ['B', 6],
                'Cs': ['B', 1],
                'Ds': ['B', 2],
                'Fs': ['B', 4],
                'Gs': ['B', 5],
            },
            keys: ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'Cs', 'Ds', 'Fs', 'Gs', 'As'],
            keyProps: {
                keyMargin: 0,
                blackWidth: 40,
                whiteWidth: 40,
                whiteHeight: 250,
                blackHeight: 150,
                borderColor: "black",
            },
        };
        this.generatePianoStyle = this.generatePianoStyle.bind(this);
    }

    generatePianoStyle = function () {
        return {
            height: this.props.height,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
        }
    };

    render() {
        return (
            <View style={[this.generatePianoStyle()]}>
                {
                    (this.state.keys).map(
                        (name) => {
                            return (
                                <PianoKey keyNum={this.state.keyMap[name][1]} keyColor={this.state.keyMap[name][0]}
                                          keyName={name} {...this.state.keyProps} {...this.props}
                                          disabled={this.props.disabled || !this.props.options.has(name)}
                                          onPress={(event) => this.props.onChooseAnswer(event, name)}/>
                            );
                        }
                    )
                }
            </View>
        )
    }
}
