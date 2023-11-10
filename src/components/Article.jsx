// Article.js
import React, { useEffect } from 'react';

const Article = ({ match }) => {
  useEffect(() => {
    // Здійснюємо скролінг до елемента з id, що відповідає параметру URL :id
    const element = document.getElementById(match.params.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [match.params.id]);

  return (
    <div>
      <h2 id="1">Article 1</h2>
      <p>Content for Article 1...</p>

      <h2 id="2">Article 2</h2>
      <p>Content for Article 2...</p>
    </div>
  );
};

export default Article;
