import { useEffect, useState } from "react";
import { Segment, customAnswerElement } from "@/types";
import {DealsourcingImages, QHImages, dealsourcing_logos, qh_logos, thesis_logos, ThesisImages, tweet_logos, hh_logos, pp_logos, cp_logos} from "@/app/projects/segmentElements";
import Button from "./Button";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const TypeWriterFormatted = ({ elementData, typeDelay, startDelay }: {
    elementData: customAnswerElement;
    typeDelay: number;
    startDelay: number;
}) => {

    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
    const [shouldStartTyping, setShouldStartTyping] = useState(false);
    const currentSegment = elementData.segments[currentSegmentIndex];

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setShouldStartTyping(true);
        }, startDelay);
        return () => clearTimeout(startTimeout);
    }, [startDelay]);

    useEffect(() => {
        if (shouldStartTyping && currentSegmentIndex < elementData.segments.length) {
            const typeTimeout = setTimeout(() => {
                setCurrentCharIndex(prevCharIndex => {
                    if (prevCharIndex < currentSegment.text.length - 1) {
                        return prevCharIndex + 1;
                    } else {
                        setCurrentSegmentIndex(prevSegmentIndex => prevSegmentIndex + 1);
                        return 0;
                    }
                });
            }, typeDelay);

            return () => clearTimeout(typeTimeout);
        }
    }, [currentSegment, currentCharIndex, typeDelay, shouldStartTyping]);

    return (
        <div>
            {elementData.segments.map((segment, index) => {
                if (index < currentSegmentIndex) {
                    return renderSegment(segment, index);
                } else if (index === currentSegmentIndex) {
                    return renderSegment({
                        ...segment,
                        text: segment.text.substring(0, currentCharIndex)
                    }, index);
                }
                return null;
            })}
        </div>
    );
};

const renderSegment = (segment: Segment, index: number) => {
    switch (segment.tag) {
        case 'p':
            return <p key={index}>{segment.text}</p>;
        case 'h3':
            return <strong className="text-base" key={index}>{segment.text}</strong>;
        case 'br':
            return <br key={index} />;
        case 'em':
            return <em key={index}>{segment.text}</em>;
        case 'ul':
            return <ul key={index}><li>{segment.text}</li></ul>;
        case 'ds_logos':
            return <div key={index}> {dealsourcing_logos} </div>;
        case 'ds_images':
            return <div key={index}> {<DealsourcingImages />} </div>;
        case 'qh_logos':
            return <div key={index}> {qh_logos} </div>;
        case 'qh_images':
            return <div key={index}> {<QHImages />} </div>;
        case 'thesis_logos':
            return <div key={index}> {thesis_logos} </div>;
        case 'thesis_images':
            return <div key={index}> {<ThesisImages />} </div>;
        case 'tweet_logos':
            return <div key={index}> {tweet_logos} </div>;
        case 'hh_logos': 
            return <div key={index}> {hh_logos} </div>;
        case 'pp_logos':
            return <div key={index}> {pp_logos} </div>;
        case 'cp_logos': 
            return <div key={index}> {cp_logos} </div>;
        case 'github1':
            return <div key={index}> {<Button icon={faGithub} textColor="white" hoverBgColor="white" link="" height={8} hoverTextColor="black" bgColor="black"/>} </div>;
        default:
            return null;
    }
    
};

export default TypeWriterFormatted;