import React from 'react';
import './ArticleCard.css';

const ArticleCard = ({ article }) => {
  return (
    <div className="card">
      <img src={require('../../images/bg.jpg')} className="card-img-top" alt={article.title} />
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.date}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
