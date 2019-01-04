import React, {Component} from 'react';
import {SafeAreaView, AsyncStorage, Image, Text, TouchableOpacity, View, Dimensions} from 'react-native';
import AppText from '../AppText/AppText';
import {NavigationActions} from 'react-navigation';
import {withMappedNavigationProps} from "react-navigation-props-mapper";
import Buttons from '@assets/buttons';


class PauseScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>

                <View style={styles.options}>
                    <TouchableOpacity style={styles.optionButton} onPress={()=>this.props.navigation.goBack()}>
                        <AppText style={styles.optionText}>Resume</AppText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton}
                                      onPress={() => this.props.navigation.navigate("MainMenu")}>
                        <AppText style={styles.optionText}>Quit</AppText>
                    </TouchableOpacity>
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
