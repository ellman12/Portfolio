import {FC, ReactNode} from "react";
import H3 from "../../H3.tsx";
import Link from "../../../../components/Link.tsx";

interface Props {
    name: string;
    href?: string;
    hrefDisplay?: string;
    children: ReactNode;
}

const WorkExperienceItem: FC<Props> = ({name, href, hrefDisplay, children}) => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center justify-between">
                <H3>
                    <b>{name}</b>
                </H3>

                {href !== undefined && <Link href={href}>
                    {hrefDisplay}
				</Link>}
            </div>

            <ul className="ml-6 list-disc">
                {children}
            </ul>
        </div>
    );
};

export default WorkExperienceItem;
