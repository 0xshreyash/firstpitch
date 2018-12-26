import React, {Component} from 'react';
import GamePage from './src/components/GamePage/GamePage';
import MainMenu from './src/components/MainMenu/MainMenu';
import WelcomePage from './src/components/WelcomPage/WelcomPage';
import ColorTutorial from './src/components/ColorTutorial/ColorTutorial';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const AppNavigator = createStackNavigator({
    WelcomePage: {
        screen: WelcomePage
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
