import React, { useState } from "react";
import { postComment } from "../../api";

function CommentPost({ article_id, setComments }) {
  const username = "jessjelly";
  const [body, setBody] = useState("");
  const [commentError, setCommentError] = useState(false);
  const [commentPosted, setCommentPosted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(article_id, username, body)
      .then((newComment) => {
        setComments((currComments) => {
          return [newComment, ...currComments];
        });
        setCommentError(false);
        setCommentPosted(true);
      })
      .catch(() => {
        setCommentError(true);
        setCommentPosted(false);
      });
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment input">{`Comment as ${username}`}</label>
        <textarea
          value={body}
          onChange={handleBodyChange}
          name="comment input"
        ></textarea>
        <button type="submit">Comment</button>
        {commentPosted && <p>Comment Posted!</p>}
        {commentError && <p>Oops, sorry something went wrong there!</p>}
      </form>
    </section>
  );
}

export default CommentPost;
