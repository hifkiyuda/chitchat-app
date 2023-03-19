/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
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
          <button type="button"><AiOutlineLike /></button>
          <p>{upVotesBy.length}</p>
        </div>
        <div className="thread-action-button">
          <button type="button"><AiOutlineDislike /></button>
          <p>{downVotesBy.length}</p>
        </div>
        <p className="thread-action-date">{postedAt(createdAt)}</p>
        <p className="thread-action-created">
          Created by
          {' '}
          <strong>{owner.name}</strong>
        </p>
      </div>
    </div>
  );
}

export default ThreadDetail;
