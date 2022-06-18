import "./App.css";
import { Routes, Route, Link, NavLink, useParams } from "react-router-dom";
import Home from "./components/Home/Home";
import Slugged from "./components/Slugged/Slugged";
import { useEffect, useState } from "react";
import { fetchTopics } from "./api";
import SingleArticle from "./components/SingleArticle/SingleArticle";
import InfoContext from "./contexts/InfoContext";
import ShowError from "./components/ShowError/ShowError";
import Header from "./components/Header/Header";

function App() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetchTopics()
      .then((fetchedTopics) => {
        setTopics(fetchedTopics);
      })
      .then(() => {
        setIsLoading(false);
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  if (isLoading) return <p>... Loading ...</p>;
  if (error) return <p>Oops, somethings gone wrong there!!</p>;
  return (
    <InfoContext.Provider value={{ info, setInfo }}>
      <div className="App">
        <Header topics={topics} />
        <section id="info-section">
          {info.slug ? (
            <>
              <h2>{info.slug[0].toUpperCase() + info.slug.slice(1)}</h2>
              <p>{info.description}</p>
            </>
          ) : (
            <>
              <h2>Slugged</h2>
              <p>Home Of The News</p>
            </>
          )}
        </section>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/slug/:slug" element={<Slugged topics={topics} />} />
          <Route path="/article/:article_id" element={<SingleArticle />} />
          <Route path="/*" element={<ShowError />} />
        </Routes>
      </div>
    </InfoContext.Provider>
  );
}

export default App;
