export type Project = {
    name: string;
    repoLink?: string;
    briefDesc: string;
    longDesc: string;
    images: [string, string][];
    significance: number;
    startDate: Date;
    endDate?: Date;
}

const Projects: Project[] = [
    {
        name: "MemoryMosaic",
        repoLink: "https://github.com/ellman12/MemoryMosaic",
        briefDesc: "MemoryMosaic is a free and open source photo/video manager, powered by Blazor and PostgreSQL.",
        longDesc: `I started working on MM when Google Photos announced in October 2020 their free tier was ending in July 2021. I had been using it for years, so I needed an alternative, and a friend suggested to make my own replacement. I quickly started learning Blazor and PostgreSQL, and a few months later the first version was ready. This is one of my largest projects at over 2500 commits, and it's had two major updates to add features and ensure functionality decades into the future.`,
        significance: 95,
        images: [
            ["MM/Home.png", "Home Page"],
            ["MM/Import.png", "Import Page"],
            ["MM/VideoPlayer.png", "Viewing a Video"],
            ["MM/Memories.png", "Memories Page"],
            ["MM/Backups.png", "Backups Page"],
            ["MM/Collections.png", "Collections Page"],
            ["MM/Stormy Album.png", "Viewing an Album"],
            ["MM/Search.png", "Search Page"],
            ["MM/Settings.png", "Settings Page"]
        ],
        startDate: new Date("2020-10-16"),
        endDate: new Date("2024-2-2")
    },
    {
        name: "WingTech Bot Rewrite",
        repoLink: "https://github.com/ellman12/WingTechBot-MK3",
        briefDesc: "A TypeScript Discord bot for a friend's private Discord server, providing features like a reaction tracking and karma system, games, inside jokes, and an LLM-powered AI chatbot using Google Gemini.",
        longDesc: `There were some limitations with the original bot, primarily with its karma system. After some discussions about the minimum viable product, I spent a few weeks on the rewrite. In addition to gaining AWS experience, I wanted more experience with automated testing. Mk 2 has extensive unit/integration tests which are very satisfying and ensure reliability.`,
        images: [
            ["WTB/WTB 1.png", "Karma Leaderboard"],
            ["WTB/WTB 2.png", "Game of Hangman"],
            ["WTB/WTB 3.png", "Reaction Tracking"],
        ],
        significance: 100,
        startDate: new Date("2025-7-10"),
        endDate: new Date("2026-1-26")
    },
    {
        name: "Graphical Photo Organizer ",
        repoLink: "https://github.com/ellman12/Graphical-Photo-Organizer",
        briefDesc: "A C# WPF utility for organizing folders of photos and videos based on when items were taken.",
        longDesc: "I created GPO to help family, friends, and others organize their folders of photos and videos. Thus, it was designed to be very simple and easy to use, but with plenty of customization and power user features. Overall, I think it achieved this and is a very slick utility.",
        images: [
            ["GPO/GPO1.png", "Main Graphical Photo Organizer Window"],
            // ["GPO/GPO2.png", "Graphical Photo Organizer Settings Window"] //Disabled because of weird scaling issues with Carousel
        ],
        significance: 90,
        startDate: new Date("2022-2-21"),
        endDate: new Date("2022-6-14")
    },
    {
        name: "Dish Up",
        repoLink: "https://bitbucket.org/dpdsu/csc-470-project-repo/src/master/",
        briefDesc: "Blazor Server app for creating and sharing recipes with other users.",
        longDesc: "Me and three others made Dish Up for our Software Engineering class's final product. I pitched the original idea and took the role of the product manager and team leader. I successfully lead the project, allowing us to get an A on it. We really focused on easy creation of recipes and sharing with other users, as well as Markdown and image support.",
        images: [
            ["Dish Up/Dish Up 2.png", "Viewing a Recipe"],
            ["Dish Up/Dish Up 3.png", "Editing a Recipe, and Showing Off Markdown Support"],
            ["Dish Up/Dish Up 4.png", "Viewing Your Folders and Adding a Recipe to a Folder"]
        ],
        significance: 80,
        startDate: new Date("2022-10-8"),
        endDate: new Date("2022-12-16")
    },
    {
        name: "AutoHotkey Scripts",
        repoLink: "https://github.com/ellman12/AutoHotkey-V2",
        briefDesc: "Extensive repository of AutoHotkey scripts automating many repetitive daily computer tasks.",
        longDesc: "I discovered AHK in high school, and nothing has been the same since then. It started as a few simple scripts but grew very quickly, and has evolved significantly since then. These scripts have become so ingrained in my daily workflow and muscle memory that I can't live without them. They have significantly improved my code quality and output.",
        images: [],
        significance: 70,
        startDate: new Date("2019-10-8"),
        endDate: undefined
    },
    {
        name: "Arcane Defense",
        repoLink: "https://github.com/ellman12/Arcane-Defense",
        briefDesc: "Final project for my game design class. Defend your house from an endless horde of enemies using your arsenal of magical attacks. Play the game <a style='color: cornflowerblue' target='_blank' href='https://ellman12.itch.io/arcane-defense'>here</a>!",
        longDesc: `This is easily one of my favorite projects I've done. Not only was it fun to come up with the ideas and implement them, but seeing people enjoy them was so rewarding.`,
        images: [],
        significance: 60,
        startDate: new Date("2023-3-22"),
        endDate: new Date("2023-5-2")
    },
    {
        name: "DateTakenExtractor",
        repoLink: "https://github.com/ellman12/DateTakenExtractor",
        briefDesc: "Small, fast, simple NuGet library for reading and writing Date Taken metadata for photos and videos.",
        longDesc: "DTE is part of what powers MemoryMosaic and Graphical Photo Organizer, and was created to reduce duplication between those projects. DTE is my first NuGet package, and currently has over 6,000 downloads which I am proud about.",
        images: [["DTE/DTE1.png", "Example of using Date Taken Extractor"]],
        significance: 40,
        startDate: new Date("2022-5-4"),
        endDate: new Date("2023-1-5")
    },
    {
        name: "Graphical Backup Program",
        repoLink: "https://github.com/ellman12/Graphical-Backup-Program",
        briefDesc: "A C# WinForms utility for backing up groups of files and folders.",
        longDesc: "I made GBP to facilitate backing up common data. One of its best features allows creating groups of related items and controlling which of those groups are backed up. GBP was my first experience creating a desktop GUI, and I'm very happy with how it turned out.",
        images: [["GBP/GBP_GUI.png", "Main Graphical Backup Program Window"]],
        significance: 30,
        startDate: new Date("2021-7-24"),
        endDate: new Date("2022-2-21")

    },
    {
        name: "Password Generator and Guesser",
        repoLink: "https://github.com/ellman12/Password-Generator-and-Guesser",
        briefDesc: "A highly-customizable, superfluous, and over-engineered C++ console application for generating and guessing strings of characters.",
        longDesc: "I got the idea for this during my Software Security class when the professor mentioned guessing and checking a password over and over. Around that time I also wanted to get experience with command line arguments. Overall, this project is more for learning how to use C++ and how to make and accept arguments to a program.",
        images: [
            ["PGG/PGG 1.png", "PGG Help Output"],
            ["PGG/PGG 2.png", "Guessing a Password"],
            ["PGG/PGG 3.png", "Guessing a Password with Series Mode"],
            ["PGG/PGG 4.png", "Guessing a Password with Increment Mode"]
        ],
        significance: 20,
        startDate: new Date("2021-3-24"),
        endDate: new Date("2021-10-21")
    },
    {
        name: "TI-BASIC Scripts",
        repoLink: "https://github.com/ellman12/TI-84-Plus-CE",
        briefDesc: "Various scripts to automate my TI-84 Plus CE graphing calculator.",
        longDesc: "One of my oldest repos on GitHub, dedicated to storing all the little scripts I've written in <a style='color: cornflowerblue' href='https://en.wikipedia.org/wiki/TI-BASIC'>TI-BASIC</a>. I made these to assist in my math classes, and they quickly became invaluable. I haven't used any of them in years, but I'm hoping someone else benefits from them.",
        images: [],
        significance: 10,
        startDate: new Date("2020-4-16"),
        endDate: new Date("2021-4-29")
    }
];

export default Projects;
