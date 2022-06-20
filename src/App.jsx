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
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "10vh 1fr",
    gridColumnGap: "0px",
    gridRowGap: "0px",
    maxWidth: "100vw",
    minHeight: "100vh",
    paddingRight: "5px",
  },
  mobileView: {
    gridArea: "2/1/3/4",
    maxWidth: "100vw",
    backgroundColor: "#F2F2F1",
    margin: "-5px",
  },
  desktopView: {
    gridArea: "2/1/3/4",
    maxWidth: "100vw",
    backgroundColor: "#F2F2F1",
    margin: "-5px",
    display: "grid",
    gridTemplateColumns: "70% 30%",
  },
  header: {
    gridArea: "1/1/2/4",
    marginBottom: "5px",
    marginTop: "5px",
  },
  sideBar: {
    marginTop: "3rem",
    width: "100%",
    maxHeight: "80vw",
    borderLeft: "1px solid grey",
    paddingLeft: "5px",
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    marginRight: "30px",
    gridArea: "1/2/2/3",
  },
  infoSection: {
    borderBottom: "1px solid grey",
    height: "100%",
    width: "100%",
    justifyItems: "center",
    alignItems: "center",
    marginTop: "25%",
    gridArea: "1/1/2/1",
  },
  fakeAd: {
    gridArea: "2/1/3/1",
    marginTop: "-40%",
    paddingTop: "5px",
    paddingRight: "10px",
    borderTop: "1px solid grey",
  },
  fakeAdImage: {
    height: "auto",
    width: "100%",
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
        <header style={styles.header}>
          <Header topics={topics} />
        </header>

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
            <section style={styles.sideBar}>
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
