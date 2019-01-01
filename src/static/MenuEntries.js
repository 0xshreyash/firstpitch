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
                    level: 1,
                    text: "Starting with C and G",
                    icon: MusicIcons.treble,
                    instruments: ["piano"],
                    octaves: [3],
                    notes: ["C", "G"],
                    waveColorProbability: 1,
                    gameLen: 5
                },
                {
                    level: 2,
                    text: "E (z)",
                    icon: MusicIcons.bass,
                    instruments: ["piano"],
                    octaves: [3],
                    notes: ["C", "E", "G"],
                    waveColorProbability: 1,
                    gameLen: 5
                },
                {
                    level: 3,
                    text: "Meet D and A",
                    icon: MusicIcons.equaliser,
                    instruments: ["piano"],
                    octaves: [3],
                    notes: ["C", "E", "D", "A", "G"],
                    waveColorProbability: 1,
                    gameLen: 5
                },
                {
                    level: 4,
                    text: "The White Notes",
                    icon: MusicIcons.violin,
                    instruments: ["piano"],
                    octaves: [3],
                    notes: ["C", "E", "D", "F", "G", "A", "B"],
                    waveColorProbability: 1,
                    gameLen: 5
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
                    level: 1,
                    text: "Introducing the Synth",
                    icon: MusicIcons.quaver,
                    instruments: ["synth"],
                    octaves: [3],
                    notes: ["C", "E", "D", "F", "G", "A", "B"],
                    waveColorProbability: 1,
                    gameLen: 5
                },
                {
                    level: 2,
                    text: "Whites Keys on the Synth",
                    icon: MusicIcons.ipod,
                    instruments: ["synth"],
                    octaves: [3],
                    notes: ["C", "E", "D", "F", "G", "A", "B"],
                    waveColorProbability: 1,
                    gameLen: 5
                },
                {
                    level: 3,
                    text: "Lower Voices",
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
                    level: 1,
                    text: "Mixture",
                    icon: MusicIcons.quaver,
                    instruments: ["synth", "piano"],
                    octaves: [2, 3],
                    notes: ["C", "E", "D", "F", "G", "A", "B"],
                    waveColorProbability: 0.8,
                    gameLen: 5
                },
                {
                    level: 2,
                    text: "Whites Keys on the Synth",
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
