import H3 from "../H3.tsx";
import Section from "./Section.tsx";
import Tidbit from "../Tidbit.tsx";
import { AdsClick, Agriculture, BugReport, Casino, Chat, FitnessCenter, Hiking, OutdoorGrill, Paid, Park, PedalBike, Person, Pets, Place, PrecisionManufacturing, Public, School, Settings, Shield, SmartToy, SportsEsports, TempleBuddhist, Work } from "@mui/icons-material";
import ScrollOnceAnimation from "../ScrollOnceAnimation.tsx";

export default function AboutMeSection() {
    return (
        <Section icon={<Person/>} title="About Me">
            <div className="flex flex-col gap-4">
                <ScrollOnceAnimation>
                    <div className="grid grid-cols-2 gap-4 px-6 sm:px-8 mb-4">
                        <Tidbit icon={<Work/>}>Software Engineer at KBR</Tidbit>
                        <Tidbit icon={<Place/>}>Sioux Falls, SD</Tidbit>

                        <Tidbit icon={<School/>}>
                            <div className="flex flex-row flex-wrap">
                                <span>B.S. Computer Science,&nbsp;</span>
                                <span>Dakota State University</span>
                            </div>
                        </Tidbit>

                        <Tidbit icon={<Chat/>}>He/him</Tidbit>
                    </div>
                </ScrollOnceAnimation>

                <ScrollOnceAnimation>
                    <H3 className="pl-4">Hobbies</H3>

                    <ScrollOnceAnimation>
                        <div className="mt-6 grid grid-cols-2 gap-4 px-6 sm:px-8 mb-4">
                            <Tidbit icon={<AdsClick/>}>Archery</Tidbit>
                            <Tidbit icon={<PedalBike/>}>Biking</Tidbit>
                            <Tidbit icon={<OutdoorGrill/>}>Cooking</Tidbit>
                            <Tidbit icon={<Casino/>}>D&D</Tidbit>
                            <Tidbit icon={<FitnessCenter/>}>Exercise</Tidbit>
                            <Tidbit icon={<SportsEsports/>}>Game Design</Tidbit>
                            <Tidbit icon={<Hiking/>}>Hiking</Tidbit>
                            <Tidbit icon={<PrecisionManufacturing/>}>Robotics</Tidbit>
                        </div>
                    </ScrollOnceAnimation>
                </ScrollOnceAnimation>

                <ScrollOnceAnimation>
                    <H3 className="pl-4">Favorite Games</H3>

                    <ScrollOnceAnimation>
                        <div className="mt-6 grid grid-cols-2 gap-4 px-6 sm:px-8 mb-4">
                            <Tidbit icon={<TempleBuddhist/>}>Touhou Project</Tidbit>
                            <Tidbit icon={<Public/>}>RimWorld</Tidbit>
                            <Tidbit icon={<Paid/>}>Mario</Tidbit>
                            <Tidbit icon={<Shield/>}>Zelda</Tidbit>
                            <Tidbit icon={<Settings/>}>Factorio</Tidbit>
                            <Tidbit icon={<Pets/>}>Monster Hunter</Tidbit>
                            <Tidbit icon={<Park/>}>Terraria</Tidbit>
                            <Tidbit icon={<SmartToy/>}>R.E.P.O.</Tidbit>
                            <Tidbit icon={<BugReport/>}>Hollow Knight</Tidbit>
                            <Tidbit icon={<Agriculture/>}>Stardew Valley</Tidbit>
                        </div>
                    </ScrollOnceAnimation>
                </ScrollOnceAnimation>
            </div>
        </Section>
    );
}