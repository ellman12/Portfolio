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
				endDate = null
			},
			new()
			{
				name = "Graphical Photo Organizer (GPO)",
				briefDesc = "A C# WPF app for organizing folders of photos and videos based on the date they were taken.",
				longDesc = @"BBBBBBBBBBBBBBBBBBBBBB",
				imagePaths = new[] {"GPO/Screenshot 2023-02-09 115057.png"}
			},
			new()
			{
				name = "AutoHotkey Scripts",
				briefDesc = "Extensive repository of AutoHotkey scripts automating many repetitive daily computer tasks.",
				longDesc = @"In high school, I discovered the amazing tool that is AutoHotkey. Since then, I have created an insane amount of scripts for automating many aspects of Windows as well as programs like Firefox, JetBrains Rider, MS Word, etc. The structure of it is one main script that links together many other scripts, along with some other misc. scripts I use once in a blue moon. It has evolved a ton over the years. In its current form, it consists of my keyboard and mouse—with 18 and 14 extra buttons, respectively—and the newest addition, my Stream Deck XL. The Stream Deck is super nice as it not only has 32 buttons and those actions are different depending on the active program, but the buttons have screens so you know what each one does without having to memorize them. It's so nice in fact, that as soon as I got it, it immediately replaced the 18 buttons on my keyboard. Two other major things I've done is on my keyboard, I reprogrammed most of my F1–F12 keys and my NumPad keys to serve more useful purposes. The former switches between different types of windows, switches between tabs, etc. The NumPad controls music, YouTube videos, and even does a lot of common shortcuts in Rider like selecting text, moving between words, deleting lines, etc. These scripts—especially the extra mouse buttons—have become so ingrained in my daily workflow and muscle memory that I can't live without them. They have helped me to become so much more efficient even when doing basic things like web browsing. My scripts are constantly evolving and changing as I think of new ideas for things to automate.",
				imagePaths = new[] { "TODO: get picture(s)" },
				startDate = new DateOnly(2019, 10, 8),
				endDate = null
			}
		};
	}
}