export type customAnswerElement = {
    text: string;
    segments: {
        tag: 'p' | 'br' | 'h3' | 'em' | 'ul' | 'ds_logos' | 'i2' | 'i3' | 'ds_images';
        text: string;
    }[]
}

export type Segment = {
    tag: 'p' | 'br' | 'h3' | 'em' | 'ul' | 'ds_logos' | 'i2' | 'i3' | 'ds_images';
    text: string;
};
