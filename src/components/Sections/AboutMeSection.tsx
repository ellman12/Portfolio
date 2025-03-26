import H3 from "../H3.tsx";
import Section from "./Section.tsx";
import Tidbit from "../Tidbit.tsx";
import ChatIcon from "@mui/icons-material/Chat";
import WorkIcon from "@mui/icons-material/Work";
import PlaceIcon from "@mui/icons-material/Place";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import CasinoIcon from "@mui/icons-material/Casino";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import HikingIcon from "@mui/icons-material/Hiking";
import ShieldIcon from "@mui/icons-material/Shield";
import SettingsIcon from "@mui/icons-material/Settings";
import ParkRoundedIcon from "@mui/icons-material/ParkRounded";
import PetsIcon from "@mui/icons-material/Pets";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import {Paid} from "@mui/icons-material";
import ScrollOnceAnimation from "../ScrollOnceAnimation.tsx";

export default function AboutMeSection() {
    return (
        <Section icon={<PersonIcon/>} title="About Me">
            <div className="flex flex-col gap-4">
                <ScrollOnceAnimation>
                    <div className="grid grid-cols-2 gap-4 px-6 sm:px-8 mb-4">
                        <Tidbit icon={<WorkIcon/>}>Software Engineer at KBR</Tidbit>
                        <Tidbit icon={<PlaceIcon/>}>Sioux Falls, SD</Tidbit>

                        <Tidbit icon={<SchoolIcon/>}>
                            <div className="flex flex-row flex-wrap">
                                <span>B.S. Computer Science,&nbsp;</span>
                                <span>Dakota State University</span>
                            </div>
                        </Tidbit>

                        <Tidbit icon={<ChatIcon/>}>He/him</Tidbit>
                    </div>
                </ScrollOnceAnimation>

                <ScrollOnceAnimation>
                    <H3 className="pl-4">Hobbies</H3>

                    <ScrollOnceAnimation>
                        <div className="mt-6 grid grid-cols-2 gap-4 px-6 sm:px-8 mb-4">
                            <Tidbit icon={<AdsClickIcon/>}>Archery</Tidbit>
                            <Tidbit icon={<PedalBikeIcon/>}>Biking</Tidbit>
                            <Tidbit icon={<OutdoorGrillIcon/>}>Cooking</Tidbit>
                            <Tidbit icon={<CasinoIcon/>}>D&D</Tidbit>
                            <Tidbit icon={<FitnessCenterIcon/>}>Exercise</Tidbit>
                            <Tidbit icon={<SportsEsportsIcon/>}>Game Design</Tidbit>
                            <Tidbit icon={<HikingIcon/>}>Hiking</Tidbit>
                            <Tidbit icon={<PrecisionManufacturingIcon/>}>Robotics</Tidbit>
                        </div>
                    </ScrollOnceAnimation>
                </ScrollOnceAnimation>

                <ScrollOnceAnimation>
                    <H3 className="pl-4">Favorite Games</H3>

                    <ScrollOnceAnimation>
                        <div className="mt-6 grid grid-cols-2 gap-4 px-6 sm:px-8 mb-4">
                            <Tidbit icon={<Paid/>}>Mario</Tidbit>
                            <Tidbit icon={<ShieldIcon/>}>Zelda</Tidbit>
                            <Tidbit icon={<SettingsIcon/>}>Factorio</Tidbit>
                            <Tidbit icon={<PetsIcon/>}>Monster Hunter</Tidbit>
                            <Tidbit icon={<ParkRoundedIcon/>}>Terraria</Tidbit>
                            <Tidbit icon={<AgricultureIcon/>}>Stardew Valley</Tidbit>
                        </div>
                    </ScrollOnceAnimation>
                </ScrollOnceAnimation>
            </div>
        </Section>
    );
}