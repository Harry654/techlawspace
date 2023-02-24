import React from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "../../components/articleCard/ArticleCard";
import "./Article.css";

const Article = () => {
  const { slug } = useParams();

  // Function to convert the content from the database to HTML

  const article = {
    id: 1,
    title: "Example Article",
    author: "Jane Doe",
    date: "January 1, 2022",
    time: "12:00 PM EST",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra urna in felis rutrum ullamcorper. Donec laoreet lorem eu venenatis bibendum. Sed ac eleifend nisi. Etiam congue lectus vitae massa bibendum, nec volutpat libero semper. Pellentesque efficitur eros vel dui hendrerit mollis. Fusce ac leo vel arcu venenatis commodo eu eget quam. Donec tristique lectus nec elit fermentum, non malesuada elit fringilla.</p>
      <p>Integer vestibulum sapien ac magna pellentesque malesuada. Fusce vitae ultricies elit. In fringilla feugiat enim, quis convallis quam. Aliquam quis risus vel mauris vulputate malesuada. Aliquam euismod bibendum sapien quis lobortis. Nam commodo commodo risus, at elementum nisl tristique eu. Vestibulum ac dolor id sapien gravida commodo.</p>
      <p>Ut dictum dapibus arcu, vel tristique sapien faucibus ac. Donec dapibus ex ipsum, eget euismod quam bibendum nec. Integer laoreet commodo sapien. Sed sed orci turpis. Ut facilisis lectus id justo maximus dapibus. Nullam varius nulla sed mi laoreet, at iaculis enim auctor. Vestibulum tincidunt in tellus vitae posuere. Sed bibendum ultrices odio, eu tempor lorem dignissim vel. In rhoncus nisl a nisi egestas, eget suscipit odio semper.</p>
    `,
    relatedNews: [
      {
        id: 2,
        title: "Another Article",
        author: "John Smith",
        date: "January 2, 2022",
        time: "1:00 PM EST",
        thumbnail: "https://example.com/thumbnail.jpg",
      },
      {
        id: 3,
        title: "Third Article",
        author: "Alice Jones",
        date: "January 3, 2022",
        time: "2:00 PM EST",
        thumbnail: "https://example.com/thumbnail.jpg",
      },
    ],
    recommendedNews: [
      {
        id: 4,
        title: "Recommended Article 1",
        author: "Bob Johnson",
        date: "January 4, 2022",
        time: "3:00 PM EST",
        thumbnail: "https://example.com/thumbnail.jpg",
      },
      {
        id: 5,
        title: "Recommended Article 2",
        author: "Sarah Lee",
        date: "January 5, 2022",
        time: "4:00 PM EST",
        thumbnail: "https://example.com/thumbnail.jpg",
      },
    ],
  };

  const createMarkup = () => {
    return { __html: article.content };
  };
  return (
    <div className="article-page">
      <h1>
        {article.title} {slug}
      </h1>
      <div className="article-meta">
        <p>{article.author}</p>
        <p>
          {article.date} {article.time}
        </p>
        <a href={article.shareUrl}>Share</a>
      </div>
      <img src="https://picsum.photos/960/500" alt={article.title} className="thumbnail" />
      <div dangerouslySetInnerHTML={createMarkup()} className="content" />
      <div className="related-news">
        <h2>Next up in Tech News</h2>
        <div className="news-group">
        {article.relatedNews.map(({ thumbnail, title, date }) => (
            <ArticleCard
            article={{
                thumbnail: "../../images/bg.jpg",
                title: "A new day",
                date: "21-02-2023",
            }}
            />
            ))}
            </div>
      </div>
      <div className="recommended-news">
        <h2>Recommended News</h2>
        <div className="news-group">
        {article.recommendedNews.map(({ thumbnail, title, date }) => (
            <ArticleCard
            article={{
                thumbnail: "../../images/bg.jpg",
                title: "A new day",
                date: "21-02-2023",
            }}
            />
            ))}
            </div>
      </div>
      <div className="latest-news">
        <h2>Latest News</h2>
        <div className="news-group">
        {article.recommendedNews.map(({ thumbnail, title, date }) => (
            <ArticleCard
            article={{
                thumbnail: "../../images/bg.jpg",
                title: "A new day",
                date: "21-02-2023",
            }}
            />
            ))}
            </div>
      </div>
    </div>
  );
};

export default Article;
