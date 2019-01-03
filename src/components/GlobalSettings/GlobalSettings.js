import React, {Component} from 'react';
import {SafeAreaView, View, Text,
    TouchableOpacity, Image, Platform, AsyncStorage, Picker} from 'react-native';
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
        this.repSelected = this.repSelected.bind(this);
        this.restartApp = this.restartApp.bind(this)
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
        this.setState({
            rep: rep,
            flat: flat,
            solfege: solfege,
        });
    }

    render() {
        return (
            <View>
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
                                        <Picker.Item label={item.name} value={item.id}/>
                                    )
                                )
                            }
                        </Picker>
                    </View>
                </View>
                <TouchableOpacity onPress={this.restartApp}>
                    <AppText>--Reset App--</AppText>
                </TouchableOpacity>
                <Text>Developed by Harry Zhang and Shreyash Patodia 2018</Text>
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
