import React from "react";
import { Link } from "react-router-dom";
import ArticleVote from "../ArticleVote/ArticleVote";

const styles = {
  articleCard: {
    display: "grid",
    gridTemplateRows: "10% 50% 10%",

    minHeight: "10rem",
    maxHeight: "15rem",
    width: "90vw",
    borderBottom: "1px solid grey",
    textAlign: "left",
    marginLeft: "1rem",
    marginRight: "1rem",
    fontSize: "0.7rem",
  },
  articleTitle: {
    fontSize: "1.3rem",
  },
  slugText: {
    fontSize: "1rem",
  },
};

function ArticleCard({ article }) {
  return (
    <li style={styles.articleCard} key={"article" + article.article_id}>
      <Link to={`/slug/${article.topic}`}>
        <p style={styles.slugText}>{"/" + article.topic}</p>
      </Link>
      <Link to={`/article/${article.article_id}`}>
        <p style={styles.articleTitle}> {article.title}</p>
      </Link>
      <ArticleVote
        article_id={article.article_id}
        articleVotes={article.votes}
      />
    </li>
  );
}

export default ArticleCard;
