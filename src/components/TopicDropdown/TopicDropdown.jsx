import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const styles = {
  topicContainer: {
    border: "1px solid black",
    width: "100%",
    textAlign: "left",
    fontSize: "1.3rem",
  },
  firstMenuItem: {
    display: "grid",
    gridTemplateColumns: "70% 30%",
  },
  openedMenu: {
    zIndex: "1",
    backgroundColor: "#F2F2F1",
    border: "1px solid blue",
    opacity: "100%",
    position: "relative",
  },
  menuOption: {
    border: "1px solid pink",
    textDecoration: "none",
  },
  menuText: {
    color: "black",
  },
};

function TopicDropdown({ topics, info }) {
  const toggleMenu = () => {
    setNavMenuOpen(!navMenuOpen);
  };
  const [navMenuOpen, setNavMenuOpen] = useState(true);
  return (
    <section style={styles.topicContainer}>
      <div onClick={toggleMenu} style={styles.firstMenuItem}>
        <p>{info.slug ? info.slug : "Home"} </p>
        <span aria-label="topic menu" className="material-symbols-outlined">
          menu
        </span>
      </div>
      {navMenuOpen && (
        <div style={styles.openedMenu}>
          <NavLink to={`/`} style={styles.menuOption} onClick={toggleMenu}>
            <p key={`home`} style={styles.menuText}>
              Home
            </p>
          </NavLink>
          {topics.map((topic) => {
            return (
              <NavLink
                to={`/slug/${topic.slug}`}
                key={`topic-${topic.slug}`}
                style={styles.menuOption}
                onClick={toggleMenu}
              >
                <p style={styles.menuText}>/{topic.slug}</p>
              </NavLink>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default TopicDropdown;
