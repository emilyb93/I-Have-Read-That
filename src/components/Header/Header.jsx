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
    // border: "1px solid black",
    display: "flex",
    flexAlign: "center",
  },
  SluggedIcon: {
    // border: "1px solid black",
    height: "4rem",
    width: "12rem",
    objectFit: "cover",
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
    </header>
  );
}
