
export interface Article {
    source: {
        url: string,
        name: string
    },
    author: string;
    title: string;
    description: string;
    url: string;
    image: string;
    publishedAt: Date;
    content: string;
    uuid:string;
}

export interface HeadLinesResponse {
    totalArticles: number;
    articles: Article[];
}
