import { StyleSheet, Dimensions, Platform } from 'react-native';
import {GlobalStyles} from "../Index"

export default StyleSheet.create({
    container:{
        margin: 25,
    },

    setting: {
        marginTop:30,
        zIndex: 1000,
        marginBottom: 30,
    },
    settingText: {
        marginBottom: 15,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    settingInput: {
        zIndex: 1000,
        color:"black"

    },

    button:{
        borderRadius: GlobalStyles.borderRadiusLow,
        margin: 10,
    },
    buttonContainer:{
        marginTop: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 40,
    },
    buttonOn:{
        backgroundColor: "#b0aeaa"
    },
    buttonOff:{
        backgroundColor: "#ececec",
    },
})
