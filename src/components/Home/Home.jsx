import React, { useEffect, useState } from "react";
import { fetchArticles } from "../../api";
import ArticleList from "../ArticleList.jsx/ArticleList";

function Home({ setInfo }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setInfo({});
    fetchArticles().then((fetchedArticles) => setArticles(fetchedArticles));
  }, []);
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}

export default Home;
