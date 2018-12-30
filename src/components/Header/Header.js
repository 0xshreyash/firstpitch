import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';
import Buttons from '@assets/buttons';
import {withMappedNavigationProps} from "react-navigation-props-mapper";

class Header extends Component {

    constructor(props) {
        super(props);
        this.pausePress = this.pausePress.bind(this);
    }

    pausePress() {
        this.props.navigation.navigate("PauseScreen");
    }


    render() {
        return (<View style={styles.container}>
            <Text style={styles.score}>{this.props.score}</Text>
            <TouchableOpacity style={[styles.pauseButton]} onPress={this.pausePress}>
                <Image source={Buttons.pauseButton} style={[styles.pauseButtonImage]}/>
            </TouchableOpacity>
        </View>);
    }

}

export default withMappedNavigationProps()(Header);

const styles = StyleSheet.create({
    container: {
        marginTop: 3,
        marginRight: 3,
    },
    score: {
        position: 'absolute',
        top: 0,
        left: 5,
        fontSize: 30
    },
    pauseButton: {
        position: 'absolute',
        top: 0,
        right: 0
    },
    pauseButtonImage: {
        height: 40,
        width: 40
    }
});
