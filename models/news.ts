
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
    content: string;
    uuid:string;
    publishedAt: string;
}

export interface HeadLinesResponse {
    totalArticles: number;
    articles: Article[];
}
