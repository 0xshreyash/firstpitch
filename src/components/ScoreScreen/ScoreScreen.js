import React, {Component} from 'react';
import {AsyncStorage, View, TouchableOpacity, SafeAreaView} from 'react-native';
import {withMappedNavigationProps} from "react-navigation-props-mapper";
import {TextButton,
        GlobalStyles,
        Wave,
        LargeText,
        Header,
        IconButton,
        SmallText,
        ParagraphText,
        Piano} from "../Index"

class ScoreScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bestScore: ''
        };
        ScoreScreen.getBestScore = ScoreScreen.getBestScore.bind(this);
        this.updateBestScore = this.updateBestScore.bind(this);
    }

    async componentDidMount() {
        let bestScore = await ScoreScreen.getBestScore();
        this.setState({
            bestScore: bestScore,
        }, this.updateBestScore);
    }

    updateBestScore() {
        if (this.props.score > this.state.bestScore) {
            try {
                AsyncStorage.setItem("bestScore", String(this.props.score));
                this.setState({
                    bestScore: this.props.score,
                });
            } catch (error) {
                console.warn("Cannot update best score.");
            }
        }
    }

    static async getBestScore() {
        try {
            return await AsyncStorage.getItem("bestScore");
        } catch (error) {
            console.warn("Could not get name from user");
        }
    }

    render() {
        if(this.props.win){
            title = "Success"
            subtitle = "You nailed those notes!"
            icons =  (
                <View style = {styles.icons}>
                    <IconButton icon = "confetti" onPress={()=>{}}/>
                    <IconButton icon = "clap" onPress={()=>{}}/>
                </View>
            )
        }else{
            title = "Close one"
            subtitle = "Practice makes perfect!"
            icons = <View></View>
        }
        accuracy = this.props.score/(this.props.score+this.props.numWrong);
        accuracy = Math.round(accuracy*100);
        return (
            <SafeAreaView style={[GlobalStyles.container]}>
                <Header rightIcon="tick" rightOnPress={() => this.props.navigation.navigate("MainMenu")}/>
                <LargeText style={{marginTop: 40, marginBottom:20}}>{ title.toUpperCase()}</LargeText>
                <SmallText style = {{marginBottom: 20}}>{ subtitle.toUpperCase() }</SmallText>
                {icons}
                <View style = {styles.stats}>
                    <SmallText style = {styles.stat}>FINAL SCORE: {this.props.score}</SmallText>
                    <SmallText style = {styles.stat}>BEST OVERALL: {this.state.bestScore}</SmallText>
                    <SmallText style = {styles.stat}>ACCURACY:{accuracy}</SmallText>
                </View>
            </SafeAreaView>
        );
    }
}


const styles = {
    stat:{
        paddingTop:15,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderColor: "#c7cdd6"
    },
    icons:{
        flexDirection: "row",
        marginTop: 50,
        marginBottom: 50,
    },
    stats:{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }
};


ScoreScreen.defaultProps = {
    win: false,
    score: 10,
    numWrong: 3
};


export default withMappedNavigationProps()(ScoreScreen);
