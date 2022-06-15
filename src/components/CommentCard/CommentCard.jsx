import React from "react";

function CommentCard({ comment }) {
  return (
    <section>
      <p>{comment.body}</p>
      <p>{comment.author}</p>
    </section>
  );
}

export default CommentCard;
