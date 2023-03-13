/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';

function ThreadDetail() {
  return (
    <div className="thread-detail">
      <div className="thread-body">
        <p className="category">#Technology</p>
        <h2 className="title">Redux</h2>
        <p className="body">Belajar mengenai redux</p>
      </div>
      <div className="thread-action">
        <div className="thread-action-button">
          <button type="button"><AiOutlineLike /></button>
          <p>4</p>
        </div>
        <div className="thread-action-button">
          <button type="button"><AiOutlineDislike /></button>
          <p>4</p>
        </div>
        <div className="thread-action-button">
          <button type="button"><BiCommentDetail /></button>
          <p>4</p>
        </div>
        <p className="thread-action-date">3 Months ago</p>
        <p className="thread-action-created">
          Created by
          {' '}
          <strong>Hifki Yuda</strong>
        </p>
      </div>
    </div>
  );
}

export default ThreadDetail;
