import React, { useState } from "react";
import upvoteEmpty from "../../assets/upvote-empty.png";
import upvotefull from "../../assets/upvote-full.png";
import downvoteEmpty from "../../assets/downvote-empty.png";
import downvoteFull from "../../assets/downvote-full.png";
import { style } from "./ArticleVote.style.js";

export default function ArticleVote({ article_id, articleVotes }) {
  const [votes, setVotes] = useState(articleVotes);
  const [voteChange, setVoteChange] = useState(0);

  return (
    <>
      <button>
        <img src={upvoteEmpty} style={style.upvote} alt="up vote" />
      </button>
      <button>
        <img src={downvoteEmpty} style={style.downvote} alt="down vote" />
      </button>
      <p>{votes}</p>
    </>
  );
}
