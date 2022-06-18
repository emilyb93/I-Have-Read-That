import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header({ topics }) {
  return (
    <header className="App-header">
      <Link to="/">
        <h1>Slugged</h1>
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
  );
}
