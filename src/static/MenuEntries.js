export const MenuEntries = [
    //the first one is a placeholder for the Profile Page
    {
        subtitle: 'The Basics',
        illustration: require("@assets/icons/pattern.png"),

        levels:[
                {

                    levelName: "Starting with C and G",
                    instruments: ["piano"],
                    octaves: [3],
                    notes: ["C", "G"],
                    waveColorProbability: 1,
                    gameLen: 20,
                    wrongsAllowed: 5
                },
                {

                    levelName: "E (z)",
                    instruments: ["piano"],
                    octaves: [3],
                    notes: ["C", "E", "G"],
                    waveColorProbability: 1,
                    gameLen: 20,
                    wrongsAllowed: 3
                },
                {

                    levelName: "Meet D",
                    instruments: ["piano"],
                    octaves: [3],
                    notes: ["C", "E", "D"],
                    waveColorProbability: 1,
                    gameLen: 20,
                    wrongsAllowed: 3
                },
                {

                    levelName: "The White Notes",
                    instruments: ["piano"],
                    octaves: [3],
                    notes: ["C", "E", "D", "F", "G"],
                    waveColorProbability: 1,
                    gameLen: 20,
                    wrongsAllowed: 5
                }
        ],
    },
    {
        subtitle: 'The Basics 2',
        illustration: require("@assets/icons/pattern.png"),

        levels:[
                {
                    levelName: "Another Octave",
                    instruments: ["piano"],
                    octaves: [2],
                    notes: ["C", "E", "D", "F", "G"],
                    waveColorProbability: 1,
                    gameLen: 25,
                    wrongsAllowed: 6
                },
                {
                    levelName: "Again but harder",
                    instruments: ["piano"],
                    octaves: [2],
                    waveColorProbability: 1,
                    notes: ["C", "E", "D", "F", "G"],
                    gameLen: 25,
                    wrongsAllowed: 6
                },
                {
                    levelName: "Multiple Octaves",
                    instruments: ["piano"],
                    octaves: [2, 3],
                    notes: ["C", "E", "D", "F", "G"],
                    waveColorProbability: 1,
                    gameLen: 15,
                    wrongsAllowed: 3
                },
                {
                    levelName: "A lotta trouble",
                    instruments: ["piano"],
                    octaves: [3],
                    notes: ["C", "E", "D", "F", "G", "A"],
                    waveColorProbability: 1,
                    gameLen: 20,
                    wrongsAllowed: 3
                }
        ],
    },
    {
        subtitle: 'All the white keys',
        illustration: require("@assets/icons/pattern.png"),
        levels:[
                {
                    levelName: "A full show",
                    instruments: ["piano"],
                    octaves: [2],
                    notes: ["C", "E", "D", "F", "G", "A", "B"],
                    waveColorProbability: 1,
                    gameLen: 20,
                    wrongsAllowed: 5
                },
                {
                    levelName: "Again but harder",
                    instruments: ["piano"],
                    octaves: [2],
                    waveColorProbability: 1,
                    notes: ["C", "E", "D", "F", "G", "A", "B"],
                    gameLen: 20,
                    wrongsAllowed: 3
                },
                {
                    levelName: "Multiple Octaves",
                    instruments: ["piano"],
                    octaves: [2, 3],
                    notes: ["C", "E", "D", "F", "G", "A", "B"],
                    waveColorProbability: 1,
                    gameLen: 20,
                    wrongsAllowed: 5
                },
                {
                    levelName: "Is this a boss fight",
                    instruments: ["piano"],
                    octaves: [2, 3],
                    notes: ["C", "E", "D", "F", "G", "A", "B"],
                    waveColorProbability: 1,
                    gameLen: 30,
                    wrongsAllowed: 5
                }
        ],
    },
    {
        subtitle: 'New Sound',
        illustration: require("@assets/icons/pattern.png"),
        levels:[
                {
                    levelName: "Introducing the Synth",
                    instruments: ["synth"],
                    octaves: [3],
                    notes: ["C", "E", "G"],
                    waveColorProbability: 1,
                    gameLen: 20,
                    wrongsAllowed: 5
                },
                {

                    levelName: "Whites Keys on the Synth",
                    instruments: ["synth"],
                    octaves: [3],
                    notes: ["C", "E", "G", "D", "F"],
                    waveColorProbability: 1,
                    gameLen: 20,
                    wrongsAllowed: 5,
                },
                {

                    levelName: "Lower Voices",
                    instruments: ["synth"],
                    octaves: [2],
                    notes: ["C", "E", "D", "F", "G", "A", "B"],
                    waveColorProbability: 1,
                    gameLen: 20,
                    wrongsAllowed: 5,
                },
        ],
    },
    {
        subtitle: 'Vision Loss',
        illustration: require("@assets/icons/pattern.png"),
        levels:[
                {
                    levelName: "Out of sight",
                    instruments: ["piano"],
                    octaves: [3],
                    notes: ["C", "E", "G"],
                    waveColorProbability: 0.5,
                    gameLen: 30,
                    wrongsAllowed: 10
                },
                {

                    levelName: "Step up",
                    instruments: ["piano"],
                    octaves: [3],
                    notes: ["C", "E", "G", "D", "F"],
                    waveColorProbability: 0.5,
                    gameLen: 20,
                    wrongsAllowed: 5,
                },
                {

                    levelName: "In the darkness 1",
                    instruments: ["piano"],
                    octaves: [2],
                    notes: ["C", "E", "D", "F", "G"],
                    waveColorProbability: 0,
                    gameLen: 15,
                    wrongsAllowed: 3,
                },
                {

                    levelName: "In the darkness 2",
                    instruments: ["piano"],
                    octaves: [2],
                    notes: ["C", "E", "D", "F", "G", "A"],
                    waveColorProbability: 0,
                    gameLen: 25,
                    wrongsAllowed: 6,
                },
        ],
    },
    {
        subtitle: 'Expansion',
        illustration: require("@assets/icons/pattern.png"),
        levels:[
                {

                    levelName: "Mixture",
                    instruments: ["synth", "piano"],
                    octaves: [2, 3],
                    notes: ["C", "E", "D", "F", "G", "A", "B"],
                    waveColorProbability: 1,
                    gameLen: 20,
                    wrongsAllowed: 5
                },
                {

                    levelName: "Next octave up",
                    instruments: ["synth", "piano"],
                    octaves: [3, 4],
                    notes: ["C", "E", "D", "F", "G", "A", "B"],
                    waveColorProbability: 0.8,
                    gameLen: 20,
                    wrongsAllowed: 5
                },
                {

                    levelName: "Low medium and high",
                    instruments: ["synth", "piano"],
                    octaves: [2, 3, 4],
                    notes: ["C", "E", "D", "F", "G", "A", "B"],
                    waveColorProbability: 0.8,
                    gameLen: 30,
                    wrongsAllowed: 5
                },
                {

                    levelName: "In the Darkness 3",
                    instruments: ["synth", "piano"],
                    octaves: [2, 3, 4],
                    notes: ["C", "E", "D", "F", "G", "A", "B"],
                    waveColorProbability: 0,
                    gameLen: 20,
                    wrongsAllowed: 5
                },
        ],
    },
    {
        subtitle: 'The First Black Key',
        illustration: require("@assets/icons/pattern.png"),
        levels:[
                {

                    levelName: "C#",
                    instruments: ["piano"],
                    octaves: [2, 3],
                    notes: ["C", "E", "F","A", "Cs"],
                    waveColorProbability: 1,
                    gameLen: 20,
                    wrongsAllowed: 5
                },
                {

                    levelName: "Ease in",
                    instruments: ["piano"],
                    octaves: [2, 3],
                    notes: ["C", "D", "G", "A", "B", "Cs"],
                    waveColorProbability: 0.8,
                    gameLen: 20,
                    wrongsAllowed: 5
                },
                {

                    levelName: "White keys + 1",
                    instruments: ["piano"],
                    octaves: [2, 3],
                    notes: ["C", "E", "D", "F", "G", "A", "B", "Cs"],
                    waveColorProbability: 0.8,
                    gameLen: 20,
                    wrongsAllowed: 5
                },
                {

                    levelName: "In the darkness 4",
                    instruments: ["piano"],
                    octaves: [3, 4],
                    notes: ["C", "E", "D", "F", "G", "A", "B", "Cs"],
                    waveColorProbability: 0,
                    gameLen: 20,
                    wrongsAllowed: 5
                },
        ],
    },
    {
        subtitle: 'The Challenge',
        illustration: require("@assets/icons/pattern.png"),
        levels:[
                {
                    levelName: "The Last One",
                    instruments: ["piano", "synth"],
                    octaves: [1, 4],
                    notes: ["C", "E", "D", "F", "G", "A", "B", "Cs", "Ds"],
                    waveColorProbability: 0.5,
                    gameLen: 5
                },
        ],
    },
];
