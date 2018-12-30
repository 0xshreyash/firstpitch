import React, {Component} from 'react';
import {AsyncStorage, View} from 'react-native';
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
        return (
            <View style={styles.container}>
                <AppText style={styles.titleText}>Game Over</AppText>
                <AppText style={styles.scoreText}>Score: {this.props.score}</AppText>
                <AppText style={styles.bestScoreText}>Best Score: {this.state.bestScore}</AppText>
            </View>
        );
    }
}


const styles = {
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
