import React, { useState } from "react";
import { postComment } from "../../api";

function CommentPost({ article_id }) {
  const username = "jessjelly";
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(article_id, username, body);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment input">Comment as user</label>
        <textarea
          value={body}
          onChange={handleBodyChange}
          name="comment input"
        ></textarea>
        <button type="submit">Comment</button>
      </form>
    </section>
  );
}

export default CommentPost;
