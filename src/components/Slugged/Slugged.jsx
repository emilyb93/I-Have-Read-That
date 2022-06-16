import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../../api";
import ArticleList from "../ArticleList.jsx/ArticleList";

function Slugged({ setInfo, topics }) {
  const [articles, setArticles] = useState([]);
  const { slug } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const [selectedSort, setSelectedSort] = useState({
    sort_by: "date",
    order: "desc",
  });

  useEffect(() => {
    const { sort_by, order } = selectedSort;
    setInfo({});
    fetchArticles(slug, sort_by, order)
      .then((fetchedArticles) => {
        setArticles(fetchedArticles);
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
  }, [slug, selectedSort]);

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

  if (isLoading) return <p>... Loading ...</p>;
  if (error) return <p>Somethings gone wrong there sorry</p>;

  return <ArticleList articles={articles} setSelectedSort={setSelectedSort} />;
}

export default Slugged;
