import React, {Component} from 'react';
import {AsyncStorage, View, TouchableOpacity} from 'react-native';
import AppText from '../AppText/AppText';
import {withMappedNavigationProps} from "react-navigation-props-mapper";


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
        }else{
            title = "Close one"
            subtitle = "Practice makes perfect!"
        }
        return (
            <View style={styles.container}>
                <AppText style={styles.titleText}>{ title }</AppText>
                <AppText style={styles.titleText}>{ subtitle}</AppText>
                <AppText style={styles.scoreText}>Final Score: {this.props.score}</AppText>
                <AppText style={styles.bestScoreText}>Best Overall Score: {this.state.bestScore}</AppText>
                <AppText style={styles.bestScoreText}>Accuracy: {this.props.score/(this.props.score+this.props.numWrong)}</AppText>
                <TouchableOpacity style={styles.optionButton}
                                  onPress={() => this.props.navigation.navigate("MainMenu")}>
                    <AppText style={styles.optionText}>Menu</AppText>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = {
    optionButton: {
        backgroundColor: "#eeeeee",
        width: 160,
        height: 80,
        borderRadius: 25,
        marginBottom: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    titleText: {
        fontSize: 50,
        margin: 20,
    },
    scoreText: {
        fontSize: 70,
        margin: 20,
    },
    bestScoreText: {
        fontSize: 20,
        margin: 20,
    },
};

export default withMappedNavigationProps()(ScoreScreen);
