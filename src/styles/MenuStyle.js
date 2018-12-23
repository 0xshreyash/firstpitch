import { StyleSheet, Dimensions, Platform } from 'react-native';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default StyleSheet.create({
    menu: {
        paddingVertical: 0,
        backgroundColor: "#b4dafe",
        flex: 9,
    },
    header: {
        flex: 1,
        maxHeight: 50,
    },
    menuContainer: {
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
