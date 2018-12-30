import React, {Component} from 'react';
import {
    Dimensions,
    View,
} from 'react-native';
import PianoKey from './PianoKey';
import PropTypes from 'prop-types';
import Wave from "../Wave/Wave";


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
            repMap: {
                'C': 'Do',
                'Cs': 'Dos',
                'D': 'Re',
                'Ds': 'Res',
                'E': 'Mi',
                'F': 'Fa',
                'Fs': 'Fas',
                'G': 'Sol',
                'Gs': 'Sols',
                'A': 'La',
                'As': 'Las',
                'B': 'Ti',
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
        this.getName = this.getName.bind(this);
    }

    generatePianoStyle = function () {
        return {
            height: this.props.height,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
        }
    };

    getName(name) {
        let val = name;
        if (val[val.length - 1] === 's') {
            val = val.slice(0, val.length - 1);
            if (this.props.sharp !== '#') {
                val = this.state.keys[(this.state.keys.indexOf(val) + 1) % 7];
            }
            val = this.props.solfege ? this.state.repMap[val] + '\n' : val;
            val += this.props.solfege ? '(' + this.props.sharp + ')' : this.props.sharp;
        }
        else {
            val = this.props.solfege ? this.state.repMap[val] + '\n' : val;
        }

        return val;
    }

    render() {
        return (
            <View style={[this.generatePianoStyle()]}>
                {
                    (this.state.keys).map(
                        (name) => {
                            return (
                                <PianoKey keyNum={this.state.keyMap[name][1]} keyColor={this.state.keyMap[name][0]}
                                          keyName={this.getName(name)} {...this.state.keyProps} {...this.props}
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

Piano.propTypes = {
    solfege: PropTypes.bool,
};

Piano.defaultProps = {
    solfege: false,
};



