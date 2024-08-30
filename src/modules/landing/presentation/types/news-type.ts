type Paragraph = {
  content: string;
};

type NewsArticle = {
  title: string;
  image: string;
  isForMainPage: boolean;
  date: string;
  author: string;
  excerpt: string;
  paragraphs: Paragraph[];
};
