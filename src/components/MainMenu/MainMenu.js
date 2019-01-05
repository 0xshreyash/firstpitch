import React, {Component} from 'react';
import {AsyncStorage, Dimensions, Text, TouchableOpacity, View, SafeAreaView, Image} from 'react-native';
import {withNavigation, NavigationActions, StackActions} from 'react-navigation';
import Buttons from '@assets/buttons';
import SoundPlayer from 'react-native-sound-player';
import {TextButton,
        GlobalStyles,
        Wave,
        LargeText,
        Header,
        IconButton,
        SmallText,
        ParagraphText,
        Piano} from "../Index"

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

class MainMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            options: [{
                name: 'Color Tutorial',
                goto: 'ColorTutorial',
            }, {
                name: 'Free Play',
                goto: 'FreePlay',
            }, {
                name: 'Stages Menu',
                goto: 'StageMenu',
            }]
        };
        MainMenu.getFirstName = MainMenu.getFirstName.bind(this)
        this.playSoundAndNavigate = this.playSoundAndNavigate.bind(this)
    }

    async componentDidMount() {
        let name = await MainMenu.getFirstName();
        this.setState({
            name: name
        });
    }

    componentWillUnmount() {
        SoundPlayer.unmount()
    }

    static async getFirstName() {
        try {
            return await AsyncStorage.getItem("firstName");
        } catch (error) {
            console.warn("Could not get name from user");
        }
    }

    playSoundAndNavigate(filename, screen){
        SoundPlayer.playSoundFile(filename, "mp3");
        this.props.navigation.navigate(screen)
    }

    render() {
        return (
            <SafeAreaView style={[GlobalStyles.container]}>
                <Header rightIcon="settingsButton" rightOnPress = {()=>this.playSoundAndNavigate("pop_2", "GlobalSettings")}>
                </Header>
                <View style = {styles.waveContainer}>
                    <Wave startAnimation={true} stopAnimation={false}
                          waveColor={'#000000'}
                          backgroundColor={'#ffffff'}
                          numberOfWaves={1}
                          amplitude={0.25}
                          height={150}
                          primaryWaveLineWidth={150}/>
                </View>
                <LargeText style = {styles.titleText}>FIRST{"\n"}PITCH</LargeText>
                <View style = {styles.buttonContainer}>
                    <SmallText style = {{margin: 10, marginBottom: 30}}>{ ("Hello " + this.state.name + "!").toUpperCase()}</SmallText>
                    {
                        this.state.options.map((item, index) => (
                            <TextButton key = {index}
                                            inverse = {true}
                                              onPress={() => {
                                                  SoundPlayer.playSoundFile("pop", "mp3")
                                                  this.props.navigation.navigate(item.goto)
                                              }} style = {[styles.menuButton]}>
                                    {item.name}
                            </TextButton>))
                    }
                </View>
            </SafeAreaView>
        );
    }
}

const styles = {
    waveContainer:{
        position: "absolute",
        top: "40%",
    },
    buttonContainer:{
        padding: 20,
        borderRadius: GlobalStyles.borderRadiusLow,
        flexDirection: "column",
        borderWidth: 2,
        alignItems: "center",
        width: "80%",
        paddingBottom: 30,
    },
    titleText:{
        letterSpacing: 5,
        fontSize: 60,
        marginTop: "10%",
        marginBottom: "10%",
        lineHeight: 80,
    },
    menuButton:{
        alignSelf: "stretch",
        margin: 10,
        padding: 10,
    }
};

export default withNavigation(MainMenu);
