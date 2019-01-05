import React, {Component} from 'react';
import GamePage from './src/components/GamePage/GamePage';
import StageMenu from './src/components/StageMenu/StageMenu';
import WelcomePage from './src/components/WelcomePage/WelcomePage';
import ColorTutorial from './src/components/ColorTutorial/ColorTutorial';
import ScoreScreen from './src/components/ScoreScreen/ScoreScreen';
import MainMenu from './src/components/MainMenu/MainMenu';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import FreePlay from './src/components/FreePlay/FreePlay';
import SignIn from './src/components/SignIn/SignIn';
import PauseScreen from "./src/components/PauseScreen/PauseScreen";
import GlobalSettings from "./src/components/GlobalSettings/GlobalSettings"
import StageLevelInfo from "./src/components/StageMenu/StageLevelInfo"
import ColorInfo from "./src/components/ColorTutorial/ColorInfo"
// 1. finish color tutorial so we have set colors
// 2. Add a mechanism where you lose if you have 3 wrongs
// 3. Make stages unlockable. So you start with one stage then you unlock the next by completing the previous one
const AppNavigator = createStackNavigator({

    WelcomePage: {
        screen: WelcomePage
    },
    ColorTutorial: {
        screen: ColorTutorial
    },


    ScoreScreen: {
        screen: ScoreScreen,
    },
    StageMenu: {
        screen: StageMenu
    },
    Game: {
        screen: GamePage
    },
    FreePlay: {
        screen: FreePlay,
    },
    MainMenu: {
        screen: MainMenu
    },
    SignIn: {
        screen: SignIn
    },
    GlobalSettings:{
        screen: GlobalSettings
    },



    PauseScreen: {
        screen: PauseScreen,
    },



    StageLevelInfo:{
        screen: StageLevelInfo
    },
    ColorInfo:{
        screen:ColorInfo
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
        return (
            <AppContainer />
        )
    }
}
