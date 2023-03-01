import React from "react";
import "./ArticleList.css";
import ArticleCard from "../articleCard/ArticleCard";

const ArticleList = ({ articles }) => {
  return (
    <div className="articles">
      {articles.map((article, index) => (
        <ArticleCard
          key={index}
          index={index}
          article={article}
        />
      ))}
    </div>
  );
};

export default ArticleList;
