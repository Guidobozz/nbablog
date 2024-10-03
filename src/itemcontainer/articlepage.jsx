import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import newsdata from '../itemcontainer/newsdata';
import '../itemcontainer/articlepage.css'

function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const article = newsdata.find(news => news.id === id);
    setArticle(article);
  }, [id]);

  if (!article) {
    return <h2>Article not found</h2>;
  }

  return (
    <div className="article-page">
      {/* Mostrar la fecha al principio */}
      <div className="article-date">{article.date}</div>

      <h1>{article.title}</h1>
      <img src={article.imageUrl} alt={article.title} className="article-image" />
      <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />

      {/* Mostrar el nombre del autor al final */}
      <div className="article-author">Escrito por: {article.author}</div>
    </div>
  );
}

export default ArticlePage;







/**import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import newsdata from '../itemcontainer/newsdata';
import '../itemcontainer/articlepage.css'

function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const article = newsdata.find(news => news.id === id);
    setArticle(article);
  }, [id]);

  if (!article) {
    return <h2>Article not found</h2>;
  }

  return (
    <div className="article-page">
      <h1>{article.title}</h1>
      <img src={article.imageUrl} alt={article.title} className="article-image" />
      <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
}

export default ArticlePage;*/
