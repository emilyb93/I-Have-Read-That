import React from "react";
import { Link } from "react-router-dom";

const style = {
  articleList: {
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    textAlign: "left",
    justifyContent: "left",
    marginBlockStart: "0px",
    padding: "0px",
  },
  articleCard: {
    display: "flex",
    flexDirection: "column",
    height: "4rem",
    width: "90vw",
    border: "1px solid black",
    textAlign: "left",
    marginLeft: "1rem",
    marginRight: "1rem",
    fontSize: "0.7rem",
  },
};

// just done styling for the list, needs a bit more work but then move onto next ticket

function ArticleList({ articles }) {
  return (
    <ul style={style.articleList}>
      {articles.map((article) => {
        return (
          <li style={style.articleCard} key={"article" + article.article_id}>
            <p style={style.articleTitle}> {article.title}</p>
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
