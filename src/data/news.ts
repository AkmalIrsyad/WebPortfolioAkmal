interface NewsArticle {
    title: string;
    link: string;
    pubDate: string;
    contentSnippet: string;
    image: {
        small: string;
        large: string;
      };
  }
export default NewsArticle;