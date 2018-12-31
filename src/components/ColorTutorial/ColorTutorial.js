import React, {Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {sliderWidth, itemWidth} from './ColorTutorialStyle';
import ColorEntry from './ColorEntry';
import styles from './ColorTutorialStyle';
import {ColorTutorialEntries} from '../../static/ColorTutorialEntries';
import {NavigationActions, withNavigation} from "react-navigation";
import Buttons from '@assets/buttons';
import {withMappedNavigationProps} from "react-navigation-props-mapper";

class ColorTutorial extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currSlide: 0
        };
        this.goBack = this.goBack.bind(this);
    }

    _renderItem({item, index}) {
        return <ColorEntry data={item}/>;
    }

    goBack() {
        this.props.navigation.dispatch(NavigationActions.back())
    }


    render() {
        const {currSlide} = this.state;
        const {navigation} = this.props.navigation;

        return (
            <SafeAreaView style={styles.container}>
                <SafeAreaView style={styles.header}>
                    <TouchableOpacity style={styles.backButton} onPress={this.goBack}>
                        <Image source={Buttons.backButton} styles={styles.backButtonImage}/>
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
                    onSnapToItem={(index) => this.setState({currSlide: index})}
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

export default withMappedNavigationProps()(ColorTutorial);
