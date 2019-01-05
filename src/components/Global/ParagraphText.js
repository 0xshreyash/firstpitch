import {Text, Platform} from "react-native";
import React, {Component} from "react"
import {withMappedNavigationProps} from "react-navigation-props-mapper";

class ParagraphText extends Component {

    generateTextStyle() {
        const ios = Platform.OS === 'ios';
        let style = {
            fontFamily: 'System',
            color: "#000000",
        };
        if(!ios) {
            style = {
                fontFamily: 'Roboto',
                color: "#000000",
            }
        }
        agnostic = {
            lineHeight: 28,
            fontSize: 15
        }
        return {...style, ...agnostic};
    }

    render() {
        return (
            <Text style={[this.generateTextStyle(), this.props.style]}>
                {this.props.children}
            </Text>
        );
    }
}

export default withMappedNavigationProps()(ParagraphText);
