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
                                <p>Communicated issues with members of the appropriate teams when issues arose.</p>
                                <p>Contributed to Orion, a C# web app for automating test cases years in the making.</p>
                            </div>
                        </SectionTimelineItem>
                    </ScrollOnceAnimation>

                    <ScrollOnceAnimation>
                        <SectionTimelineItem startDate="June 2023" endDate="Present" title="Software Engineer — KBR" lastItem={true} color="success">
                            <div className="text-sm md:text-base">
                                <p>Rewrote FEWS NET website with React, Next.js, TS, and Tailwind.</p>
                                <p>Assisted with testing before release and helped resolve issues identified during testing.</p>
                                <p>Currently working on SWIM, an internal React app for managing employees</p>
                            </div>
                        </SectionTimelineItem>
                    </ScrollOnceAnimation>
                </SectionTimeline>
            </Section>
        </ScrollOnceAnimation>
    );
}
