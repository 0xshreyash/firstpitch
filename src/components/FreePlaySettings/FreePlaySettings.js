import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles, {sliderWidth, itemWidth}  from './FreePlayStyle';
import AssociationSettings from "./AssociationSettings";
import VisualSettings from "./VisualSettings"
import GameMechanicSettings from "./GameMechanicSettings";
import RangeSettings from "./RangeSettings";

export default class FreePlaySettings extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currSlide: 0,
        };
    }

    _renderItem ({item, index}) {
        if(index == 1){
            return <AssociationSettings data={item}/>;
        }
        if(index == 2){
            return <VisualSettings data={item}/>;
        }
        if(index == 3){
            return <RangeSettings data={item}/>;
        }
        else{
            return <GameMechanicSettings data={item}/>;
        }
    }

    FreePlayEntries = [{}, {}, {}, {}]

    render() {
        const { currSlide } = this.state;
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style = {styles.header}>
                    <TouchableOpacity onPress={() => navigate("MainMenu")} style = {styles.backButton}>
                        <Text>Back</Text>
                    </TouchableOpacity>
                </View>
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={this.FreePlayEntries}
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
                  dotsLength={this.FreePlayEntries.length}
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

            </View>
        );
    }
}
