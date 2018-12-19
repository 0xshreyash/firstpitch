import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import RNSiriWaveView from 'react-native-siri-wave-view'

export default class App extends Component<{}> {
  constructor (props) {
    super(props)
    this.state = {
      startAnimation: true,
      stopAnimation: false
    }
  }

  render() {
    return <View style={styles.container}>
      <RNSiriWaveView type={0} width={800} height={750} startAnimation={this.state.startAnimation} stopAnimation={this.state.stopAnimation} />

      <TouchableOpacity style={[styles.button]} onPress={() => {
        this.setState({
          startAnimation: true,
          stopAnimation: false
        });
      }}>
        <Text>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button]} onPress={() => {
        this.setState({
          startAnimation: false,
          stopAnimation: true
        });
      }}>
        <Text>Stop</Text>
      </TouchableOpacity>
    </View>;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    flexDirection: "column"
  },
  button: {
    height: 40,
    width: 100,
    backgroundColor: "#add8e6",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  }
});