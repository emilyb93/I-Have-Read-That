import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SluggedIcon from "../../assets/Slugged.png";
import { useContext } from "react";
import InfoContext from "../../contexts/InfoContext";

const styles = {
  headerContainer: {
    width: "100%",
    height: "4rem",
    border: "1px solid black",
    display: "flex",
    flexAlign: "center",
  },
  SluggedIcon: {
    border: "1px solid black",
    height: "4rem",
    width: "12rem",
    objectFit: "cover",
  },
  topicSelector: {
    width: "12rem",
  },
  navigation: {
    width: "100%",
    height: "4rem",
    fontSize: "2rem",
  },
};

export default function Header({ topics }) {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const { info } = useContext(InfoContext);

  return (
    <header style={styles.headerContainer}>
      <Link to="/">
        <img style={styles.SluggedIcon} src={SluggedIcon}></img>
      </Link>
      <section style={styles.topicSelector}>
        <nav>
          <select value={info.slug} style={styles.navigation}>
            <option>Home</option>
            {topics.map((topic) => {
              return (
                <option key={`topic-${topic.slug}`} to={`/slug/${topic.slug}`}>
                  {topic.slug}
                </option>
              );
            })}
          </select>
        </nav>
      </section>
    </header>
  );
}
