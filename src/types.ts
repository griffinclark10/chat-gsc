export type Segment = {
    tag: 'p' | 'br' | 'h3' | 'em' | 'ul' | 'ds_logos' | 'qh_logos' | 'thesis_logos' | 'tweet_logos' | 'hh_logos' | 'lb_logos'| 'pp_logos' | 'cp_logos' | 'ds_images' | 'qh_images' | 'thesis_images';
    text: string;
    href?: any;
};

export type customAnswerElement = {
    segments: Segment[];
}
