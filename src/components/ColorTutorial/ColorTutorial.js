import React, { Component } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './ColorTutorialStyle';
import ColorEntry from './ColorEntry';
import styles from './ColorTutorialStyle';
import { ColorTutorialEntries } from '../../static/ColorTutorialEntries';

export default class ColorTutorial extends Component {

    constructor (props) {
        super(props);
        this.state = {
            currSlide: 0
        };
    }

    _renderItem ({item, index}) {
        return <ColorEntry data={item}/>;
    }

    render () {
        const { currSlide } = this.state;
        const {navigate} = this.props.navigation;

        return (
            <SafeAreaView style={styles.container}>
                <SafeAreaView style = {styles.header}>
                    <TouchableOpacity onPress={() => navigate("MainMenu")} style = {styles.backButton}>
                        <Text>Back</Text>
                    </TouchableOpacity>
                </SafeAreaView>
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={ColorTutorialEntries}
                  renderItem={this._renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  firstItem={this.state.currSlide}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  loop={true}
                  loopClonesPerSide={2}
                  onSnapToItem={(index) => this.setState({ currSlide: index }) }
                />
                <Pagination
                  dotsLength={ColorTutorialEntries.length}
                  activeDotIndex={currSlide}
                  containerStyle={styles.paginationContainer}
                  dotColor={"black"}
                  dotStyle={styles.paginationDot}
                  inactiveDotColor={"black"}
                  inactiveDotOpacity={0.4}
                  inactiveDotScale={0.6}
                  carouselRef={this._slider1Ref}
                  tappableDots={!!this._slider1Ref}
                />

            </SafeAreaView>
        );
    }
}
