import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import newsdata from '../itemcontainer/newsdata';
import '../itemcontainer/articlepage.css'

function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    // Buscar el artículo por ID
    const foundArticle = newsdata.find(news => news.id === id);
    setArticle(foundArticle);

    if (foundArticle) {
      // Filtrar artículos relacionados basados en la misma categoría (y que no sea el mismo artículo)
      const related = newsdata.filter(
        news => news.category === foundArticle.category && news.id !== id
      );
      setRelatedArticles(related);
    }
  }, [id]);

  if (!article) {
    return <h2>Artículo no encontrado</h2>;
  }

  return (
    <div className="article-page">
      {/* Mostrar la fecha al principio */}
      <div className="article-date">{article.date}</div>

      {/* Título del artículo */}
      <h1>{article.title}</h1>

      {/* Imagen principal */}
      <img src={article.imageUrl} alt={article.title} className="article-image" />

      {/* Contenido del artículo */}
      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Mostrar el nombre del autor al final */}
      <div className="article-author">Escrito por: {article.author}</div>

      {/* Artículos Relacionados */}
      {relatedArticles.length > 0 && (
        <div className="related-articles">
          <h3>Artículos Relacionados</h3>
          <ul>
            {relatedArticles.map((related) => (
              <li key={related.id}>
                <a href={`/article/${related.id}`}>{related.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
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
