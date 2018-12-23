import React, {Component} from 'react';
import GamePage from './src/components/GamePage/GamePage';
import MainMenu from './src/components/MainMenu/MainMenu';
import WelcomePage from './src/components/WelcomPage/WelcomPage';
import {createStackNavigator, createAppContainer} from 'react-navigation';



const AppNavigator = createStackNavigator({
    WelcomePage: {
        screen: WelcomePage
    },
    Game: {
        screen: GamePage
    },
    Home: {
        screen: MainMenu
    },
});

const AppContainer = createAppContainer(AppNavigator);


export default class App extends Component {
    render() {

        return <AppContainer />
    }
}






