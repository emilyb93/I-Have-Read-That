import React from "react";
import CommentVote from "../CommentVote/CommentVote";
import { styles } from "./CommentCard.style";

function CommentCard({ comment }) {
  const deleteComment = () => {};
  return (
    <section style={styles.commentCard}>
      <p>{comment.body}</p>
      <p>{comment.author}</p>
      <CommentVote
        comment_id={comment.comment_id}
        comment_votes={comment.votes}
      />
      <button onClick={deleteComment}>Delete</button>
    </section>
  );
}

export default CommentCard;
