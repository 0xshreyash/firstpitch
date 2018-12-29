import React, {Component} from 'react';
import GamePage from './src/components/GamePage/GamePage';
import MainMenu from './src/components/MainMenu/MainMenu';
import WelcomePage from './src/components/WelcomePage/WelcomePage';
import ColorTutorial from './src/components/ColorTutorial/ColorTutorial';
import FreePlaySettings from './src/components/FreePlaySettings/FreePlaySettings';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import SignIn from './src/components/SignIn/SignIn';

const AppNavigator = createStackNavigator({
    WelcomePage: {
        screen: WelcomePage
    },
    SignIn: {
        screen: SignIn
    },
    FreePlaySettings:{
        screen: FreePlaySettings
    },
    Game: {
        screen: GamePage
    },
    MainMenu: {
        screen: MainMenu
    },
    ColorTutorial:{
        screen: ColorTutorial
    }
},
{
    headerMode: 'none',
    navigationOptions: {
    headerVisible: false,
}
});

const AppContainer = createAppContainer(AppNavigator);


export default class App extends Component {
    render() {
        return <AppContainer />
    }
}
