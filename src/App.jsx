import "./App.css";
import { Routes, Route, Link, NavLink, useParams } from "react-router-dom";
import Home from "./components/Home/Home";
import Slugreddit from "./components/Slugreddit/Slugreddit";
import { useEffect, useState } from "react";
import { fetchTopics } from "./api";
import SingleArticle from "./components/SingleArticle/SingleArticle";

function App() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetchTopics()
      .then((fetchedTopics) => {
        setTopics(fetchedTopics);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch(console.log);
  }, []);

  if (isLoading) return <p>... Loading ...</p>;
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <h1>Slugreddit</h1>
        </Link>
        <nav>
          {topics.map((topic) => {
            return (
              <NavLink key={`topic-${topic.slug}`} to={`/slug/${topic.slug}`}>
                {topic.slug}
              </NavLink>
            );
          })}
        </nav>
      </header>
      <section id="info-section">
        {info.slug ? (
          <>
            <h2>{info.slug[0].toUpperCase() + info.slug.slice(1)}</h2>
            <p>{info.description}</p>
          </>
        ) : (
          <>
            <h2>Slugreddit</h2>
            <p>Home Of The News</p>
          </>
        )}
      </section>

      <Routes>
        <Route path="/" element={<Home setInfo={setInfo} />} />
        <Route
          path="/slug/:slug"
          element={<Slugreddit setInfo={setInfo} topics={topics} />}
        />
        <Route path="/article/:article_id" element={<SingleArticle />} />
      </Routes>
    </div>
  );
}

export default App;
