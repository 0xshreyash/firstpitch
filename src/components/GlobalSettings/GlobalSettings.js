import React, {Component} from 'react';
import {
    SafeAreaView, View,
    AsyncStorage, Picker, Linking
} from 'react-native';
import {withMappedNavigationProps} from "react-navigation-props-mapper";
import {NavigationActions, StackActions} from 'react-navigation';
import {Header, ParagraphText, SmallText, TextButton, GlobalStyles} from "../Index"

class GlobalSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                    id: 'SOLFEGE(#)',
                    name: 'SOLFEGE(#)',
                },
                {
                    id: 'SOLFEGE(\u266D)',
                    name: 'SOLFEGE(\u266D)',
                },
            ],
            rep: '#',
            loaded: false,
        };
        this.repSelected = this.repSelected.bind(this);
        this.resetApp = this.resetApp.bind(this);
    }

    async componentWillMount() {
        let rep = await AsyncStorage.getItem("rep");
        this.setState({
            rep: rep,
            loaded: true
        }, () => this.forceUpdate());
    }

    async changeRep() {
        rep = await AsyncStorage.getItem("rep");
        rep = await JSON.parse(rep);
        if (rep) {
            this.setState({
                rep: rep
            });
        }
    }

    resetApp() {
        AsyncStorage.clear();
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'SignIn'})],
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
        console.warn(this.state.rep);
        if (this.state.loaded) {
            console.warn('Loaded now', this.state.rep);
            return (
                <SafeAreaView style={GlobalStyles.container}>
                    <Header leftIcon="backButton" leftOnPress={() => this.props.navigation.goBack()}>
                        Settings
                    </Header>
                    <View style={styles.container}>
                        <View style={styles.settingContainer}>
                            <SmallText>REPRESENTATION: </SmallText>
                            <View style={styles.setting}>
                                <Picker
                                    mode="dropdown"
                                    selectedValue={this.state.rep}
                                    onValueChange={this.repSelected}
                                    itemStyle={styles.representationItem}>
                                    {
                                        this.state.representationOptions.map(
                                            (item) => (
                                                <SmallText key={item.id} label={item.name}
                                                           value={item.id}>{item.name}</SmallText>
                                            )
                                        )
                                    }
                                </Picker>
                            </View>
                        </View>
                        <SmallText>ABOUT</SmallText>
                        <ParagraphText style={{textAlign: "justify", marginBottom: 30, marginTop: 10}}>
                            First Pitch came from a fascination with perfect pitch.
                            Over time, our ears become used to the timbre of instruments
                            and the pitches of notes, that is the point where people learn relative pitch
                            rather than perfect pitch. That is why the first pitch every day is the most important:
                            because your ears are the freshest right then.
                        </ParagraphText>
                        <View style={styles.buttonContainer}>
                            <TextButton size="small" inverse={true} onPress={this.resetApp}>Reset App</TextButton>
                            <TextButton size="small" inverse={true}
                                        onPress={() => Linking.openURL('mailto:firstpitchapp@gmail.com,')}>Contact
                                Us</TextButton>
                        </View>
                        <View style={styles.credits}>
                            <ParagraphText style={[styles.creditsText]}>Developed by Harry Zhang and Shreyash Patodia
                                2018</ParagraphText>
                            <ParagraphText style={[styles.creditsText]}>Icon made by SmashIcons from
                                www.flaticon.com</ParagraphText>
                        </View>

                    </View>
                </SafeAreaView>
            );
        } else {
            return <View></View>;
        }
    }
}

const styles = {
    container: {
        margin: 25,
        flex: 1
    },
    settingContainer: {
        marginTop: "5%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    representationItem: {},
    buttonContainer: {
        justifyContent: "space-around",
        marginBottom: 10,
        flexDirection: "row"
    },
    creditsText: {
        textAlign: "center"
    },
    credits: {
        marginTop: "auto",
        flexDirection: "column",
        alignSelf: "flex-end"
    },
    setting: {
        flex: 1,
    }
}
export default withMappedNavigationProps()(GlobalSettings);
