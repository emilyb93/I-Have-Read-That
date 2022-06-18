import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleWithId } from "../../api";
import moment from "moment";
import ArticleVote from "../ArticleVote/ArticleVote";
import CommentsList from "../CommentsList/CommentsList";
import InfoContext from "../../contexts/InfoContext";
import ShowError from "../ShowError/ShowError";
import Loading from "../Loading/Loading";
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
        setInfo({});
      });
  }, []);

  if (isLoading) return <Loading />;
  if (error) return <ShowError />;
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
