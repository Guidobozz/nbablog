import React from 'react';
import Card from '../itemcontainer/card';
import newsdata from '../itemcontainer/newsdata'; 
import '../itemcontainer/newcard.css'

function NewCard() {
  return (
    <div className="card-container"> {/* Asegúrate de que esta clase esté presente */}
      {newsdata.map((news, index) => (
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

export default NewCard;
