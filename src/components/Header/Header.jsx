import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SluggedIcon from "../../assets/Slugged.png";
import { useContext } from "react";
import InfoContext from "../../contexts/InfoContext";
import TopicDropdown from "../TopicDropdown/TopicDropdown";

const styles = {
  headerContainer: {
    width: "100%",
    height: "4rem",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "1fr",
    gridColumnGap: "0px",
    gridRowGap: "0px",
    marginBottom: "10px",
  },
  SluggedIcon: {
    // border: "1px solid black",
    height: "4rem",
    width: "12rem",
    objectFit: "cover",
    gridArea: "1/1/2/2",
  },
  username: {
    // border: "1px solid black",
    marginLeft: "10px",
    marginRight: "5px",
    borderRadius: "5px",
    gridArea: "1/3/3/4",
  },
};

export default function Header({ topics }) {
  const { info } = useContext(InfoContext);

  return (
    <header style={styles.headerContainer}>
      <Link to="/">
        <img style={styles.SluggedIcon} src={SluggedIcon}></img>
      </Link>
      <TopicDropdown topics={topics} info={info} />
      <section style={styles.username}>
        <p>Username Placeholder</p>
      </section>
    </header>
  );
}
