import MusicIcons from "@assets/music";

export const MenuEntries = [
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
                    notes: ["c", "g"]
                },
                {
                    level: 2,
                    text: "E (z)",
                    icon: MusicIcons.bass,
                    instruments: ["piano"],
                    octaves: [3],
                    notes: ["c", "e", "g"]
                },
                {
                    level: 3,
                    text: "Meet D and A",
                    icon: MusicIcons.equaliser,
                    instruments: ["piano"],
                    octaves: [3],
                    notes: ["c", "e", "d", "a", "g"]
                },
                {
                    level: 4,
                    text: "The White Notes",
                    icon: MusicIcons.violin,
                    instruments: ["piano"],
                    octaves: [3],
                    notes: ["c", "e", "d", "f", "g", "a", "b"]
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
                    instruments: ["saw"],
                    octaves: [3],
                    notes: ["c", "e", "g", "a", "b"]
                },
                {
                    level: 2,
                    text: "Whites Keys on the Synth",
                    icon: MusicIcons.ipod,
                    instruments: ["saw"],
                    octaves: [3],
                    notes: ["a", "b", "c", "d", "e", "f", "g"]
                },
                {
                    level: 3,
                    text: "Lower Voices",
                    icon: MusicIcons.tuba,
                    instruments: ["saw"],
                    octaves: [2],
                    notes: ["a", "b", "c", "d", "e", "f", "g"]
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
                    text: "Introducing the Synth",
                    icon: MusicIcons.quaver,
                    instruments: ["saw"],
                    octaves: [3],
                    notes: ["c", "e", "g", "a", "b"]
                },
                {
                    level: 2,
                    text: "Whites Keys on the Synth",
                    icon: MusicIcons.ipod,
                    instruments: ["saw"],
                    octaves: [3],
                    notes: ["a", "b", "c", "d", "e", "f", "g"]
                },
        ],
    },
];
