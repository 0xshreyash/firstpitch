import { StyleSheet, Dimensions, Platform } from 'react-native';


instrumentMap = {
    "piano":"Piano",
    "epiano": "EPiano",
    "sqwave":"Square",
    "strings":"Strings",
    "synth":"Synth",
    "synthtrumpet":"ETrumpet"
}

octaveMap = {
    0:"Lowest",
    1:"Low",
    2:"Mid",
    3:"High",
    4:"Highest"
}

export default {
    buttonOn: "#b0aeaa",
    buttonOff: "#ececec",
    colorPrimary: "black",
    container:{
        backgroundColor: "white",
        flex: 1,
        flexDirection: "column",
        alignItems: "center"
    },
    colorButton: "white",
    colorText: "black",
    colorSecondary: "yellow",
    borderRadiusExtreme: 30,
    borderRadiusHigh: 15,
    borderRadiusLow: 8,
    toInstrument: (instrument)=>this.instrumentMap[instrument.toLowerCase()],
    toOctave:(octave)=>this.octaveMap[octave]
}
