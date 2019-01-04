export const MenuEntries = [
    //the first one is a placeholder for the Profile Page
    {
        title: 'Stage 1',
        subtitle: 'The Basics',
        illustration: require("@assets/icons/pattern.png"),
        waveCount: 1,
        levels:[
                {
                    levelNum: 1,
                    levelName: "Starting with C and G",
                    instruments: ["piano"],
                    octaves: [3],
                    notes: ["C", "G"],
                    waveColorProbability: 1,
                    gameLen: 5,
                    wrongsAllowed: 1
                },
                {
                    levelNum: 2,
                    levelName: "E (z)",
                    instruments: ["piano"],
                    octaves: [3],
                    notes: ["C", "E", "G"],
                    waveColorProbability: 1,
                    gameLen: 10,
                    wrongsAllowed: 5
                },
                {
                    levelNum: 3,
                    levelName: "Meet D and A",
                    instruments: ["piano"],
                    octaves: [3],
                    notes: ["C", "E", "D", "A", "G"],
                    waveColorProbability: 1,
                    gameLen: 5,
                    wrongsAllowed: 5
                },
                {
                    levelNum: 4,
                    levelName: "The White Notes",
                    instruments: ["piano"],
                    octaves: [3],
                    notes: ["C", "E", "D", "F", "G", "A", "B"],
                    waveColorProbability: 1,
                    gameLen: 5,
                    wrongsAllowed: 5
                }
        ],
    },
    {
        title: 'Stage 2',
        subtitle: 'New Sound',
        illustration: require("@assets/icons/pattern.png"),
        waveCount: 2,
        levels:[
                {
                    levelNum: 5,
                    levelName: "Introducing the Synth",
                    instruments: ["synth"],
                    octaves: [3],
                    notes: ["C", "E", "D", "F", "G", "A", "B"],
                    waveColorProbability: 1,
                    gameLen: 5
                },
                {
                    levelNum: 6,
                    levelName: "Whites Keys on the Synth",
                    instruments: ["synth"],
                    octaves: [3],
                    notes: ["C", "E", "D", "F", "G", "A", "B"],
                    waveColorProbability: 1,
                    gameLen: 5
                },
                {
                    levelNum: 7,
                    levelName: "Lower Voices",
                    instruments: ["synth"],
                    octaves: [2],
                    notes: ["C", "E", "D", "F", "G", "A", "B"],
                    waveColorProbability: 1,
                    gameLen: 5
                },
        ],
    },
    {
        title: 'Stage 3',
        subtitle: 'Expansion',
        illustration: require("@assets/icons/pattern.png"),
        waveCount: 3,
        levels:[
                {
                    levelNum: 8,
                    levelName: "Mixture",
                    instruments: ["synth", "piano"],
                    octaves: [2, 3],
                    notes: ["C", "E", "D", "F", "G", "A", "B"],
                    waveColorProbability: 0.8,
                    gameLen: 5
                },
                {
                    levelNum: 9,
                    levelName: "Next octave up",
                    instruments: ["synth", "piano"],
                    octaves: [3, 4],
                    notes: ["C", "E", "D", "F", "G", "A", "B"],
                    waveColorProbability: 0.8,
                    gameLen: 5
                },
                {
                    levelNum: 10,
                    levelName: "Low medium and high",
                    instruments: ["synth", "piano"],
                    octaves: [2, 3, 4],
                    notes: ["C", "E", "D", "F", "G", "A", "B"],
                    waveColorProbability: 0.8,
                    gameLen: 5
                },
                {
                    levelNum: 11,
                    levelName: "Even more octaves",
                    instruments: ["synth", "piano"],
                    octaves: [2, 3, 4],
                    notes: ["C", "E", "D", "F", "G", "A", "B"],
                    waveColorProbability: 0.8,
                    gameLen: 5
                },
        ],
    },
    {
        title: 'Stage 4',
        subtitle: 'The Black Keys',
        illustration: require("@assets/icons/pattern.png"),
        waveCount: 4,
        levels:[
                {
                    levelNum: 12,
                    levelName: "C#",
                    instruments: ["piano"],
                    octaves: [2, 3],
                    notes: ["C", "E", "F","A", "Cs"],
                    waveColorProbability: 0.8,
                    gameLen: 5
                },
                {
                    levelNum: 13,
                    levelName: "Ease in",
                    instruments: ["piano"],
                    octaves: [2, 3],
                    notes: ["C", "D", "G", "A", "B", "Cs"],
                    waveColorProbability: 0.8,
                    gameLen: 5
                },
                {
                    levelNum: 14,
                    levelName: "White keys + 1",
                    instruments: ["piano"],
                    octaves: [2, 3],
                    notes: ["C", "E", "D", "F", "G", "A", "B", "Cs"],
                    waveColorProbability: 0.8,
                    gameLen: 5
                },
                {
                    levelNum: 15,
                    levelName: "The next octave",
                    instruments: ["piano"],
                    octaves: [3, 4],
                    notes: ["C", "E", "D", "F", "G", "A", "B", "Cs"],
                    waveColorProbability: 0.8,
                    gameLen: 5
                },
        ],
    },
];
