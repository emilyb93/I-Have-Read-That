import React from "react";
import { Link } from "react-router-dom";
import ArticleVote from "../ArticleVote/ArticleVote";

const styles = {
  articleCard: {
    display: "grid",
    gridTemplateRows: "30% 50% 20%",

    minHeight: "10rem",
    maxHeight: "15rem",
    width: "90vw",
    borderBottom: "1px solid grey",
    textAlign: "left",
    marginLeft: "1rem",
    marginRight: "1rem",
    fontSize: "0.7rem",
    paddingBottom: "1rem",
  },
  articleTitle: {
    fontSize: "1.3rem",
  },
  slugText: {
    fontSize: "1rem",
  },
  bottomBar: {
    display: "flex",
    flexDirection: "row",
    height: "2rem",
  },
  commentIcon: {
    marginLeft: "10px",
    marginRight: "10px",
    paddingTop: "5px",
  },
  commentText: {
    alignContent: "center",
    marginBlockEnd: "0px",
  },
  commentCount: {
    display: "flex",
    flexDirection: "row",
    textDecoration: "none",
    color: "black",
  },
};

function ArticleCard({ article }) {
  return (
    <li style={styles.articleCard} key={"article" + article.article_id}>
      <Link
        to={`/slug/${article.topic}`}
        style={{ linkDecoration: "none", color: "black" }}
      >
        <p style={styles.slugText}>{"/" + article.topic}</p>
      </Link>
      <Link
        to={`/article/${article.article_id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <p style={styles.articleTitle}> {article.title}</p>
      </Link>
      <section style={styles.bottomBar}>
        <ArticleVote
          article_id={article.article_id}
          articleVotes={article.votes}
        />
        <Link to={`/article/${article.article_id}`} style={styles.commentCount}>
          <span
            className="material-symbols-outlined"
            style={styles.commentIcon}
          >
            chat_bubble
          </span>
          <p style={styles.commentText}>{article.comment_count} Comments</p>
        </Link>
      </section>
    </li>
  );
}

export default ArticleCard;
