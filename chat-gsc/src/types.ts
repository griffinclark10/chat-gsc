export type customAnswerElement = {
    text: string;
    segments: {
        tag: 'p' | 'br' | 'h3' | 'em' | 'ul' | 'ds_logos' | 'qh_logos' | 'thesis_logos' | 'tweet_logos' | 'hh_logos' | 'pp_logos' | 'cp_logos' | 'ds_images' | 'qh_images' | 'thesis_images' | 'github1';
        text: string;
    }[]
}

export type Segment = {
    tag: 'p' | 'br' | 'h3' | 'em' | 'ul' | 'ds_logos' | 'qh_logos' | 'thesis_logos' | 'tweet_logos' | 'hh_logos' | 'pp_logos' | 'cp_logos' | 'ds_images' | 'qh_images' | 'thesis_images' | 'github1';
    text: string;
};
