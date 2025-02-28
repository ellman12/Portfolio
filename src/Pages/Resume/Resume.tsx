import TopSection from "./components/Sections/TopSection.tsx";
import SkillsSection from "./components/Sections/SkillsSection.tsx";
import WorkExperienceSection from "./components/Sections/WorkExperience/WorkExperienceSection.tsx";
import ProjectsSection from "./components/Sections/ProjectsSection/ProjectsSection.tsx";
import "./Resume.css";

export default function Resume() {
    return (<div className="bg-[#212529] py-4 px-8 mx-auto" style={{width: "8.5in", height: "11in"}}>
        <title>Elliott DuCharme Resume</title>

        <TopSection/>
        <SkillsSection/>
        <WorkExperienceSection/>
        <ProjectsSection/>
    </div>);
}