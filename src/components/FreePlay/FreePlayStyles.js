import { StyleSheet, Dimensions, Platform } from 'react-native';

export default StyleSheet.create({
    notesContainer:{
        margin: 25,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    noteButton:{
        margin: 10,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        height: 70,
        width: 70,
        borderWidth: 2,
    },
    noteOn:{
        opacity: 1,
        backgroundColor: "green"
    },
    noteOff:{
        backgroundColor: "white",
        opacity: 0.5,
    },
    settingsContainer: {
        flex: 1,
    },
    dropDown: {
        flex: 0.5,
    },
    itemStyle: {
        fontSize: 15,
        height: 75,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    dropDownSetting: {
        zIndex: 1000,
        flexDirection: "row",
    },
    dropDownSettingText: {
        margin: 25,
        flex: 0.5,
        fontSize: 30,
    },
    buttonContainer: {
        marginTop: 100,
        alignSelf: "center",
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
