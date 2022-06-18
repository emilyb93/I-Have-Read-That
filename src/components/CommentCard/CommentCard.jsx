import React, { useState } from "react";
import CommentVote from "../CommentVote/CommentVote";
import { styles } from "./CommentCard.style";
import { deleteComment } from "../../api";

function CommentCard({ comment, setComments }) {
  const { comment_id, body, author, votes } = comment;

  const [isDeleting, setIsDeleting] = useState(false);
  const handleDelete = () => {
    setIsDeleting(true);
    deleteComment(comment_id)
      .then((res) => {
        if (res.status === 204) {
          setComments((currentComments) => {
            const filteredComments = currentComments.filter(
              (currentComment) => {
                return currentComment.comment_id !== comment_id;
              }
            );
            return filteredComments;
          });
          setIsDeleting(false);
        }
      })
      .catch(() => {
        setIsDeleting(true);
      });
  };
  return (
    <section style={styles.commentCard}>
      <p>{body}</p>
      <p>{author}</p>
      <CommentVote comment_id={comment_id} comment_votes={votes} />
      <button onClick={handleDelete} disabled={isDeleting}>
        Delete
      </button>
    </section>
  );
}

export default CommentCard;
