import React from "react";
import "./ArticleCard.css";

const ArticleCard = ({ article, index }) => {
  return (
    <div className={`card ${index === 0 ? "first" : ""}`}>
      <img
        src={"https://picsum.photos/200/"}
        className="card-img-top"
        alt={article.title}
      />
      <div className="card-body">
        <p className="card-category">National</p>
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">
         {" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor".repeat(10)}
        </p>
        <p className="card-date">{article.date}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
