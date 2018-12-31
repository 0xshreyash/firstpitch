import React, {Component} from 'react';
import {AsyncStorage, Dimensions, Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import Wave from '../Wave/Wave';
import {withNavigation} from 'react-navigation';
import AppText from "../AppText/AppText";

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
    }

    async componentDidMount() {
        let name = await MainMenu.getFirstName();
        this.setState({
            name: name
        });
    }

    static async getFirstName() {
        try {
            return await AsyncStorage.getItem("firstName");
        } catch (error) {
            console.warn("Could not get name from user");
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.waveBackground}>
                    <Wave startAnimation={false} stopAnimation={false}
                          waveColor={'#000000'}
                          backgroundColor={'#ffffff'}
                          numberOfWaves={2}
                          amplitude={0.25}
                          height={100}/>
                </View>
                <View styles={styles.content}>
                    <View style={styles.welcomeText}>
                        <AppText style={styles.titleText}>
                            First Pitch
                        </AppText>
                        <AppText style={styles.subtitleText}>
                            Hello {this.state.name}!
                        </AppText>
                    </View>
                    <View style={styles.options}>
                        {
                            this.state.options.map((item) => (
                                <TouchableOpacity style={styles.optionButton}
                                                  onPress={() => this.props.navigation.navigate(item.goto)}>
                                    <AppText style={styles.optionText}>--{item.name}--</AppText>
                                </TouchableOpacity>))
                        }
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    content: {
        alignItems: 'center',
    },
    welcomeText: {
        alignItems: 'center',
    },
    titleText: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    subtitleText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    options: {
        marginTop: 50,
        alignItems: 'center',
    },
    optionText: {
        fontSize: 30,
    }
};

export default withNavigation(MainMenu);
