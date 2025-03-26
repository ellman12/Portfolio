import Section from "../Section.tsx";
import CodeIcon from "@mui/icons-material/Code";
import Projects from "./Projects.ts";
import SectionTimeline from "../../Timeline/SectionTimeline.tsx";
import ProjectDisplay from "./ProjectDisplay.tsx";
import ScrollOnceAnimation from "../../ScrollOnceAnimation.tsx";
import {useState} from "react";

export default function ProjectsSection() {
    const [expandedItem, setExpandedItem] = useState("");

    return (
        <Section icon={<CodeIcon/>} title="Projects" disablePaddingX>
            <ScrollOnceAnimation>
                <p className="mb-6 mx-4 md:mx-12">I've developed {Projects.length} personal projects over the years, all of which I'm very proud of. I love making new projects and learning new things along the way. Click any of the projects below to learn more.</p>
            </ScrollOnceAnimation>

            <SectionTimeline>
                {Projects.sort((a, b) => a.startDate > b.startDate ? 1 : -1).map((project, index) => (
                    <ProjectDisplay key={project.name} project={project} lastItem={index === Projects.length - 1} expandedItem={expandedItem} setExpandedItem={setExpandedItem}/>
                ))}
            </SectionTimeline>
        </Section>
    );
};

