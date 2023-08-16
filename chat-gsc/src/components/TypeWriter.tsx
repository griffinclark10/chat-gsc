import React, { useState, useEffect } from 'react'; 

const Typewriter = ({ text, startDelay = 2000, typeDelay, setQuestionFinished, questionPosted, setButtonEffect }:
    {
        text: string;
        startDelay?: number;
        typeDelay: number;
        setQuestionFinished?: (val: boolean) => void;
        questionPosted?: boolean;
        setButtonEffect?: (val: boolean) => void;
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
    
    
    return <span>{currentText}</span>;
};
  

export default Typewriter;