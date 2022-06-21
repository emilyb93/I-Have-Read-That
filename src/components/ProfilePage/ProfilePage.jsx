import React, { useEffect, useState } from "react";

import { fetchUserPosts } from "../../api";
import ArticleList from "../ArticleList.jsx/ArticleList";

export default function ProfilePage() {
  const username = "jessjelly";
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    fetchUserPosts("jessjelly").then((posts) => {
      setUserPosts(posts);
    });
  }, []);
  return (
    <section>
      <h2>{username}'s Posts</h2>
      <ArticleList articles={userPosts} />
    </section>
  );
}
