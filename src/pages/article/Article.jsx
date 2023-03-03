import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "../../components/articleCard/ArticleCard";
import ShareButton from "../../components/shareButton/ShareButton";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import "./Article.css";
import axios from "axios";
import { useState } from "react";
import { ServerContext } from "../../context/ServerContext";
import categories from "../../utils/categories.json";
import { Link } from "react-router-dom";
import ArticleList from "../../components/articleList/ArticleList";

const Article = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState();
  const [dateTime, setDateTime] = useState();
  const [relatedNews, setRelatedNews] = useState([]);
  const [latestNews, setLatestNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { API_SERVER_URL, IMAGE_SERVER_URL } = useContext(ServerContext);

  async function fetchArticle(slug) {
    try {
      const res = await axios.get(`${API_SERVER_URL}/v1/posts/${slug}`);
      let { post, success, relatedNews, latestNews } = res.data;
      // return console.log(post)

      if (success) {
        const authors = post.authors.map((author) => author.name);
        post["authors"] = authors;
        setArticle(post);
        setRelatedNews(relatedNews.filter((news) => news._id !== post._id));
        setLatestNews(latestNews.filter((news) => news._id !== post._id));

        const date = new Date(post.date);
        const year = date.getFullYear();
        const month = parseInt(date.getMonth()) + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        setDateTime(
          `${year}-${month > 10 ? month : "0" + month}-${
            day > 10 ? day : "0" + day
          } | ${hours > 10 ? hours : "0" + hours}:${
            minutes > 10 ? minutes : "0" + minutes
          } ${(hours) > 11 ? 'pm' : 'am'}`
        );

        setLoading(false);

        let link = document.querySelector("link[rel~='icon']");
        link.href = `${IMAGE_SERVER_URL}/v1/images/${post.thumbnail}`;
      }
    } catch (error) {
      setLoading(false);
      console.log(`${error.message}`);
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchArticle(slug);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const createMarkup = () => {
    return { __html: article.content };
  };
  if (loading) return <h1>Loading...</h1>;
  if (!article) return <h1>Article not found</h1>;
  return (
    <>
      <NavBar currentPage="publications" />
      <div className="article-page">
        <div className="article-page-box">
          <div className="article-page-inner">
            <h2>{article.title}</h2>
            <div className="article-meta">
              <p>By {article.authors.join(", ")}</p>
              <p>{dateTime}</p>
              <div className="share">
                <ShareButton platform="whatsapp" />
                <ShareButton platform="twitter" />
              </div>
            </div>
            <img
              src={`${IMAGE_SERVER_URL}/v1/images/${article.thumbnail}`}
              alt={article.title}
              className="thumbnail"
            />
            <div dangerouslySetInnerHTML={createMarkup()} className="content" />
            <p>
              This article was written by{" "}
              <strong>{article.authors.join(", ")}</strong>. He is a Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Sed pharetra urna in
              felis rutrum ullamcorper.
            </p>
          </div>

          <div className="side-bar">
            <div className="article-tags">
              <h3>Tags</h3>
              <div className="article-tags-inner">
                {article.tags.map(
                  (tag, index) =>
                    tag && (
                      <Link
                        to={`/publications?t=${tag}`}
                        key={index}
                        className="tag transition"
                      >
                        {tag}
                      </Link>
                    )
                )}
              </div>
            </div>

            <div className="article-tags">
              <h3>Discover</h3>
              <div className="article-tags-inner">
                {categories.map((category, index) => (
                  <Link
                    to={`/publications?c=${category}`}
                    key={index}
                    className="tag transition"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        {relatedNews.length > 0 ? (
          <div className="related-news">
            <h2>Next up in {article.category} News</h2>
            <div className="news-group">
              {relatedNews.map((article, index) => (
                <ArticleCard
                  key={index}
                  // index={index}
                  article={article}
                />
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
        {latestNews.length > 0 ? (
          <div className="latest-news">
            <h2>Latest News</h2>
            <ArticleList articles={latestNews} />
          </div>
        ) : (
          ""
        )}
      </div>
      <Footer />
    </>
  );
};

export default Article;
