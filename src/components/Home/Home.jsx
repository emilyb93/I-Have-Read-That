import React, { useEffect, useState } from "react";
import { fetchArticles } from "../../api";
import ArticleList from "../ArticleList.jsx/ArticleList";

function Home({ setInfo }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const [selectedSort, setSelectedSort] = useState({
    sort_by: "date",
    order: "desc",
  });

  useEffect(() => {
    const { sort_by, order } = selectedSort;
    setInfo({});
    fetchArticles(null, sort_by, order)
      .then((fetchedArticles) => {
        setArticles(fetchedArticles);
        setIsLoading(false);
        setError(false);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
  }, [selectedSort]);

  if (isLoading) return <p>... Loading ...</p>;
  if (error) return <p>Somethings gone wrong there sorry</p>;

  return (
    <div>
      <ArticleList articles={articles} setSelectedSort={setSelectedSort} />
    </div>
  );
}

export default Home;
