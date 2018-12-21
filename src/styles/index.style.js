import { StyleSheet, Dimensions, Platform } from 'react-native';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default StyleSheet.create({
    exampleContainer: {
        paddingVertical: 0
    },
    slider: {
        marginTop: 0,
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 0 // for custom animation
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginHorizontal: 8
    }
});
