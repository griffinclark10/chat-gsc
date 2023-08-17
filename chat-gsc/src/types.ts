export type customAnswerElement = {
    text: string;
    segments: {
        tag: 'p' | 'br' | 'h3';
        text?: string;
    }[]
}

