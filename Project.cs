namespace Portfolio;

///Stores information about a project.
public record Project
{
	public string name = null!, briefDesc = null!, longDesc = null!;
	
	////Paths relative to wwwroot/Images/ for images for this project. 
	public string[]? imagePaths;

	public DateOnly startDate;

	///If null, still working on project.
	public DateOnly? endDate;

	///Higher the number, the more significant it is.
	public int significance;

	public static List<Project> GetProjects()
	{
		return new List<Project>
		{
			new()
			{
				name = "Photos Storage Server (PSS)",
				briefDesc = "A locally hosted photo and video manager written in C# and Blazor Server, designed as a replacement for Google Photos.",
				longDesc = @"Photos Storage Server is a free and open source replacement for Google Photos, intended to be hosted on the local network, and used by a single person. Under the hood it uses a PostgreSQL database. This database stores things like: what items are in your library, the paths to those items, what albums/folders you have and their contents, when items were taken, etc. PSS has been out for a while now, and I'm still updating and improving it to this day. Since starting PSS, I have learned HTML, CSS, JavaScript, Blazor, and PostgreSQL. I have also gotten a ton of experience with C#, and I think this project is what caused me to love C#. I am very proud with how far this project has come;  at over 1,200 commits, it's my largest personal project ever.

				PSS has a lot of really nice features that aren't found in Google Photos:
				• Folders, which act like Google Photos' Archive feature, but you can have as many as you want.
				• Import page, which allows you to control the filename, date taken, and other data about items before they're added to your library. You can even add items to albums/folders from this page. In Google Photos you don't get this kind of control. It also warns you if you're trying to add items to your library that are already in your library.
				• Easily create and export backups of your library, allowing you to easily return your library to that point in time.
				• Items don't require a Date Taken value like in Google Photos. Useful for if you don't know when an item was taken.

				The idea of PSS came into existence around October of 2020, when Google announced they were ending their free and unlimited tier of Photos in July of 2021. This was problematic as I had been relying on Photos since its initial release. Over those next few months and over the summer, I began the initial development of PSS. I started learning HTML, CSS, JavaScript, Blazor, and PostgreSQL. The initial development of PSS is split up into three phases, which I've used repeatedly in future web projects:

				Phase 1 was learning SQL and determining the structure of the database. In the early days, the database was in MySQL, but I upgraded to PostgreSQL a lot later. Having the database figured out before writing any backend code worked so well that this is now the first step I always take when making a new web app that has a database.
				Phase 2 was writing the backend methods in C# which would interface with the database. This made it very easy on the frontend as I could get/set data in the database and it was all abstracted away.
				Phase 3 was developing the frontend. I strongly dislike light themes, so I went with a black and white style, which I loved so much I've used it in every other web project I've done. I think it works perfectly as it's easy on the eyes and keeps the UI clean and simple, helping the user focus on the important content on the page.",
				
				imagePaths = new[] {"PSS/Screenshot 2023-02-09 115029.png", "PSS/Screenshot 2023-02-09 115057.png"},
				startDate = new DateOnly(2020, 10, 16),
				endDate = null,
				significance = 100
			},
			new()
			{
				name = "Graphical Photo Organizer (GPO)",
				briefDesc = "A C# WPF utility for organizing folders of photos and videos based on when they were taken.",
				longDesc = @"GPO is a WPF utility for organizing folders of photos and videos based on the dates each item was taken. I created GPO as a tool to help family, friends, and other people organize their messy folders of photos and videos. GPO from the get-go was designed to be very simple and easy to use, with plenty of customization and power user features like AutoSort, updating of photo/video metadata, etc. GPO has an entire separate window for controlling its behavior. It can sort items either manually or automatically. The former gives you more control, while the latter can quickly chew through folders with thousands of items in just a few minutes. In manual mode, you can do actions like rename files, change their date taken, delete them, etc. You can even watch video files inside of GPO. I am very proud of this project and very pleased with how it turned out, and I hope it can help people to keep their memories organized now and in the future.",
				imagePaths = new[] {"GPO/GPO1.png", "GPO/GPO2.png"},
				startDate = new DateOnly(2021, 2, 21),
				endDate = new DateOnly(2022, 6, 14),
				significance = 80
			},
			new()
			{
				name = "AutoHotkey Scripts",
				briefDesc = "Extensive repository of AutoHotkey scripts automating many repetitive daily computer tasks.",
				longDesc = @"In high school, I discovered the amazing tool that is AutoHotkey. Since then, I have created an insane amount of scripts for automating many aspects of Windows as well as programs like Firefox, JetBrains Rider, MS Word, etc. The structure of it is one main script that links together many other scripts, along with some other misc. scripts I use once in a blue moon. It has evolved a ton over the years. In its current form, it consists of my keyboard and mouse—with 18 and 14 extra buttons, respectively—and the newest addition, my Stream Deck XL. The Stream Deck is super nice as it not only has 32 buttons and those actions are different depending on the active program, but the buttons have screens so you know what each one does without having to memorize them. It's so nice in fact, that as soon as I got it, it immediately replaced the 18 buttons on my keyboard. Two other major things I've done is on my keyboard, I reprogrammed most of my F1–F12 keys and my NumPad keys to serve more useful purposes. The former switches between different types of windows, switches between tabs, etc. The NumPad controls music, YouTube videos, and even does a lot of common shortcuts in Rider like selecting text, moving between words, deleting lines, etc. One other thing I made is a GUI that lets me edit the Clipboard contents whenever I want.

				These scripts—especially the extra mouse buttons—have become so ingrained in my daily workflow and muscle memory that I can't live without them. They have helped me to become so much more efficient even when doing basic things like web browsing. My scripts are constantly evolving and changing as I think of new ideas for things to automate. I think this project is the reason my muscle memory is extremely good and my brain is always trying to optimize literally everything.",
				imagePaths = new[] { "" }, //TODO: get picture(s)
				startDate = new DateOnly(2019, 10, 8),
				endDate = null,
				significance = 85
			},
			new()
			{
				name = "Dish Up", //todo: https://bitbucket.org/dpdsu/csc-470-project-repo/src/master/
				briefDesc = "Blazor Server app for creating, storing, viewing, and sharing recipes with other users.",
				longDesc = @"Dish Up is what myself and three other people produced for our Software Engineering class's final project. It is a recipe manager written in Blazor Server and powered by a PostgreSQL database. One big emphasis this project had was being able to easily share recipes with other users. I pitched the original idea and took the role of the product manager and team leader.

				I had four observations/thoughts over the years that led me to develop the idea for the project:
				1) Recipe books can be and usually are enormous,
				2) Organizing them and keeping them that way is very difficult and time-consuming,
				3) Trying to actually <i>find</i> what you want in a recipe book can become a needle in a haystack,
				4) If you want to share a recipe with someone, you either have to print it out and hand-deliver it to them, (e-)mail it, etc.

				So I thought to myself, 'having a digital recipe manager with an emphasis on easily sharing items would be a perfect project.' That feature itself was probably inspired by Google Photos' sharing abilities.",
				imagePaths = new[] { "" }, //TODO: get picture(s)
				startDate = new DateOnly(2019, 10, 8),
				endDate = new DateOnly(2022, 12, 16),
				significance = 90
			},
			new()
			{
				name = "DateTakenExtractor",
				briefDesc = "Small, fast, simple library for reading and writing Date Taken metadata for photos and videos.",
				longDesc = @"DateTakenExtractor (DTE) is a small, fast, simple library for reading and writing Date Taken metadata for photos and videos, with the library consisting of only a single static C# class. DTE came into existence because two projects of mine—Photos Storage Server and Graphical Photo Organizer—both used the same classes/packages for finding and updating the Date Taken metadata, and trying to keep those two files the same was annoying and difficult. I also wanted to redo the class used in those two projects to be smaller, simpler, and better. DTE is my first NuGet package, and currently has over 1,700 downloads which I'm very proud about.",
				startDate = new DateOnly(2022, 5, 4),
				endDate = new DateOnly(2022, 1, 5),
				significance = 65
			},
			new()
			{
				name = "The Blighted Wilds",
				briefDesc = "A game I and nine other people made for Global Game Jam 2023.",
				longDesc = @"<iframe src='https://i.simmer.io/@GameJam/the-blighted-wilds' style='width: 960px; height: 600px; border: none; margin-top: 4px'></iframe>
							The theme for 2023 was 'Roots.' Our game involves the player diving down into the roots of a giant tree and purifying the three shrines inside its roots while defeating the enemies inside during the process. On my team, we had 3 programmers, 2 level designers, 2 sound designers and composers, and 3 artists. Overall, Game Jam was a very enjoyable and rewarding experience that I plan to do again in the future.",
				startDate = new DateOnly(2023, 2, 3),
				endDate = new DateOnly(2023, 2, 5),
				significance = 70
			},
			new()
			{
				name = "Password Generator and Guesser (PGG)",
				briefDesc = "A highly-customizable, superfluous, and over-engineered C++ console application for generating and guessing strings of characters.",
				longDesc = @"Password Generator and Guesser is a simple C++ console application that either generates a ""password"" (string of characters) based on various customizable rules, or is supplied one by the user. It then takes that string and uses one of several approaches to try and guess it as quickly as possible.

				There are a lot of different arguments you can pass to it to control how it operates. The idea for this project came to me one day during my Software Security class. We were talking about passwords and the professor mentioned something along the lines of guessing and checking a password over and over, and a light bulb went off in my head and I knew I had to try making that. Around that time I also wanted to get experience adding command line arguments (flags) to a project, so I figured I would combine both into one.

				Overall, the project is more for testing and experimentation versus being useful.",
				imagePaths = new []{""}, //TODO: add images here and to repo readme too
				startDate = new DateOnly(2021, 3, 24),
				endDate = new DateOnly(2021, 10, 21),
				significance = 5
			},
			new()
			{
				name = "TI-Basic Scripts",
				briefDesc = "Various scripts to automate my Scripts to automate my TI-84 Plus CE graphing calculator",
				longDesc = "One of my oldest repos on GitHub, dedicated to storing all the little scripts I've written in <a href='https://www.wikiwand.com/en/TI-BASIC'>TI-Basic</a> for my graphing calculator. Most of the files there are no longer used, but are kept around for historical reasons, and in case someone else might find them useful.",
				//imagePaths TODO? Pics of calculator, programs, etc.
				startDate = new DateOnly(2020, 4, 16),
				endDate = new DateOnly(2020, 4, 19),
				significance = 1
			}
		};
	}
}