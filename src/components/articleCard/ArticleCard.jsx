import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ServerContext } from "../../context/ServerContext";
import "./ArticleCard.css";

const ArticleCard = ({ article, index }) => {
  const { IMAGE_SERVER_URL } = useContext(ServerContext);
  return (
    <Link to={`/articles/${article.slug}`} className={`card ${index === 0 ? "first" : ""}`}>
      <img
        src={`${IMAGE_SERVER_URL}/v1/images/${article.thumbnail}`}
        className="card-img-top transition"
        alt={article.title}
      />
      <div className="card-body">
        <p className="card-category">{article.category}</p>
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">
         {" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor".repeat(10)}
        </p>
        <p className="card-date">{`By ${article.authors[0].name}`} | {article.createdAt}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
