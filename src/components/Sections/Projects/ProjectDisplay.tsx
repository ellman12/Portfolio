import {FC} from "react";
import {Project} from "./Projects.ts";
import SectionTimelineItem from "../../Timeline/SectionTimelineItem.tsx";
import ProjectCarousel from "./ProjectCarousel.tsx";
import ScrollOnceAnimation from "../../ScrollOnceAnimation.tsx";

interface Props {
    project: Project;
    lastItem: boolean;
    expandedItem: string;
    setExpandedItem: (title: string) => void;
}

const ProjectDisplay: FC<Props> = ({project, lastItem, expandedItem, setExpandedItem}) => {
    const dateOptions: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    };

    const expandedChildren = () => (<>
        <div className="mb-4 px-4 text-justify" dangerouslySetInnerHTML={{__html: project.longDesc}}/>

        {<ProjectCarousel project={project}/>}
    </>);

    return (
        <ScrollOnceAnimation>
            <SectionTimelineItem startDate={project.startDate.toLocaleDateString(undefined, dateOptions)} endDate={project.endDate?.toLocaleDateString(undefined, dateOptions) ?? "Present"} expandedChildren={expandedChildren()} title={project.name} color="primary" lastItem={lastItem} expandedItem={expandedItem} setExpandedItem={setExpandedItem} href={project.repoLink}>
                <div className={`flex flex-col gap-4`}>
                    <div className="text-sm md:text-base" dangerouslySetInnerHTML={{__html: project.briefDesc}}/>
                </div>
            </SectionTimelineItem>
        </ScrollOnceAnimation>

    );
};

export default ProjectDisplay;
