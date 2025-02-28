import Title from "../../../components/Title.tsx";
import LinkWithIcon from "../LinkWithIcon.tsx";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function TopSection() {
    return (
        <div className="relative flex flex-row items-center justify-between">
            <div className="flex flex-col">
                <Title/>
            </div>

            <div className="absolute top-0 right-0 flex flex-col items-end gap-0.5">
                <div className="flex flex-row items-center gap-2">
                    <p>507-858-9061</p>
                    <LocalPhoneIcon/>
                </div>

                <LinkWithIcon href="mailto:ellduc4@gmail.com" icon={<EmailIcon/>}>ellduc4@gmail.com</LinkWithIcon>
                <LinkWithIcon href="http://github.com/ellman12" icon={<GitHubIcon/>}>ellman12</LinkWithIcon>
                <LinkWithIcon href="http://linkedin.com/in/elliott-ducharme" icon={<LinkedInIcon/>}>elliott-ducharme</LinkWithIcon>
            </div>
        </div>
    );
}