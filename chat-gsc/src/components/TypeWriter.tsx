import React, { useState, useEffect } from 'react'; 
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Remark } from 'react-remark';

const Typewriter = ({ text, startDelay = 0, typeDelay, newText, setQuestionFinished, setButtonEffect, onComplete }:
    {
        text: string;
        startDelay?: number;
        typeDelay: number;
        setQuestionFinished?: (val: boolean) => void;
        setButtonEffect?: (val: boolean) => void;
        onComplete?: () => void;
        newText?: JSX.Element;
    }) => {
    
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [shouldStartTyping, setShouldStartTyping] = useState(false);


    useEffect(() => {
        // This useEffect is for the initial delay only
        const startTimeout = setTimeout(() => {
        setShouldStartTyping(true);
        }, startDelay);

        return () => clearTimeout(startTimeout);
    }, [startDelay]);


    useEffect(() => {
        // This useEffect handles the typing effect
        if (shouldStartTyping && currentIndex < text.length) {
        const typeTimeout = setTimeout(() => {
            setCurrentText(prevText => prevText + text[currentIndex]);
            setCurrentIndex(prevIndex => prevIndex + 1);
        }, typeDelay);
    
        return () => clearTimeout(typeTimeout);
        }
    }, [shouldStartTyping, currentIndex, typeDelay, text]);


    useEffect(() => {
        if (onComplete && currentText.length === text.length) {
            setTimeout(() => {
                if (onComplete) {
                   onComplete();
                }
            }, 500);

        }
        if (setQuestionFinished && setButtonEffect && currentText.length === text.length) {
            setTimeout(() => {
                setButtonEffect(true);
            }, 600)
            setTimeout(() => {
                setQuestionFinished(true);
                setCurrentText('');
            }, 1000);
        }
    }, [currentText])
    
    return <Remark>{currentText}</Remark>
    
    // return <span className='text-sm'>{currentText}</span>;
};
  

export default Typewriter;