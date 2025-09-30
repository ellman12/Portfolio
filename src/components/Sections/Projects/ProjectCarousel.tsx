import {Carousel} from "antd";
import {FC} from "react";
import {Project} from "./Projects";
import CarouselItem from "./CarouselItem.tsx";

interface Props {
    project: Project;
}

const ProjectCarousel: FC<Props> = ({project}) => {
    const images = project.images;

    return (<div className="mx-4">
        {images.length === 1 && <CarouselItem src={images[0][0]} alt={images[0][1]}/>}

        {images.length > 1 &&
			<div onClick={e => e.stopPropagation()}>
				<Carousel variableWidth={false} draggable={true} infinite={true} arrows>
                    {images.map(([src, alt]) => <CarouselItem key={src} src={src} alt={alt}/>)}
				</Carousel>
			</div>}
    </div>);
};

export default ProjectCarousel;
