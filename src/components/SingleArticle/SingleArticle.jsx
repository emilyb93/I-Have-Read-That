import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleWithId } from "../../api";
import moment from "moment";

function SingleArticle() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleWithId(article_id).then((fetchedArticle) => {
      setArticle(fetchedArticle);
    });
  }, []);

  return (
    <section>
      <h2>{article.title}</h2>
      <p> by {article.author}</p>
      <p>{moment(article.created_at).fromNow()}</p>
      <p>{article.body}</p>
    </section>
  );
}

export default SingleArticle;
