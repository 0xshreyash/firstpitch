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
        this.getUnlockedLevels();
        this.goBack = this.goBack.bind(this);
        this._renderItem=this._renderItem.bind(this);
        this.prevLevels = 0;
        this.currLevel = 0;
        this.addLevelNums(MenuEntries);
    }

    addLevelNums(obj){
        levelNum = 1;
        for(let i = 0;i<obj.length;i++){
            stageLevels = obj[i]["levels"];
            for(let j=0;j<stageLevels.length;j++){
                level = stageLevels[j];
                level["levelNum"] = levelNum;
                levelNum +=1;
            }
        }
        console.warn(levelNum);

    }

    goBack() {
        this.props.navigation.dispatch(NavigationActions.back())
    }

    _renderItem({item, index}){
        // oldCurrLevel = this.currLevel;
        // this.currLevel += item.levels.length;
        // console.warn("oldCurrLevel", oldCurrLevel);
        return <StageEntry data={item} unlockedLevels={this.state.unlockedLevels} stageNum ={index+1}/>;
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
            await this.setState({"unlockedLevels":1});
        }else{
            await this.setState({"unlockedLevels":JSON.parse(value)});
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
