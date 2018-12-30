import React, {Component} from 'react';
import {View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import StageEntry from './StageEntry';
import styles, {sliderWidth, itemWidth}  from './StageStyle';
import {MenuEntries} from '../../static/MenuEntries';

export default class StageMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slider1ActiveSlide: 0
        };
    }

    _renderItem({item,}) {
        return <StageEntry data={item} />;
    }

    render() {
        const {slider1ActiveSlide} = this.state;
        return (
            <View style={styles.carouselContainer}>
                <Carousel
                    ref={c => this._slider1Ref = c}
                    data={MenuEntries}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    firstItem={this.state.slider1ActiveSlide}
                    inactiveSlideScale={0.94}
                    inactiveSlideOpacity={0.7}
                    loop={false}
                    loopClonesPerSide={2}
                    onSnapToItem={(index) => this.setState({slider1ActiveSlide: index})}
                />
                <Pagination
                    dotsLength={MenuEntries.length}
                    activeDotIndex={slider1ActiveSlide}
                    containerStyle={styles.paginationContainer}
                    dotColor={"black"}
                    dotStyle={styles.paginationDot}
                    inactiveDotColor={"black"}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    carouselRef={this._slider1Ref}
                    tappableDots={!!this._slider1Ref}
                />
            </View>
        );
    }
}
