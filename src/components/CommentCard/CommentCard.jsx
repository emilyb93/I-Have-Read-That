import React from "react";
import CommentVote from "../CommentVote/CommentVote";
import { styles } from "./CommentCard.style";
import { deleteComment } from "../../api";

function CommentCard({ comment, setComments }) {
  const { comment_id, body, author, votes } = comment;

  const handleDelete = () => {
    deleteComment(comment_id).then((res) => {
      if (res.status === 204) {
        setComments((currentComments) => {
          const filteredComments = currentComments.filter((currentComment) => {
            return currentComment.comment_id !== comment_id;
          });
          return filteredComments;
        });
      }
    });
  };
  return (
    <section style={styles.commentCard}>
      <p>{body}</p>
      <p>{author}</p>
      <CommentVote comment_id={comment_id} comment_votes={votes} />
      <button onClick={handleDelete}>Delete</button>
    </section>
  );
}

export default CommentCard;
