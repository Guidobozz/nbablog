import React from 'react';
import { Link } from 'react-router-dom';
import './card.css'

function Card({ title, description, imageUrl, articleId }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={`/article/${articleId}`} className="card-link">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default Card;
