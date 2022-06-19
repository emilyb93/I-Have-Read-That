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
import Loading from "./components/Loading/Loading";
import useScreenSize from "./hooks/useScreenSize";

import fakeAd from "./assets/fake-ad.png";

const styles = {
  app: {
    backgroundColor: "#F2F2F1",
    margin: "-5px",
  },
  mobileView: {
    backgroundColor: "#F2F2F1",
    margin: "-5px",
  },
  desktopView: {
    backgroundColor: "#F2F2F1",
    margin: "-5px",
    display: "grid",

    gridTemplateColumns: "70% 30%",
  },
  sideBar: {
    marginTop: "3rem",
    // width: "100%",
    maxHeight: "80vw",
    // border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    marginRight: "30px",
  },
  infoSection: {
    height: "50%",
    // border: "1px solid red",

    paddingTop: "50%",
    paddingBottom: "50%",
  },
  fakeAd: {
    height: "50%",
    paddingTop: "50%",
    paddingBottom: "50%",

    // border: "1px solid blue",
    // gridArea: "fakeAd",
  },
  fakeAdImage: {
    height: "100%",
    // maxHeight: "",
    width: "100%",
  },
  content: {
    // gridArea: "content",
  },
};

function App() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [info, setInfo] = useState({});

  const { isMobile } = useScreenSize();

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

  if (isLoading)
    return (
      <>
        <Loading />
      </>
    );

  if (error) return <p>Oops, somethings gone wrong there!!</p>;
  return (
    <InfoContext.Provider value={{ info, setInfo }}>
      <div className="App" style={styles.app}>
        <Header topics={topics} />

        <hr style={{ borderTop: "1px solid grey" }}></hr>
        <main style={isMobile ? styles.mobileView : styles.desktopView}>
          <section style={styles.content}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/slug/:slug" element={<Slugged topics={topics} />} />
              <Route path="/article/:article_id" element={<SingleArticle />} />
              <Route path="/*" element={<ShowError />} />
            </Routes>
          </section>
          {isMobile ? null : (
            <section id="info-section" style={styles.sideBar}>
              <section style={styles.infoSection}>
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
              <section style={styles.fakeAd}>
                <img
                  style={styles.fakeAdImage}
                  src={fakeAd}
                  alt="fake ad that links to Emily Bennett's portfolio"
                ></img>
              </section>
            </section>
          )}
        </main>
      </div>
    </InfoContext.Provider>
  );
}

export default App;
