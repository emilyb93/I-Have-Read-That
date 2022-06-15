import React from "react";
import { useNavigate } from "react-router-dom";

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
  articleTitle: {
    marginBottom: "0px",
  },
};

// just done styling for the list, needs a bit more work but then move onto next ticket

function ArticleList({ articles }) {
  let navigate = useNavigate();
  return (
    <ul style={style.articleList}>
      {articles.map((article) => {
        return (
          <li style={style.articleCard} key={"article" + article.article_id}>
            <p
              onClick={() => {
                navigate(`/article/${article.article_id}`);
              }}
              style={style.articleTitle}
            >
              {" "}
              {article.title}
            </p>

            <p
              onClick={() => {
                navigate(`/slug/${article.topic}`);
              }}
            >
              {"/" + article.topic}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default ArticleList;
