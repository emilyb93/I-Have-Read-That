import React from "react";
import { Link } from "react-router-dom";
import ArticleCard from "../ArticleCard/ArticleCard";
import SortBar from "../SortBar/SortBar";

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
    borderBottom: "1px solid grey",
    textAlign: "left",
    marginLeft: "1rem",
    marginRight: "1rem",
    fontSize: "0.7rem",
  },
  articleTitle: {
    marginBottom: "0px",
  },
  articleSection: {
    display: "flex",
    flexDirection: "column",
  },
};

function ArticleList({ articles, setSelectedSort }) {
  return (
    <section style={style.articleSection}>
      <SortBar setSelectedSort={setSelectedSort} />

      <ul style={style.articleList}>
        {articles.map((article) => {
          return <ArticleCard article={article} />;
        })}
      </ul>
    </section>
  );
}

export default ArticleList;
