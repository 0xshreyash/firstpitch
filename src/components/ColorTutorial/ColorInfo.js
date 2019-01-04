import React, {Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image, Platform} from 'react-native';
import {NavigationActions, withNavigation} from "react-navigation";
import Buttons from '@assets/buttons';
import {withMappedNavigationProps} from "react-navigation-props-mapper";

class ColorInfo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                    <Image source={Buttons.backButton}/>
                </TouchableOpacity>
                <Text>
                    The color piano creates an association between color and notes. For example C is associated with blue.
                    All of this came from another phenomenon called Chromesthesia, which is the ability to see colors in sound.
                </Text>
                <Text>
                    This is to create more and more connections between you and music, that is why we designed this color piano.
                    Try to remember these associations because they will help you in the games. When the color of the wave isn't black, it is the color associated with that note!
                </Text>
            </View>

        );
    }
}

export default withMappedNavigationProps()(ColorInfo);
