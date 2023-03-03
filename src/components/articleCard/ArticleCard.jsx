import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ServerContext } from "../../context/ServerContext";
import "./ArticleCard.css";

const ArticleCard = ({ article, index }) => {
  const { IMAGE_SERVER_URL } = useContext(ServerContext);
  const date = new Date(article.date);
  const year = date.getFullYear();
  const month = parseInt(date.getMonth()) + 1;
  const day = date.getDate();
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
        <p className="card-date">{`By ${article.authors[0].name}`} | {`${year}-${(month) > 10 ? month : '0' + (month)}-${(day) > 10 ? day : '0' + (day)}`}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
