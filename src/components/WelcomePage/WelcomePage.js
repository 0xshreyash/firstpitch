import {View, AsyncStorage, Image} from "react-native";
import React, {Component} from "react";
import {withMappedNavigationProps} from "react-navigation-props-mapper";
import WaveView from "../WaveView/WaveView";
import SoundPlayer from 'react-native-sound-player';
import Buttons from '@assets/buttons';

class WelcomePage extends Component {

    constructor(props) {
        super(props);
        this.handleMove = this.handleMove.bind(this);
        SoundPlayer.playSoundFile("welcome", "mp3")
    }

    componentDidMount() {
        setTimeout(async () => await this.handleMove(), 2000);
    }

    componentWillUnmount() {
        SoundPlayer.unmount()
    }


    async handleMove() {
        try {
            let name = await AsyncStorage.getItem("firstName");
            if(name != null) {
                // console.warn("The name you are signed in with is: ", name);
                this.props.navigation.replace("MainMenu");
            }
            else {
                this.props.navigation.replace("SignIn");
            }
        }
        catch(error) {
            console.warn("Could not get name");
        }

    }

    // <WaveView
    //     style={styles.waveBall}
    //     H={50}
    //     waveParams={[
    //         {A: 0, T: 100, fill: '#62c2ff'},
    //         {A: 40, T: 100, fill: '#ff5555'},
    //     ]}
    //     animated={false}
    //     speedIncreasePerWave={0}
    // />
    // <AppText style={styles.welcomeText}>First Pitch</AppText>

    render() {
        return (
            <View style={styles.welcomeTextContainer}>
                <Image style = {{width: "70%"}} source={Buttons.iconName} resizeMode="contain"/>
            </View>
        );
    }
}


const styles = {
    welcomeTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    welcomeText: {
        margin: 5,
        fontSize: 30,
        color : 'black',
    },
    wave: {
        width: 100,
        aspectRatio: 1,
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    waveBall: {
        width: 100,
        aspectRatio: 1,
        borderRadius: 100,
        overflow: 'hidden',
    }
};

export default withMappedNavigationProps()(WelcomePage);
