namespace Portfolio;

///Stores information about a project.
public record Project
{
	public string name = null!, repoLink = null!, briefDesc = null!, longDesc = null!;

	public int maxHeight = 357;
	
	////Paths relative to wwwroot/Images/ for images for this project. 
	public (string, string)[]? images;

	public DateOnly startDate;

	///If null, still working on project.
	public DateOnly? endDate;

	public static List<Project> GetProjects()
	{
		return new List<Project>
		{
			new()
			{
				name = "Photos Storage Server (PSS)",
				repoLink = "https://github.com/ellman12/Photos-Storage-Server",
				briefDesc = "A locally hosted photo and video manager written in C# and Blazor Server, designed as a replacement for Google Photos.",
				longDesc = @"Photos Storage Server is a free and open source replacement for Google Photos, intended to be hosted on the local network, and used by a single person. Under the hood it uses a PostgreSQL database, which stores things like: what items are in your library, the paths to those items, what albums/folders you have and their contents, when items were taken, etc. PSS has been out for a while now, and I'm still updating and improving it to this day. Since starting PSS, I have learned HTML, CSS, JavaScript, Blazor, and PostgreSQL. I have also gotten a ton of experience with C#, and I think this project is what caused me to fall in love with C#. I am very proud with how far this project has come; at over 1,200 commits, it's my largest personal project ever.

				PSS has a lot of really nice features that aren't found in Google Photos:
				• Folders, which act like Google Photos' Archive feature, but you can have as many as you want.
				• Import page, which allows you to control the filename, date taken, and other data about items before they're added to your library. You can even add items to albums/folders from this page. In Google Photos you don't get this kind of control. It also warns you if you're trying to add items to your library that are already in your library.
				• Easily create and export backups of your library, allowing you to easily return your library to that point in time.
				• Items don't require a Date Taken value like in Google Photos. Useful for if you don't know when an item was taken.

				The idea of PSS came into existence around October of 2020, when Google announced they were ending their free and unlimited tier of Photos in July of 2021. This was problematic as I had been relying on Photos since its initial release. Over those next few months and over the summer, I began the initial development of PSS. I started learning HTML, CSS, JavaScript, Blazor, and PostgreSQL. The initial development of PSS is split up into three phases, which I've used repeatedly in future web projects:

				Phase 1 was learning SQL and determining the structure of the database. In the early days, the database was in MySQL, but I upgraded to PostgreSQL a lot later. Having the database figured out before writing any backend code worked so well that this is now the first step I always take when making a new web app that has a database.
				Phase 2 was writing the backend methods in C# which would interface with the database. This made it very easy on the frontend as I could get/set data in the database and it was all abstracted away.
				Phase 3 was developing the frontend. I strongly dislike light themes, so I went with a black and white style, which I loved so much I've used it in every other web project I've done. I think it works perfectly as it's easy on the eyes and keeps the UI clean and simple, helping the user focus on the important content on the page.

				PSS was my first web app project ever, and I'm very proud of how far it's come over the years.",
				
				maxHeight = 285,
				images = new[]
				{
					("PSS/PSS 1.png", "Import Page of PSS"),
					("PSS/PSS 2.png", "Main View of PSS"),
					("PSS/PSS 3.png", "Viewing a Video"),
					("PSS/PSS 4.png", "Viewing a Photo"),
					("PSS/PSS 5.png", "Viewing your Albums/Folders (Collections)"),
					("PSS/PSS 6.png", "Viewing the Contents of an Album"),
					("PSS/PSS 7.png", "Viewing a Single Photo in an Album"),
					("PSS/PSS 8.png", "Viewing Items Without a Date Taken (DT)"),
					("PSS/PSS 9.png", "Viewing Items Marked As Starred"),
					("PSS/PSS 10.png", "Memories Page, Which Allows Viewing Items Taken on a Date and Shows What Year They Were Taken"),
					("PSS/PSS 11.png", "Trash Page"),
					("PSS/PSS 12.png", "Settings Page")
				},
				startDate = new DateOnly(2020, 10, 16),
				endDate = null
			},
			new()
			{
				name = "Graphical Photo Organizer (GPO)",
				repoLink = "https://github.com/ellman12/Graphical-Photo-Organizer",
				briefDesc = "A C# WPF utility for organizing folders of photos and videos based on when they were taken.",
				longDesc = @"GPO is a WPF utility for organizing folders of photos and videos based on the dates each item was taken. I created GPO as a tool to help family, friends, and other people organize their messy folders of photos and videos. GPO from the get-go was designed to be very simple and easy to use, with plenty of customization and power user features like AutoSort, updating of photo/video metadata, etc. GPO has an entire separate window for controlling its behavior. It can sort items either manually or automatically. The former gives you more control, while the latter can quickly chew through folders with thousands of items in just a few minutes. In manual mode, you can do actions like rename files, change their date taken, delete them, etc. You can even watch video files inside of GPO. I am very proud of this project and very pleased with how it turned out, and I hope it can help people to keep their memories organized now and in the future.",
				images = new[] {("GPO/GPO1.png", "Main Graphical Photo Organizer Window"), ("GPO/GPO2.png", "Graphical Photo Organizer Settings Window")},
				startDate = new DateOnly(2022, 2, 21),
				endDate = new DateOnly(2022, 6, 14)
			},
			new()
			{
				name = "Dish Up", 
				repoLink = "https://bitbucket.org/dpdsu/csc-470-project-repo/src/master/",
				briefDesc = "Blazor Server app for creating, storing, viewing, and sharing recipes with other users.",
				longDesc = @"Dish Up is what myself and three other people produced for our Software Engineering class's final project. It is a recipe manager written in Blazor Server and powered by a PostgreSQL database. One big emphasis this project had was being able to easily share recipes with other users. Some other features it has are Markdown support in recipe descriptions and the ability to add a URL to an image for each recipe. I pitched the original idea and took the role of the product manager and team leader.

				I had four observations/thoughts over the years that led me to develop the idea for the project:
				1) Recipe books can be and usually are enormous,
				2) Organizing them and keeping them that way is very difficult and time-consuming,
				3) Trying to actually <i>find</i> what you want in a recipe book can become a needle in a haystack,
				4) If you want to share a recipe with someone, you either have to print it out and hand-deliver it to them, (e-)mail it, etc.

				So I thought to myself, 'having a digital recipe manager with an emphasis on easily sharing items would be a perfect project.' That feature itself was probably inspired by Google Photos' sharing abilities.",
				images = new []
				{
					("Dish Up/Dish Up 1.png", "User Account Creation"),
					("Dish Up/Dish Up 2.png", "Viewing a Recipe"),
					("Dish Up/Dish Up 3.png", "Editing a Recipe, and Showing Off Markdown Support"),
					("Dish Up/Dish Up 4.png", "Viewing Your Folders and Adding a Recipe to a Folder")
				},
				startDate = new DateOnly(2022, 10, 8),
				endDate = new DateOnly(2022, 12, 16)
			},
			new()
			{
				name = "AutoHotkey Scripts",
				repoLink = "https://github.com/ellman12/AutoHotkey-V2",
				briefDesc = "Extensive repository of AutoHotkey scripts automating many repetitive daily computer tasks.",
				longDesc = @"In high school, I discovered the amazing tool that is AutoHotkey. Since then, I have created an insane amount of scripts for automating many aspects of Windows as well as programs like Firefox, JetBrains Rider, MS Word, etc. The structure of it is one main script that links together many other scripts, along with some other misc. scripts I use once in a blue moon. It has evolved a ton over the years. In its current form, it consists of my keyboard and mouse—with 18 and 14 extra buttons, respectively—and the newest addition, my Stream Deck XL. The Stream Deck is super nice as it not only has 32 buttons and those actions are different depending on the active program, but the buttons have screens so you know what each one does without having to memorize them. It's so nice in fact, that as soon as I got it, it immediately replaced the 18 buttons on my keyboard. Two other major things I've done is on my keyboard, I reprogrammed most of my F1–F12 keys and my NumPad keys to serve more useful purposes. The former switches between different types of windows, switches between tabs, etc. The NumPad controls music, YouTube videos, and even does a lot of common shortcuts in Rider like selecting text, moving between words, deleting lines, etc. One other thing I made is a GUI that lets me edit the Clipboard contents whenever I want.

				These scripts—especially the extra mouse buttons—have become so ingrained in my daily workflow and muscle memory that I can't live without them. They have helped me to become so much more efficient even when doing basic things like web browsing. My scripts are constantly evolving and changing as I think of new ideas for things to automate. I think this project is the reason my muscle memory is extremely good and my brain is always trying to optimize literally everything.",
				startDate = new DateOnly(2019, 10, 8),
				endDate = null
			},
			new()
			{
				name = "The Blighted Wilds",
				repoLink = "https://github.com/ellman12/Game-Jam-2023",
				briefDesc = "A game I and nine other people made for Global Game Jam 2023.",
				longDesc = @"Play the game <a style='color: cornflowerblue' target='_blank' href='https://i.simmer.io/@GameJam/the-blighted-wilds'>here</a>!
							The theme for 2023 was 'Roots.' Our game is a 2D side-scrolling platformer where the player dives down into the roots of a giant tree and must purify the three shrines inside its roots while defeating the enemies inside during the process. On my team, we had 3 programmers, 2 level designers, 2 sound designers and composers, and 3 artists. Overall, Game Jam was a very enjoyable and rewarding experience that I plan to do again in the future.",
				startDate = new DateOnly(2023, 2, 3),
				endDate = new DateOnly(2023, 2, 5)
			},
			new()
			{
				name = "DateTakenExtractor (DTE)",
				repoLink = "https://github.com/ellman12/DateTakenExtractor",
				briefDesc = "Small, fast, simple NuGet library for reading and writing Date Taken metadata for photos and videos.",
				longDesc = @"DateTakenExtractor is a small, fast, simple NuGet library for reading and writing Date Taken metadata for photos and videos, with the library consisting of only a single static C# class. DTE came into existence because two projects of mine—Photos Storage Server and Graphical Photo Organizer—both used the same classes/packages for finding and updating the Date Taken metadata, and trying to keep those two files the same was annoying and difficult. I also wanted to redo the class used in those two projects to be smaller, simpler, and better. DTE is my first NuGet package, and currently has over 1,800 downloads which I'm very proud about.",
				images = new []{("DTE/DTE1.png", "Example of using Date Taken Extractor")},
				startDate = new DateOnly(2022, 5, 4),
				endDate = new DateOnly(2023, 1, 5)
			},
			new()
			{
				name = "Graphical Backup Program (GBP)",
				repoLink = "https://github.com/ellman12/Graphical-Backup-Program",
				briefDesc = "A C# WinForms utility for backing up groups of files and folders on a Windows PC.",
				longDesc = @"Graphical Backup Program is a WinForms utility for backing up groups of folders and files, designed primarily to make it easy to backup items to an online service like Google Drive or OneDrive, and to make it easy to create groups of related items and give control of which of those groups are backed up. It can also compress backups to a .zip file, and open a web URL upon completion of a backup. GBP was my first experience creating a GUI project, and I'm very happy with how it turned out as I think the interface is simple enough for anyone to use and understand, while also giving the user a lot of customization and power.",
				images = new []{("GBP/GBP_GUI.png", "Main Graphical Backup Program Window")},
				startDate = new DateOnly(2021, 7, 24),
				endDate = new DateOnly(2022, 2, 21)
				
			},
			new()
			{
				name = "Password Generator and Guesser (PGG)",
				repoLink = "https://github.com/ellman12/Password-Generator-and-Guesser",
				briefDesc = "A highly-customizable, superfluous, and over-engineered C++ console application for generating and guessing strings of characters.",
				longDesc = @"Password Generator and Guesser is a simple C++ console application that either generates a ""password"" (string of characters) based on various customizable rules, or is supplied one by the user. It then takes that string and uses one of several approaches to try and guess it as quickly as possible.

				There are a lot of different arguments you can pass to it to control how it operates. The idea for this project came to me one day during my Software Security class. We were talking about passwords and the professor mentioned something along the lines of guessing and checking a password over and over, and a light bulb went off in my head and I knew I had to try making that. Around that time I also wanted to get experience adding command line arguments (flags) to a project, so I figured I would combine both into one.

				Overall, the project is more for testing and experimentation versus being useful.",
				images = new []
				{
					("PGG/PGG 1.png", "PGG Help Output"),
					("PGG/PGG 2.png", "Guessing a Password"),
					("PGG/PGG 3.png", "Guessing a Password with Series Mode"),
					("PGG/PGG 4.png", "Guessing a Password with Increment Mode")
				},
				maxHeight = 400,
				startDate = new DateOnly(2021, 3, 24),
				endDate = new DateOnly(2021, 10, 21)
			},
			new()
			{
				name = "TI-Basic Scripts",
				repoLink = "https://github.com/ellman12/TI-84-Plus-CE",
				briefDesc = "Various scripts to automate my Scripts to automate my TI-84 Plus CE graphing calculator",
				longDesc = "One of my oldest repos on GitHub, dedicated to storing all the little scripts I've written in <a href='https://www.wikiwand.com/en/TI-BASIC'>TI-Basic</a> for my graphing calculator. Most of the files there are no longer used, but are kept around for historical reasons, and in case someone else might find them useful.",
				startDate = new DateOnly(2020, 4, 16),
				endDate = new DateOnly(2021, 4, 29)
			}
		};
	}
}