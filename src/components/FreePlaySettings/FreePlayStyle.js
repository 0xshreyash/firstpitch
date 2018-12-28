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
    container:{
        height: "100%"
    },

    //setting styles
    title:{
        fontSize: 30,
        textAlign: "center",
    },
    settingsContainer:{
        padding: 30,
        zIndex: 1000,
    },
    setting:{
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "grey",
        padding: 10,
        zIndex: 1000,
    },
    settingText:{
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    settingInput:{
        zIndex: 1000,
    },

    backButton:{
        padding: 10,
        margin: 10,
        backgroundColor: "#cbe4e2",
        borderRadius: 8,
    },
    header:{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 100,
    },
});
