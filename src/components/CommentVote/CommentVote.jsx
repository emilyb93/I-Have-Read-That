import React, { useState } from "react";
import { patchCommentVotes } from "../../api";
import upvoteEmpty from "../../assets/upvote-empty.png";
import upvoteFull from "../../assets/upvote-full.png";
import downvoteEmpty from "../../assets/downvote-empty.png";
import downvoteFull from "../../assets/downvote-full.png";
import { style } from "./CommentVote.style";

function CommentVote({ comment_id, comment_votes }) {
  const [votes] = useState(comment_votes);
  const [voteChange, setVoteChange] = useState(0);

  function handleVote(incVote) {
    const oppositeVoteValue = incVote > 0 ? -1 : 1;
    const changeVote = () => {
      // This allow the user to only either add or remove a single vote in either direction
      if (voteChange !== incVote) {
        setVoteChange(incVote);
        patchCommentVotes(comment_id, incVote).catch(() => {
          setVoteChange(0);
        });
      } else {
        setVoteChange(0);
        patchCommentVotes(comment_id, oppositeVoteValue).catch(() => {
          setVoteChange(0);
        });
      }
    };

    return changeVote;
  }

  return (
    <>
      <button style={style.upvote} onClick={handleVote(1)}>
        <img
          src={voteChange > 0 ? upvoteFull : upvoteEmpty}
          style={style.upvote}
          alt="up vote"
        />
      </button>
      <button style={style.downvote} onClick={handleVote(-1)}>
        <img
          src={voteChange < 0 ? downvoteFull : downvoteEmpty}
          style={style.downvote}
          alt="down vote"
        />
      </button>
      <p>{votes + voteChange}</p>
    </>
  );
}

export default CommentVote;
