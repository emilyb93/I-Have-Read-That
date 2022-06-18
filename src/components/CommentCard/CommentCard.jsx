import React, { useEffect, useState } from "react";
import CommentVote from "../CommentVote/CommentVote";
import { styles } from "./CommentCard.style";
import { deleteComment } from "../../api";

function CommentCard(comment) {
  const { comment_id, body, author, votes } = comment;

  const [isDeleting, setIsDeleting] = useState(false);

  const [deleted, setDeleted] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);

    deleteComment(comment_id)
      .then((res) => {
        if (res.status === 204) {
          setIsDeleting(false);
          setDeleted(true);
        }
      })
      .catch(() => {
        setIsDeleting(true);
      });
  };
  return (
    <section style={styles.commentCard}>
      {deleted ? (
        <p>Comment deleted by user · just now</p>
      ) : (
        <>
          <p>{body}</p>
          <p>{author}</p>
          <CommentVote comment_id={comment_id} comment_votes={votes} />
          <button onClick={handleDelete} disabled={isDeleting}>
            Delete
          </button>
        </>
      )}
    </section>
  );
}

export default CommentCard;
