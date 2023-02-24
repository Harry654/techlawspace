import React from "react";
import "./ArticleList.css";
import ArticleCard from "../articleCard/ArticleCard";

const ArticleList = ({ article }) => {
  return (
    <div className="articles">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
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
  );
};

export default ArticleList;
