import {Text, Platform} from "react-native";
import React, {Component} from "react"
import {withMappedNavigationProps} from "react-navigation-props-mapper";

class SmallText extends Component {

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
            fontSize: 15,
            letterSpacing: 2,
            fontWeight: "bold"
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

export default withMappedNavigationProps()(SmallText);
