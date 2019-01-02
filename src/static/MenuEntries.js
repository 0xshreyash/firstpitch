import MusicIcons from "@assets/music";

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
                    icon: MusicIcons.treble,
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
                    icon: MusicIcons.bass,
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
                    icon: MusicIcons.equaliser,
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
                    icon: MusicIcons.violin,
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
                    icon: MusicIcons.quaver,
                    instruments: ["synth"],
                    octaves: [3],
                    notes: ["C", "E", "D", "F", "G", "A", "B"],
                    waveColorProbability: 1,
                    gameLen: 5
                },
                {
                    levelNum: 6,
                    levelName: "Whites Keys on the Synth",
                    icon: MusicIcons.ipod,
                    instruments: ["synth"],
                    octaves: [3],
                    notes: ["C", "E", "D", "F", "G", "A", "B"],
                    waveColorProbability: 1,
                    gameLen: 5
                },
                {
                    levelNum: 7,
                    levelName: "Lower Voices",
                    icon: MusicIcons.tuba,
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
                    icon: MusicIcons.quaver,
                    instruments: ["synth", "piano"],
                    octaves: [2, 3],
                    notes: ["C", "E", "D", "F", "G", "A", "B"],
                    waveColorProbability: 0.8,
                    gameLen: 5
                },
                {
                    levelNum: 9,
                    levelName: "Whites Keys on the Synth",
                    icon: MusicIcons.ipod,
                    instruments: ["synth", "piano"],
                    octaves: [3, 4],
                    notes: ["C", "E", "D", "F", "G", "A", "B"],
                    waveColorProbability: 0.7,
                    gameLen: 5
                },
        ],
    },
];
