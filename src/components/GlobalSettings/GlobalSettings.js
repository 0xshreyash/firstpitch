import React, {Component} from 'react';
import {SafeAreaView, View, Text,
    TouchableOpacity, Image, Platform, AsyncStorage, Picker, Linking} from 'react-native';
import Buttons from '@assets/buttons';
import {withMappedNavigationProps} from "react-navigation-props-mapper";
import Wave from '../Wave/Wave';
import {withNavigation, NavigationActions, StackActions} from 'react-navigation';
import AppText from "../AppText/AppText";


class GlobalSettings extends Component {

    constructor(props) {
        super(props);
        this.state={
            representationOptions: [
                {
                    id: '#',
                    name: '#',
                },
                {
                    id: "\u266D",
                    name: "\u266D",
                },
                {
                    id: 'Solfege(#)',
                    name: 'Solfege(#)',
                },
                {
                    id: 'Solfege(\u266D)',
                    name: 'Solfege(\u266D)',
                },
            ],
            rep: '#',
            flat: false,
            solfege: false,
        }
        this.changeRep();
        this.repSelected = this.repSelected.bind(this);
        this.restartApp = this.restartApp.bind(this)
    }

    async changeRep(){
        rep = await AsyncStorage.getItem("rep");
        rep = await JSON.parse(rep);
        if(rep){
            this.setState({
                rep: rep
            })
        }

    }

    restartApp(){
        AsyncStorage.clear();
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'SignIn' })],
        });
        this.props.navigation.dispatch(resetAction);
    }

    repSelected(rep) {
        let solfege = rep.includes("Solfege");
        let flat = !rep.includes("#");
        AsyncStorage.setItem("rep", JSON.stringify(rep));
        AsyncStorage.setItem("flat", JSON.stringify(flat));
        AsyncStorage.setItem("solfege", JSON.stringify(solfege));
        this.setState({
            rep: rep,
            flat: flat,
            solfege: solfege,
        });
    }

    render() {
        return (
            <View>
                <TouchableOpacity style={styles.backButton} onPress={()=>this.props.navigation.goBack()}>
                    <Image source={Buttons.backButton} styles={styles.backButtonImage}/>
                </TouchableOpacity>
                <View style={styles.dropDownSetting}>
                    <View style={styles.dropDownSettingText}>
                        <AppText>Representation: </AppText>
                    </View>
                    <View style={styles.dropDown}>
                        <Picker
                            mode="dropdown"
                            selectedValue={this.state.rep}
                            onValueChange={this.repSelected}
                            itemStyle={styles.itemStyle}>
                            {
                                this.state.representationOptions.map(
                                    (item) => (
                                        <Picker.Item key = {item.id} label={item.name} value={item.id}/>
                                    )
                                )
                            }
                        </Picker>
                    </View>
                </View>
                <TouchableOpacity onPress={this.restartApp}>
                    <AppText>--Reset App--</AppText>
                </TouchableOpacity>
                <Text>First Pitch came from a fascination with perfect pitch.
                      Over time, our ears become used to the timbre of instruments
                      and the pitches of notes, that is the point where people learn relative pitch
                      rather than perfect pitch. That is why the first pitch every day is the most important:
                      because your ears are the freshest right then.
                </Text>
                <Text>Developed by Harry Zhang and Shreyash Patodia 2018</Text>
                <Text>Icon made by SmashIcons from www.flaticon.com</Text>
                <TouchableOpacity onPress={() => Linking.openURL('mailto:firstpitchapp@gmail.com,') }>
                    <Text>Got Questions or Feedback? Contact Us</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    dropDownSetting: {
        zIndex: 1000,
        flexDirection: "row",
    },
    dropDownSettingText: {
        margin: 25,
        flex: 0.5,
        fontSize: 30,
    },
    dropDown: {
        flex: 0.5,
    },
    itemStyle: {
        fontSize: 15,
        height: 75,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold'
    },

}
export default withMappedNavigationProps()(GlobalSettings);
