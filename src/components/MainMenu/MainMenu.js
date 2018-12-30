import React, {Component} from 'react';
import {AsyncStorage, Dimensions, Text, TouchableOpacity, View} from 'react-native';
import styles from './LevelStyle';
import Wave from '../Wave/Wave';
import {withNavigation} from 'react-navigation';


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class MainMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
        Profile.getFirstName = Profile.getFirstName.bind(this)
    }

    async componentDidMount() {
        let name = await Profile.getFirstName();
        this.setState({
            name: name
        });
    }

    static async getFirstName() {
        try {
            return await AsyncStorage.getItem("firstName");
        }
        catch(error) {
            console.warn("Could not get name from user");
        }
    }

    render () {
        const {navigate} = this.props.navigation;
        return (
            <View style = {styles.slideInnerContainer}>
                <View style = {styles.waveBackground}>
                    <Wave startAnimation={true} stopAnimation={false}
                          waveColor={'#000000'}
                          backgroundColor={'#ffffff'}
                          numberOfWaves={2}
                          amplitude={0.25}
                          height={100}/>
                </View>
                <View style = {styles.titles}>
                    <Text style = {styles.titleText}>First Pitch</Text>
                    <Text style = {styles.subtitleText}>Welcome {this.state.name}!</Text>
                    <TouchableOpacity onPress={() => navigate("ColorTutorial")}>
                        <Text style={styles.titleText}>--Color Tutorial--</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate("FreePlay")}>
                        <Text style={ styles.titleText}>--Free Play--</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

export default withNavigation(MainMenu);
