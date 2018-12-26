import { StyleSheet, Dimensions, Platform } from 'react-native';

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight - (32*2+15);
const slideWidth = wp(100);
const itemHorizontalMargin = wp(0);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;


export default StyleSheet.create({
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 18, // needed for shadow
        alignItems: "center",
        justifyContent: "center",
    },
    subtitleText:{
        fontSize: 20,
        letterSpacing: 3,
        color: "white",
    },
    exampleContainer: {
        paddingVertical: 0,
        backgroundColor: "#b4dafe",
        flex: 1,
    },
    slider: {
        marginTop: 0,
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 0 // for custom animation
    },
    paginationContainer: {
        //if you change this then change slideHeight as well under SliderEntry.style.js
        paddingVertical: 32
    },
    paginationDot: {
        width: 15,
        //if you change this then change slideHeight as well under SliderEntry.style.js
        height: 15,
        borderRadius: 8,
        marginHorizontal: 12
    }
});
