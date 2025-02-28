import {FC, ReactNode} from "react";
import H2 from "./components/H2.tsx";

interface Props {
    title: string;
    children: ReactNode;
}

const Section: FC<Props> = ({title, children}) => {
    return (
        <section id={title.toLowerCase().replace(" ", "-")} className="px-1 flex flex-col">
            <H2>{title}</H2>

            {children}
        </section>
    );
};

export default Section;