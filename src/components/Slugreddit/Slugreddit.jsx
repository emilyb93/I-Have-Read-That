import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../../api";
import ArticleList from "../ArticleList.jsx/ArticleList";

function Slugreddit() {
  const [articles, setArticles] = useState([]);
  const { slug } = useParams();
  useEffect(() => {
    fetchArticles(slug).then((fetchedArticles) => {
      setArticles(fetchedArticles);
    });
  }, [slug]);

  return (
    <>
      <h1>Slugreddit</h1>
      <ArticleList articles={articles} />
    </>
  );
}

export default Slugreddit;
