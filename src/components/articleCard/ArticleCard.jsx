import React from "react";
import { Link } from "react-router-dom";
import "./ArticleCard.css";

const ArticleCard = ({ article, index }) => {
  return (
    <Link to={`/articles/${index}`} className={`card ${index === 0 ? "first" : ""}`}>
      <img
        src={"https://picsum.photos/1000/"}
        className="card-img-top transition"
        alt={article.title}
      />
      <div className="card-body">
        <p className="card-category">National</p>
        <h5 className="card-title">{!index ? article.title : `article ${index + 1}`}</h5>
        <p className="card-text">
         {" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor".repeat(10)}
        </p>
        <p className="card-date">{"By John Doe"} | {article.date}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
