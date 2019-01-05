import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text,
    Platform
} from 'react-native';
import Buttons from '@assets/buttons';
import {withMappedNavigationProps} from "react-navigation-props-mapper";
import {IconButton} from "../Index"

class Header extends Component {

    constructor(props) {
        super(props);
    }

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
            fontWeight: "bold",
            flex: 1,
            textAlign: "center"

        }
        return {...style, ...this.props.style, ...agnostic};
    }


    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <IconButton icon={this.props.leftIcon} onPress={this.props.leftOnPress}/>
                <Text style = {this.generateTextStyle()}>
                    { this.props.children != undefined ? this.props.children.toUpperCase() : ""}
                </Text>
                <IconButton pauseButtonIsTOOPHAT = {this.props.pauseButtonIsTOOPHAT} icon={this.props.rightIcon} onPress={this.props.rightOnPress}/>
            </View>);
    }

}

export default withMappedNavigationProps()(Header);

const styles = {
    container: {
        flexDirection: "row",
        margin: 15,
        justifyContent: "space-between",
        alignItems: "center"
    },
};
