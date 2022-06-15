import React from "react";
import CommentVote from "../CommentVote/CommentVote";

function CommentCard({ comment }) {
  return (
    <section>
      <p>{comment.body}</p>
      <p>{comment.author}</p>
      <CommentVote
        comment_id={comment.comment_id}
        comment_votes={comment.votes}
      />
    </section>
  );
}

export default CommentCard;
