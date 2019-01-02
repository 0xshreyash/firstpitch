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

export default StyleSheet.create({
    //Carousel Styles
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 18, // needed for shadow
        alignItems: "center",
        justifyContent: "center",
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
    backButton:{
    },
    header:{
        zIndex: 100,
        flex: 1,
    },
    container:{
        height: "100%",
        flexDirection: "column"
    },

    //ColorEntry Styles
    subtitleText:{
        paddingTop: 200,
        paddingLeft: 30,
        paddingRight: 30,
        textAlign: "center",
        fontSize: 20,
    },
    noteText:{
        fontSize: 50
    }
});
