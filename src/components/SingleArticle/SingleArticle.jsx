import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleWithId } from "../../api";
import moment from "moment";
import ArticleVoteVert from "../ArticleVoteVert/ArticleVoteVert";
import CommentsList from "../CommentsList/CommentsList";
import InfoContext from "../../contexts/InfoContext";
import ShowError from "../ShowError/ShowError";
import Loading from "../Loading/Loading";

const styles = {
  articleSection: {
    height: "6rem",
    width: "7rem",
    display: "grid",
    gridTemplateArea: "votes info, votes title, empty content, empty links",
    gridTemplateColumns: "10% 80% 10%",
    gridTemplateRows: "30%, 10% ,40%,10%",
  },
  votes: {
    gridArea: "votes",
  },
  posterInfo: {
    gridArea: "info",
  },
  title: {
    gridArea: "title",
  },
  body: {
    gridArea: "content",
  },
};
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
      <section style={styles.articleSection}>
        <ArticleVoteVert
          article_id={article.article_id}
          articleVotes={article.votes}
        />
        <p style={styles.posterInfo}>
          Posted by {article.author} {moment(article.created_at).fromNow()}
        </p>
        <h2 style={styles.title}>{article.title}</h2>

        <p style={styles.body}>{article.body}</p>
      </section>
      <CommentsList article_id={article.article_id} />
    </>
  );
}

export default SingleArticle;
