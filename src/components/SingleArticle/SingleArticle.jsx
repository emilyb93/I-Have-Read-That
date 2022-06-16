import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleWithId } from "../../api";
import moment from "moment";
import ArticleVote from "../ArticleVote/ArticleVote";
import CommentsList from "../CommentsList/CommentsList";
import InfoContext from "../../contexts/InfoContext";
function SingleArticle() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { article_id } = useParams();

  const { setInfo } = useContext(InfoContext);

  useEffect(() => {
    fetchArticleWithId(article_id)
      .then((fetchedArticle) => {
        setArticle(fetchedArticle);
        setInfo({ slug: fetchedArticle.topic });
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>... Loading ...</p>;
  if (error) return <p>Somethings gone wrong there sorry</p>;
  return (
    <>
      <section>
        <h2>{article.title}</h2>
        <p> by {article.author}</p>
        <p>{moment(article.created_at).fromNow()}</p>
        <p>{article.body}</p>
        <ArticleVote
          article_id={article.article_id}
          articleVotes={article.votes}
        />
      </section>
      <CommentsList article_id={article.article_id} />
    </>
  );
}

export default SingleArticle;
