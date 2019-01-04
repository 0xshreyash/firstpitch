import { StyleSheet, Dimensions, Platform } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: "#FFFFFF",
    },
    headerContainer: {
        flex: 1
    },
    waveContainer: {
        flex: 3,
        justifyContent: "center",
        alignItems: "stretch",
    },
    bottomPanelContainer: {
        alignItems: "stretch",
        justifyContent: "center",
        margin: 1,
        //padding: 20,
    },
});
