import { useEffect, useState } from "react";
import { EnumType } from "typescript";
import { Segment, customAnswerElement } from "@/types";

const TypeWriterFormatted = ({ elementData, typeDelay, startDelay, onComplete }: {
    elementData: customAnswerElement;
    typeDelay: number;
    startDelay: number;
    onComplete: () => void;
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
        if (!currentSegment) {
            if (onComplete) onComplete();
            return;
        }

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
    }, [currentSegment, currentCharIndex, typeDelay, shouldStartTyping, onComplete]);

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
            {/* <ul className="list-item list-outside">
                <li className="list-item "> &bull; hi</li>
                <li> hello</li>
            </ul> */}
        </div>
    );
};

const renderSegment = (segment: Segment, index: number) => {
    if (segment.tag === 'p') {
        return <p key={index}>{segment.text}</p>;
    } else if (segment.tag === 'h3') {
        return <strong className="text-base" key={index}>{segment.text}</strong>;
    } else if (segment.tag === 'br') {
        return <br key={index} />;
    } else if (segment.tag === 'em') {
        return <em key={index}>{segment.text}</em>;
    } else if (segment.tag === 'ul') { 
        return <ul key={index}><li>{segment.text}</li></ul>;
    }
    return null;
};

export default TypeWriterFormatted;