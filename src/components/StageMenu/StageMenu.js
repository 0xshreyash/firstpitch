import React, {Component} from 'react';
import {Image, Platform, SafeAreaView, TouchableOpacity, View, AsyncStorage} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import StageEntry from './StageEntry';
import styles, {sliderWidth, itemWidth} from './StageStyle';
import {MenuEntries} from '../../static/MenuEntries';
import {NavigationActions} from 'react-navigation';
import Wave from "../Wave/Wave";
import Buttons from "@assets/buttons";
import {withMappedNavigationProps} from "react-navigation-props-mapper";


class StageMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slider1ActiveSlide: 0
        };
        this.goBack = this.goBack.bind(this);
        this.getUnlockedLevels();
        this._renderItem=this._renderItem.bind(this);
        this.prevLevels = 0;
    }

    goBack() {
        this.props.navigation.dispatch(NavigationActions.back())
    }

    _renderItem({item, }){
        return <StageEntry data={item} unlockedLevels={this.state.unlockedLevels}/>;
    }

    storeUnlockedLevels = async (value) => {
        try {
            await AsyncStorage.setItem("unlockedLevels", JSON.stringify(value));
        }catch(error){
            console.warn("error with storing unlockedLevels");
        }
    }

    getUnlockedLevels = async ()=>{
        value = await AsyncStorage.getItem('unlockedLevels');
        if(!value){
            this.setState({"unlockedLevels":1});
        }else{
            this.setState({"unlockedLevels":JSON.parse(value)});
        }
    }


    render() {
        const {slider1ActiveSlide} = this.state;
        return (
            <SafeAreaView style={styles.stageMenuContainer}>
                <SafeAreaView style={styles.waveBackground}>
                    <TouchableOpacity style={styles.backButton} onPress={this.goBack}>
                        <Image source={Buttons.backButton} styles={styles.backButtonImage}/>
                    </TouchableOpacity>
                    <Wave startAnimation={true} stopAnimation={false}
                          waveColor={'#000000'}
                          backgroundColor={'#ffffff'}
                          numberOfWaves={2}
                          primaryWaveLineWidth={Platform.OS === 'ios' ? 0.25 : 100}
                          amplitude={0.25}
                          height={100}/>
                </SafeAreaView>
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
            </SafeAreaView>
        );
    }
}

export default withMappedNavigationProps()(StageMenu);
