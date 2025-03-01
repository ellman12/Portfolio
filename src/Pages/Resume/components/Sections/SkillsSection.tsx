import Section from "../../Section.tsx";

export default function SkillsSection() {
    return (
        <Section title="Skills">
            <div className="flex flex-col gap-1">
                <p>
                    <b>Languages:</b> C#, SQL, TypeScript, Java, C++, Python
                </p>

                <p>
                    <b>Technologies:</b> .NET, React, Next.js, Tailwind, NUnit, Blazor, Godot
                </p>

                <p>
                    <b>Soft Skills:</b> Adaptable, innovative, self-motivated, tenacious
                </p>
            </div>
        </Section>
    );
}