import Section from "../Section.tsx";
import WorkIcon from "@mui/icons-material/Work";
import SectionTimeline from "../../Timeline/SectionTimeline.tsx";
import SectionTimelineItem from "../../Timeline/SectionTimelineItem.tsx";
import ScrollOnceAnimation from "../../ScrollOnceAnimation.tsx";

export default function WorkExperienceSection() {
    return (
        <ScrollOnceAnimation>
            <Section icon={<WorkIcon/>} title="Work Experience" disablePaddingX>
                <p className="mb-4 mx-2 md:mx-8">My professional experience is primarily frontend development with React, TypeScript, and Tailwind, while my personal projects primarily involve backend development with C# and PostgreSQL. I'm also looking to learn new languages like Kotlin.</p>

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
                        <SectionTimelineItem startDate="June 2023" endDate="Present" title="Software Engineer — KBR" lastItem={true} color="primary">
                            <div className="text-sm md:text-base">
                                <p>Rebuilt ReactTS apps and reusable components for global famine prediction, preparation, and management.</p>
                                <p>Optimized map viewers, reducing page load times by 90+% and vastly improving performance and reliability.</p>
                                <p>Enabled humanitarian organizations to make faster, data-driven decisions, directly supporting famine prevention efforts across Africa and beyond.</p>
                            </div>
                        </SectionTimelineItem>
                    </ScrollOnceAnimation>
                </SectionTimeline>
            </Section>
        </ScrollOnceAnimation>
    );
}
