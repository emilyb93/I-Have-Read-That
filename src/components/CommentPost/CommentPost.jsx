import React, { useState } from "react";
import { postComment } from "../../api";

function CommentPost({ article_id, setComments }) {
  const username = "jessjelly";
  const [body, setBody] = useState("");
  const [commentError, setCommentError] = useState(false);
  const [commentPosted, setCommentPosted] = useState(false);
  const [waitingForResponse, setWaitingForResponse] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setWaitingForResponse(true);
    postComment(article_id, username, body)
      .then((newComment) => {
        setComments((currComments) => {
          return [newComment, ...currComments];
        });
        setCommentError(false);
        setCommentPosted(true);
        setWaitingForResponse(false);
      })
      .catch(() => {
        setWaitingForResponse(false);
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
        <input
          required={true}
          type="text"
          value={body}
          onChange={handleBodyChange}
          name="comment input"
        ></input>
        <button type="submit" disabled={waitingForResponse}>
          Comment
        </button>
        {commentPosted && <p>Comment Posted!</p>}
        {commentError && <p>Oops, sorry something went wrong there!</p>}
      </form>
    </section>
  );
}

export default CommentPost;
