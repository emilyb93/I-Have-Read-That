import React from "react";

function CommentPost() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment input">Comment as user</label>
        <textarea name="comment input"></textarea>
        <button type="submit">Comment</button>
      </form>
    </section>
  );
}

export default CommentPost;
