import { ComponentProps, FC, ReactNode, useEffect, useState } from "react";
import { OverridableStringUnion } from "@mui/types";
import { TimelineConnector, TimelineContent, TimelineDot, TimelineDotPropsColorOverrides, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { motion } from "framer-motion";
import { useWindowSize } from "@uidotdev/usehooks";

type Props = {
    startDate: string;
    endDate: string;
    title: string;
    color: OverridableStringUnion<"primary" | "secondary" | "error" | "warning" | "info" | "success", TimelineDotPropsColorOverrides>;
    lastItem?: boolean;
    children: ReactNode;
    expandedItem?: string;
    setExpandedItem?: (title: string) => void;
    expandedChildren?: ReactNode;
} & Omit<ComponentProps<typeof TimelineDot>, "color">;

const SectionTimelineItem: FC<Props> = ({startDate, endDate, title, lastItem = false, color, children, expandedItem = "", setExpandedItem = () => {}, expandedChildren = undefined}) => {
    const [step, setStep] = useState<"closed" | "openingWide" | "closingWide" | "openingTall" | "closingTall" | "opened">("closed");
    const {width} = useWindowSize();

    useEffect(() => {
        if (expandedItem !== title) {
            if (step === "opened")
                setStep("closingTall");
            else if (step === "openingWide")
                setStep("closingWide");
            else if (step === "openingTall")
                setStep("closingTall");
        }
    }, [expandedItem]);

    function getDateRangeWidth() {
        if (width == null)
            return 0;

        if (width >= 1536) return 240;
        if (width >= 1280) return 240;
        if (width >= 1024) return 240;
        if (width >= 768) return 180;
        if (width >= 640) return 120;
        return 120;
    }

    function onClick() {
        if (expandedChildren === undefined)
            return;

        if (step === "closed")
            setStep("openingWide");
        else if (step === "opened")
            setStep("closingTall");

        setExpandedItem(title);
    }

    const hoverClasses = "hover:cursor-pointer hover:bg-slate-700 hover:transition hover:duration-500 hover:ease-in-out";
    return (
        <TimelineItem onClick={onClick} className={`${expandedChildren !== undefined && step === "closed" ? hoverClasses : ""}`}>
            <motion.div
                initial={{width: getDateRangeWidth()}}
                animate={step !== "closed" && step !== "closingWide" ? {width: 0} : {width: getDateRangeWidth()}}
                transition={{duration: 0.5, ease: "easeInOut"}}
                className="text-nowrap object-contain overflow-clip"
            >
                <TimelineOppositeContent>
                    <div className="inline-flex flex-row justify-end md:items-center flex-wrap md:flex-nowrap text-xs lg:text-base">
                        <span className="text-nowrap">{startDate}—</span>
                        <span className="text-nowrap">{endDate}</span>
                    </div>
                </TimelineOppositeContent>
            </motion.div>

            <motion.div
                initial={{opacity: 1, width: 12}}
                animate={step !== "closed" && step !== "closingWide" ? {opacity: 0, width: 0} : {opacity: 1, width: 12}}
                transition={{duration: 0.5, ease: "easeInOut"}}
                className="flex"
                onAnimationComplete={() => {
                    if (step === "openingWide")
                        setStep("openingTall");
                    else if (step === "closingWide")
                        setStep("closed");
                }}
            >
                <TimelineSeparator>
                    <TimelineDot color={color}/>
                    {lastItem ? <></> : <TimelineConnector/>}
                </TimelineSeparator>
            </motion.div>

            <TimelineContent style={{paddingLeft: 0, paddingRight: 0, objectFit: "contain", overflow: "hidden"}}>
                <motion.div
                    initial={{backgroundColor: "#00000000"}}
                    animate={step === "openingWide" || step === "openingTall" || step === "opened" ? {backgroundColor: "#101114", padding: 16, marginTop: 8, marginBottom: 8} : {backgroundColor: "#00000000", padding: 0, marginTop: 0, marginBottom: 0}}
                    transition={{duration: 0.5, ease: "easeInOut"}}
                >
                    <div className="mb-4 pl-4 pr-4">
                        <p className="font-semibold text-sm md:text-base">{title}</p>

                        {children}
                    </div>

                    <motion.div
                        className={`object-contain overflow-hidden max-w-full flex flex-col gap-4 text-sm md:text-base`}
                        initial={{maxHeight: 0}}
                        animate={step === "openingTall" || step === "opened" ? {maxHeight: 1000} : {maxHeight: 0}}
                        transition={{duration: 0.6, ease: "easeInOut"}}
                        exit={{maxHeight: 0}}
                        onAnimationComplete={() => {
                            if (step === "openingTall")
                                setStep("opened");
                            else if (step === "closingTall")
                                setStep("closingWide");
                        }}
                    >
                        {expandedChildren}
                    </motion.div>
                </motion.div>
            </TimelineContent>
        </TimelineItem>
    );
};

export default SectionTimelineItem;