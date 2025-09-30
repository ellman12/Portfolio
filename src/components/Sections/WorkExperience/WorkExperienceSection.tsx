import Section from "../Section.tsx";
import WorkIcon from "@mui/icons-material/Work";
import SectionTimeline from "../../Timeline/SectionTimeline.tsx";
import SectionTimelineItem from "../../Timeline/SectionTimelineItem.tsx";
import ScrollOnceAnimation from "../../ScrollOnceAnimation.tsx";

export default function WorkExperienceSection() {
    return (
        <ScrollOnceAnimation>
            <Section icon={<WorkIcon/>} title="Work Experience" disablePaddingX>
                <p className="mb-4 mx-2 md:mx-8">My professional experience is primarily frontend development with React, TypeScript, and Tailwind, while my personal projects primarily involve backend development with C# and PostgreSQL. I am expanding my professional experience out into these areas.</p>

                <SectionTimeline>
                    <ScrollOnceAnimation>
                        <SectionTimelineItem startDate="May 2022" endDate="May 2023" title="Software Engineer Intern — Daktronics" color="primary">
                            <div className="text-sm md:text-base">
                                <p>Tested new software and hardware versions for digital signage using Azure DevOps.</p>
                                <p>Escalated and tracked critical defects, ensuring rapid fixes and minimizing downtime.</p>
                                <p>Implemented new features in Orion, a large-scale C# web app for test automation, increasing automated test coverage and accelerating delivery for multiple product lines.</p>
                            </div>
                        </SectionTimelineItem>
                    </ScrollOnceAnimation>

                    <ScrollOnceAnimation>
                        <SectionTimelineItem startDate="June 2023" endDate="Present" title="Software Engineer — KBR" lastItem={true} color="success">
                            <div className="text-sm md:text-base">
                                <p>Rewrote ReactTS apps and created reusable components for global famine prediction, preparation, and management.</p>
                                <p>Leveraging modern tooling, our main website and map viewers have become significantly faster and more reliable.</p>
                                <p>Our historical and current work has saved millions of lives across the world, especially in Africa.</p>
                            </div>
                        </SectionTimelineItem>
                    </ScrollOnceAnimation>
                </SectionTimeline>
            </Section>
        </ScrollOnceAnimation>
    );
}
