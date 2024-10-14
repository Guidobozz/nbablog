import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../itemcontainer/card';
import './categorypage.css';
import newsdata from '../itemcontainer/newsdata';

function CategoryPage() {
  const { category } = useParams();
  const filteredNews = newsdata.filter(news => news.category === category);

  return (
    <div className="category-page">
      <h1>{category.toUpperCase()}</h1>
      {filteredNews.map((news, index) => (
        <Card
          key={index}
          title={news.title}
          description={news.description}
          imageUrl={news.imageUrl}
          articleId={news.id}
        />
      ))}
    </div>
  );
}

export default CategoryPage;
