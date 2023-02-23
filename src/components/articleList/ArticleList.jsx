import React from "react";
import "./ArticleList.css";
import ArticleCard from "../articleCard/ArticleCard";

const ArticleList = ({ article }) => {
  return (
    <div className="articles">
      {[1, 2, 3, 4, 5].map((item, index) => (
        <ArticleCard
          key={index}
          article={{
            thumbnail: "../../images/bg.jpg",
            title: "A new day",
            date: "21-02-2023",
          }}
        />
      ))}
    </div>
  );
};

export default ArticleList;
