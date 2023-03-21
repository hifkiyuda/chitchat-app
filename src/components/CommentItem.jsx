/* eslint-disable react/prop-types */
import React from 'react';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import parser from 'html-react-parser';
import { postedAt } from '../utils';

function CommentItem({
  owner, content, upVotesBy, downVotesBy, createdAt,
}) {
  return (
    <div className="comment-item">
      <div className="comment-profile">
        <img src={owner.avatar} alt={owner.name} />
        <p><strong>{owner.name}</strong></p>
      </div>
      <div className="comment-content">{parser(content)}</div>
      <div className="comment-action">
        <div className="comment-action-button">
          <button type="button"><AiOutlineLike className="icon" /></button>
          <p>{upVotesBy.length}</p>
        </div>
        <div className="comment-action-button">
          <button type="button"><AiOutlineDislike className="icon" /></button>
          <p>{downVotesBy.length}</p>
        </div>
        <p className="comment-action-date">{postedAt(createdAt)}</p>
      </div>
    </div>
  );
}

export default CommentItem;
