import { StyleSheet, Dimensions, Platform } from 'react-native';

export default StyleSheet.create({
    buttonContainer:{
        margin: 25,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    settingButton:{
        margin: 10,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        height: 70,
        width: 70,
        borderWidth: 2,
    },
    buttonOn:{
        opacity: 1,
        backgroundColor: "green"
    },
    buttonOff:{
        backgroundColor: "white",
        opacity: 0.5,
    },
    settingsContainer: {
        flex: 1,
    },
    setting: {
        padding: 10,
        zIndex: 1000,
    },
    repSetting: {
        flexDirection: 'row',
        zIndex: 1000,
    },
    settingText: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    settingInput: {
        zIndex: 1000,
    },
    waveContainer: {
        marginBottom: 50,
    },
    menuContainer: {
        margin: 30,
    },
    formField: {
        alignSelf: "center",
        textAlign: "center",
        height: 40,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: 250,
        padding: 8,
        fontSize: 18,
        marginBottom: 10,
    },
    text: {
        fontSize: 20,
        margin: 20,
        alignSelf: 'center',
        color: 'black',
    },
})
