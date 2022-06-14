import React, { useEffect } from "react";
import { fetchArticles } from "../../api";

function Home() {

    const 
  useEffect(() => {
    fetchArticles();
  }, []);
  return <div>Home</div>;
}

export default Home;
