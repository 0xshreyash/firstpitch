import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';

let settingsImage = '../../../assets/icons/settings.png';

const Header = ({
                    onSettingsPress
                }) => (
    <View style={styles.container}>
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