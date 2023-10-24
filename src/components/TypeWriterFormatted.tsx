import "./styles/components.css";
import { createRef, useEffect, useRef, useState } from "react";
import { Segment, customAnswerElement } from "@/types";
import {DealsourcingImages, QHImages, dealsourcing_logos, qh_logos, thesis_logos, ThesisImages, tweet_logos, hh_logos, pp_logos, cp_logos, lb_logos} from "@/app/projects/segmentElements";

const TypeWriterFormatted = ({ elementData, typeDelay, startDelay, scrollTimeout }: {
    elementData: customAnswerElement;
    typeDelay: number;
    startDelay: number;
    scrollTimeout: number;
}) => {

    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
    const [shouldStartTyping, setShouldStartTyping] = useState(false);
    const [scrollIndex, setScrollIndex] = useState(0);
    const currentSegment = elementData.segments[currentSegmentIndex];
    const scrollRef = useRef<null | HTMLDivElement>(null);
    const [shouldStopScrolling, setShouldStopScrolling] = useState(false);
    
    //used as timed scroll check (every 1000 ms)
    useEffect(() => {
        function incrementScrollIndex() {
          if (scrollIndex < 1000) {
            setScrollIndex(prevIndex => prevIndex + 1);
            setTimeout(incrementScrollIndex, 1000);
          }
        }
        incrementScrollIndex();
    }, []);

    //handle when to stop scrolling
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShouldStopScrolling(true);
        }, scrollTimeout);
    
        return () => {
            clearTimeout(timeoutId);
        };
    }, [scrollTimeout]);

    // handle the scrolling effect
    useEffect(() => {
        if (!shouldStopScrolling && scrollRef.current && scrollRef.current.scrollTop !== scrollRef.current.scrollHeight) {
            scrollRef.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
        }
    }, [scrollIndex, shouldStopScrolling]);
    

    // start typing after startDelay
    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setShouldStartTyping(true);
        }, startDelay);
        return () => clearTimeout(startTimeout);
    }, [startDelay]);

    // type next character after typeDelay
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
        <>
            <div ref={scrollRef}>
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
            <div ref={scrollRef} className="h-10"></div>
        </>
    );
};

const renderSegment = (segment: Segment, index: number) => {
    switch (segment.tag) {
        case 'p':
            return <p key={index}>{segment.text}</p>;
        case 'h3':
            return <a href={segment.href} key={index}><strong className="text-base projects-title" key={index}>{segment.text}</strong></a>;
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
        case 'lb_logos': 
            return <div key={index}> {lb_logos} </div>;
        case 'pp_logos':
            return <div key={index}> {pp_logos} </div>;
        case 'cp_logos': 
            return <div key={index}> {cp_logos} </div>;
        default:
            return null;
    }
    
};

export default TypeWriterFormatted;