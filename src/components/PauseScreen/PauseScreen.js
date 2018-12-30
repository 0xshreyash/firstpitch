import React, {Component} from 'react';
import {SafeAreaView, AsyncStorage, Image, Text, TouchableOpacity, View, Dimensions} from 'react-native';
import AppText from '../AppText/AppText';
import {NavigationActions} from 'react-navigation';
import {withMappedNavigationProps} from "react-navigation-props-mapper";
import Buttons from '@assets/buttons';


class PauseScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: [{
                name: 'Main Menu',
                goto: 'StageMenu',
            },
                {
                    name: 'Restart',
                    goto: 'FreePlay',
                }]
        };
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        console.warn("Go back called");
        console.warn(this.props.navigation);
        this.props.navigation.dispatch(NavigationActions.back())
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={this.goBack}>
                    <Image source={Buttons.backButton} styles={styles.backButtonImage}/>
                </TouchableOpacity>
                <View style={styles.options}>
                    {
                        this.state.options.map((item) => (
                            <TouchableOpacity style={styles.optionButton}
                                              onPress={() => this.props.navigation.replace(item.goto)}>
                                <AppText style={styles.optionText}>{item.name}</AppText>
                            </TouchableOpacity>))
                    }
                </View>

            </SafeAreaView>
        );
    }
}


const styles = {
    container: {
        flexDirection: "column",
        justifyContent: "center",
    },
    backButton: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    backButtonImage: {
        height: 40,
        width: 40
    },
    options: {
        top: Dimensions.get("window").height / 3.0,
        alignSelf: "center",
    },
    optionText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    optionButton: {
        backgroundColor: "#eeeeee",
        width: 160,
        height: 80,
        borderRadius: 25,
        marginBottom: 30,
        justifyContent: "center",
        alignItems: "center",
    },
};

export default withMappedNavigationProps()(PauseScreen);
