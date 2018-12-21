import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';

let settingsImage = '../../../assets/icons/settings.png';


const Header = ({
                    onSettingsPress,
                    score
                }) => (
    <View style={styles.container}>
        <Text style={styles.score}>{score}</Text>
        <TouchableOpacity style={[styles.settingsButton]} onPress={onSettingsPress}>
            <Image source={require(settingsImage)} style={[styles.settingsButtonImage]}/>
        </TouchableOpacity>
    </View>
);

export default Header;

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
    settingsButton: {
        position: 'absolute',
        top: 0,
        right: 0
    },
    settingsButtonImage: {
        height: 40,
        width: 40
    }
});