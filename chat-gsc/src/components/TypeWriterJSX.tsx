import { useEffect, useState } from "react";
import { EnumType } from "typescript";
import { customAnswerElement } from "@/types";

const TypeWriterJSX = ({ elementData, typeDelay, startDelay, onComplete }: {
    elementData: customAnswerElement;
    typeDelay: number;
    startDelay: number;
    onComplete: () => void;
}) => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [shouldStartTyping, setShouldStartTyping] = useState(false);
    const currentSegment = elementData.segments[currentIndex];

    // console.log("Current Index: " + currentIndex);
    useEffect(() => {
        const startTimeout = setTimeout(() => {
        setShouldStartTyping(true);
        }, startDelay);
        return () => clearTimeout(startTimeout);
    }, [startDelay]);

    // console.log("Start Delay:" + startDelay);
    // console.log("Start typeing: " + shouldStartTyping);
    console.log("Test: " + (shouldStartTyping && currentIndex < elementData.text.length));

    useEffect(() => {
        if (!currentSegment) {
            if (onComplete) onComplete();
            return;
        }

        // else if (currentText.length < currentSegment.text.length)

        if (shouldStartTyping && currentIndex < elementData.text.length) {
            const typeTimeout = setTimeout(() => {
                setCurrentText(prevText => prevText + elementData.text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, typeDelay);
        
            return () => clearTimeout(typeTimeout);
        }
    }, [currentSegment, currentText, typeDelay, shouldStartTyping, onComplete]);

    return (
        <div>
            {elementData.segments.map((segment, index) => {
                if (index < currentIndex) {
                    if (segment.tag === 'p') {
                        return <p key={index}>{segment.text}</p>;
                    } else if (segment.tag === 'h3') {
                        return <strong key={index}> {segment.text}</strong>;
                    } else if (segment.tag === 'br') {
                        return <br key={index} />;
                    }
                } else if (index === currentIndex) {
                    return <span key={index}>{currentText}</span>;
                }
                return null;
            })}
        </div>
    );
};

export default TypeWriterJSX;

// {
//     text: "Of course! Here is a list of Griffin's relevant professional experience.Dealsourcing - Full Stack Engineer",
//     segments: [
//         { tag: 'p', text: "Of course! Here is a list of Griffin's relevant professional experience." },
//         { tag: 'br' },
//         { tag: 'br' },
//         { tag: 'h3', text: "Dealsourcing - Full Stack Engineer" }
//     ]
// }