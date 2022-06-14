import React from "react";
import { Link } from "react-router-dom";

function ArticleList({ articles }) {
  return (
    <ul>
      {articles.map((article) => {
        return (
          <li key={"article" + article.article_id}>
            <p> {article.title}</p>
            <Link to={`/slug/${article.topic}`}>
              <p>{"/" + article.topic}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default ArticleList;
