namespace Portfolio;

///Stores information about a project.
public record Project
{
	public string name = null!, briefDesc = null!, longDesc = null!;
	
	////Paths relative to wwwroot/Images/ for images for this project. 
	public List<string>? imagePaths;

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
				longDesc = @"this is a line




						this is another line",
				imagePaths = new List<string>
				{
					"PSS/Screenshot 2023-02-09 115029.png",
					"PSS/Screenshot 2023-02-09 115057.png"
				},
				startDate = new DateOnly(2020, 10, 16),
				endDate = null
			},
			new()
			{
				name = "Graphical Photo Organizer (GPO)",
				briefDesc = "A C# WPF app for organizing folders of photos and videos based on the date they were taken.",
				longDesc = @"BBBBBBBBBBBBBBBBBBBBBB",
				imagePaths = new List<string>
				{
					"GPO/Screenshot 2023-02-09 115057.png"
				}
			},
			new()
			{
				name = "AutoHotkey Scripts",
				briefDesc = "Extensive repository of AutoHotkey scripts automating many repetitive daily computer tasks.",
				longDesc = @"",
				imagePaths = new List<string>
				{
				
				}
			}
		};
	}
}