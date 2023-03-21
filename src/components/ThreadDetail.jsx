/* eslint-disable react/prop-types */
import React from 'react';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import parser from 'html-react-parser';
import { postedAt } from '../utils';

function ThreadDetail({
  title, body, category, upVotesBy, downVotesBy, createdAt, owner,
}) {
  return (
    <div className="thread-detail">
      <div className="thread-body">
        <p className="category">{`#${category}`}</p>
        <h2 className="title">{title}</h2>
        <div className="body">{parser(body)}</div>
      </div>
      <div className="thread-action">
        <div className="thread-action-button">
          <button type="button"><AiOutlineLike className="icon" /></button>
          <p>{upVotesBy.length}</p>
        </div>
        <div className="thread-action-button">
          <button type="button"><AiOutlineDislike className="icon" /></button>
          <p>{downVotesBy.length}</p>
        </div>
        <p className="thread-action-date">{postedAt(createdAt)}</p>
        <div className="thread-action-created-detail">
          <p>Created by </p>
          <img src={owner.avatar} alt={owner.name} />
          <strong>{owner.name}</strong>
        </div>
      </div>
    </div>
  );
}

export default ThreadDetail;
