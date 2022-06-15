import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../../api";
import ArticleList from "../ArticleList.jsx/ArticleList";

function Slugreddit({ setInfo, topics }) {
  const [articles, setArticles] = useState([]);
  const { slug } = useParams();
  useEffect(() => {
    fetchArticles(slug).then((fetchedArticles) => {
      setArticles(fetchedArticles);
    });
  }, [slug]);

  useEffect(() => {
    if (slug) {
      setInfo(() => {
        let slugObj;
        topics.forEach((topic) => {
          if (topic.slug === slug) {
            slugObj = topic;
          }
        });
        return slugObj;
      });
    }
  }, [slug, topics]);

  return <ArticleList articles={articles} />;
}

export default Slugreddit;
