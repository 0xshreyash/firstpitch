import React, {Component} from 'react';
import GamePage from './src/components/GamePage/GamePage';
import StageMenu from './src/components/LevelMenu/StageMenu';
import WelcomePage from './src/components/WelcomePage/WelcomePage';
import ColorTutorial from './src/components/ColorTutorial/ColorTutorial';
import FreePlaySettings from './src/components/FreePlaySettings/FreePlaySettings';
import ScoreScreen from './src/components/ScoreScreen/ScoreScreen';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import FreePlay from './src/components/FreePlay/FreePlay';
import SignIn from './src/components/SignIn/SignIn';
import PauseScreen from "./src/components/PauseScreen/PauseScreen";

const AppNavigator = createStackNavigator({
    WelcomePage: {
        screen: WelcomePage
    },
    SignIn: {
        screen: SignIn
    },
    FreePlaySettings:{
        screen: FreePlaySettings,
    },
    ScoreScreen: {
        screen: ScoreScreen,
    },
    PauseScreen: {
        screen: PauseScreen,
    },
    FreePlay: {
        screen: FreePlay,
    },
    Game: {
        screen: GamePage
    },
    StageMenu: {
        screen: StageMenu
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
