import React from "react";
import "./ArticleList.css";
import ArticleCard from "../articleCard/ArticleCard";

const ArticleList = ({ articles }) => {
  return (
    <div className="articles">
      {articles.length > 0 ? articles.map((article, index) => (
        <ArticleCard
          key={index}
          index={index}
          article={article}
        />
      )) : "No articles found"}
    </div>
  );
};

export default ArticleList;
