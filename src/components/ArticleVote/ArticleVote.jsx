import React, { useState } from "react";
import upvoteEmpty from "../../assets/upvote-empty.png";
import upvoteFull from "../../assets/upvote-full.png";
import downvoteEmpty from "../../assets/downvote-empty.png";
import downvoteFull from "../../assets/downvote-full.png";
import { style } from "./ArticleVote.style.js";

export default function ArticleVote({ article_id, articleVotes }) {
  const [votes, setVotes] = useState(articleVotes);
  const [voteChange, setVoteChange] = useState(0);

  function handleVote(incVote) {
    const increaseVote = () => {
      if (voteChange !== incVote) {
        setVoteChange(incVote);
      } else {
        setVoteChange(0);
      }
    };
    return increaseVote;
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
