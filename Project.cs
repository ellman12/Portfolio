namespace Portfolio;

///Stores information about a project.
public record Project
{
	public string name, briefDesc, longDesc;
	
	////Paths relative to wwwroot/Images/ for images for this project. 
	public List<string>? imagePaths;

	public DateTime startDate;

	///If null, still working on project.
	public DateTime? endDate;
}