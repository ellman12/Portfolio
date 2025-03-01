import Section from "../../../Section.tsx";
import WorkExperienceItem from "./WorkExperienceItem.tsx";

export default function WorkExperienceSection() {
    return (
        <Section title="Work Experience">
            <div className="flex flex-col gap-4">
                <WorkExperienceItem title="Software Engineer" location="Sioux Falls, SD" company="KBR" startDate="June 2023" endDate="Present">
                    <li>Integral member of the FEWS NET team, which uses data to assist governments worldwide with famine prediction and preparation.</li>
                    <li>Rewrote FEWS NET website using React, Next.js, TypeScript, and Tailwind.</li>
                    <li>Assisted with testing before release and helped resolve issues identified during testing.</li>
                    <li>Demonstrated proficiency in frontend development and a commitment to leveraging technology for positive societal outcomes.</li>
                    <li>Currently working on SWIM, an internal React app for managing employees.</li>
                </WorkExperienceItem>

                <WorkExperienceItem title="Software Engineer Intern" location="Remote" company="Daktronics" startDate="May 2022" endDate="May 2023">
                    <li>Tested new software and hardware versions for digital signage using Azure DevOps, resolving impediments to ensure product functionality.</li>
                    <li>Gained experience communicating issues with members of the appropriate teams when issues arose.</li>
                    <li>Contributed to Orion, a C# web app for automating test cases years in the making.</li>
                </WorkExperienceItem>
            </div>
        </Section>
    );
}