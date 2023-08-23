export type customAnswerElement = {
    text: string;
    segments: {
        tag: 'p' | 'br' | 'h3' | 'em' | 'ul' | '/ul' | 'li' | 'a' | 'img' | 'code' | 'pre';
        text: string;
    }[]
}

export type Segment = {
    tag: 'p' | 'h3' | 'br' | 'em' | 'ul' | '/ul' | 'li' | 'a' | 'img' | 'code' | 'pre';
    text: string;
};
