import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './ColorTutorialStyle';
import ColorEntry from './ColorEntry';
import styles from './ColorTutorialStyle';
import { ColorTutorialEntries } from '../../static/ColorTutorialEntries';

export default class ColorTutorial extends Component {

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: 0
        };
    }

    _renderItem ({item, index}) {
        return <ColorEntry data={item}/>;
    }

    render () {
        //The pictures are from MenuEntries
        const { slider1ActiveSlide } = this.state;
        return (
            <View style={styles.exampleContainer}>
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={ColorTutorialEntries}
                  renderItem={this._renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  firstItem={this.state.slider1ActiveSlide}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  loop={true}
                  loopClonesPerSide={2}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                <Pagination
                  dotsLength={ColorTutorialEntries.length}
                  activeDotIndex={slider1ActiveSlide}
                  containerStyle={styles.paginationContainer}
                  dotColor={"white"}
                  dotStyle={styles.paginationDot}
                  inactiveDotColor={"white"}
                  inactiveDotOpacity={0.4}
                  inactiveDotScale={0.6}
                  carouselRef={this._slider1Ref}
                  tappableDots={!!this._slider1Ref}
                />
            </View>
        );
    }
}
