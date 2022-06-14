import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./components/Home/Home";
import Slugreddit from "./components/Slugreddit/Slugreddit";
import { useEffect, useState } from "react";
import { fetchTopics } from "./api";

function App() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
            return <NavLink to={`/slug/${topic.slug}`}>{topic.slug}</NavLink>;
          })}
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slug/:slug" element={<Slugreddit />} />
      </Routes>
    </div>
  );
}

export default App;
