import {FC, ReactNode} from "react";
import H2 from "../H2.tsx";

interface Props {
    icon: ReactNode;
    title: string;
    disablePaddingX?: boolean;
    children: ReactNode;
}

const Section: FC<Props> = ({icon, title, disablePaddingX = false, children}) => {
    const sidePadding = "px-1 sm:px-2 lg:px-4 ";

    return (
        <section id={title.toLowerCase().replace(" ", "-")} className="pt-4 pb-8 flex flex-col">
            <div className="border border-white mx-4 mb-4"></div>

            <div className={`flex flex-row items-center gap-4 mb-6 mx-2 ${sidePadding}`}>
                {icon}
                <H2>{title}</H2>
            </div>

            <div className={`${disablePaddingX ? "" : sidePadding}`}>
                {children}
            </div>
        </section>
    );
};

export default Section;