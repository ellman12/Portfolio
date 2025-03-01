import Section from "../../Section.tsx";


export default function EducationSection() {
    return (
        <Section title="Education">
            <div className="flex flex-row items-center justify-between">
                <p>Dakota State University</p>
                <p>Madison, SD</p>
            </div>

            <div className="flex flex-row items-center justify-between">
                <p>
                    <b>B.S. Computer Science, Magna Cum Laude</b>
                </p>
                <p>August 2020–May 2023</p>
            </div>
        </Section>
    )
}