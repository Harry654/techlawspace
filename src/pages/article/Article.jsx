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

const Article = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState();
  const [loading, setLoading] = useState(true);
  const { API_SERVER_URL, IMAGE_SERVER_URL } = useContext(ServerContext);

  async function fetchArticle(slug) {
    window.scrollTo(0, 0);
    try {
      const res = await axios.get(`${API_SERVER_URL}/v1/posts/${slug}`);
      let { post, success, statusCode } = res.data;

      if (success) {
        const authors = post.authors.map((author) => author.name);
        post["authors"] = authors;
        setArticle(post);
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
        <div className="article-page-inner">
          <h2>{article.title}</h2>
          <div className="article-meta">
            <p>By {article.authors.join(", ")}</p>
            <p>{article.createdAt}</p>
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
        {/* <div className="related-news">
          <h2>Next up in Tech News</h2>
          <div className="news-group">
            {article.relatedNews.map((article, index) => (
              <ArticleCard
                key={index}
                // index={index}
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
            {article.latestNews.map((article, index) => (
              <ArticleCard
                key={index}
                index={index}
                article={{
                  thumbnail: "../../images/bg.jpg",
                  title: "A new day",
                  date: "21-02-2023",
                }}
              />
            ))}
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Article;
