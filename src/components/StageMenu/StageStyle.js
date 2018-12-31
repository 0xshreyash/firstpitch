import { StyleSheet, Dimensions, Platform } from 'react-native';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const IS_IOS = Platform.OS === 'ios';

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight - (32*2+15);
const slideWidth = wp(100);
const itemHorizontalMargin = wp(0);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

export default StyleSheet.create({
    //carousel
    carouselContainer: {
        paddingVertical: 0,
        flex: 4,
    },
    paginationContainer: {
        paddingVertical: 32
    },
    paginationDot: {
        width: 15,
        height: 15,
        borderRadius: 8,
        marginHorizontal: 12
    },
    //LevelPage
    titles:{
        position: "absolute",
        left:viewportWidth*0.05,
        top: viewportHeight*0.3,
    },
    titleText:{
        fontSize: 30,
        letterSpacing: 3,
        color: "black",
        fontWeight: "bold",
    },
    subtitleText:{
        fontSize: 20,
        letterSpacing: 3,
        color: "black",
    },
    waveBackground:{
        flex: 1,
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1000,
    },
    stageMenuContainer: {
        flex: 5,
    },
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 18, // needed for shadow
        alignItems: "center",
        justifyContent: "center",
    },
});
