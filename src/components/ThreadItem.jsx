/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import parser from 'html-react-parser';
import { postedAt } from '../utils';

function ThreadItem({
  id, title, body, category, upVotesBy, downVotesBy, createdAt, totalComments, user,
}) {
  return (
    <div className="thread-item">
      <div className="thread-body">
        <p className="category">{`#${category}`}</p>
        <h2 className="title"><Link to={`/threads/${id}`}>{title}</Link></h2>
        <div className="body body-item">{parser(body)}</div>
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
        <div className="thread-action-button">
          <button type="button"><BiCommentDetail /></button>
          <p>{totalComments}</p>
        </div>
        <p className="thread-action-date">{postedAt(createdAt)}</p>
        <p className="thread-action-created">
          Created by
          {' '}
          <strong>{user.name}</strong>
        </p>
      </div>
    </div>
  );
}

export default ThreadItem;
