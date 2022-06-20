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
  articlePage: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  articleSection: {
    width: "100%",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "0.5fr 6fr",
    gridTemplateRows: "1fr 1fr 0.5fr",
    gridColumnGap: "0px",
    gridRowGap: "0px",
  },
  topSection: {
    maxHeight: "8rem",
    gridArea: "1 / 2 / 2 / 4",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "0.5fr 1fr",
  },
  votes: {
    gridArea: "1 / 1 / 2 / 2",
    marginBottom: "10px",
    marginTop: "10px",
    paddingBottom: "80%",
    display: "flex",
    flexDirection: "column",
  },
  posterInfo: {
    textAlign: "left",
    marginLeft: "5px",
    gridArea: "1/1/2/2",
  },
  title: { gridArea: "2/1/3/2", textAlign: "left", marginLeft: "5px" },
  body: {
    display: "flex",
    flexDirection: "column",
    gridArea: "2 / 2 / 4 /2",
    textAlign: "left",
    marginLeft: "5px",
    height: "100%",
  },
  commentCount: {
    gridArea: "3/2/5/4",
    textAlign: "left",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "10px",
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
    <section style={styles.articlePage}>
      <section style={styles.articleSection}>
        <section style={styles.votes}>
          <ArticleVoteVert
            article_id={article.article_id}
            articleVotes={article.votes}
            style={styles.votes}
          />
        </section>
        <section style={styles.topSection}>
          <p style={styles.posterInfo}>
            Posted by {article.author} {moment(article.created_at).fromNow()}
          </p>
          <h2 style={styles.title}>{article.title}</h2>
        </section>
        <p style={styles.body}>{article.body}</p>
        <section style={styles.commentCount}>
          <span className="material-symbols-outlined">chat_bubble</span>
          <p>{article.comment_count} comments</p>
        </section>
      </section>
      <CommentsList article_id={article.article_id} />
    </section>
  );
}

export default SingleArticle;
