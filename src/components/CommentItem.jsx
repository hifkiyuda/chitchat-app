/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

function CommentItem() {
  return (
    <>
      <div className="comment-item">
        <div className="comment-profile">
          <p><strong>Hifki Y</strong></p>
        </div>
        <p>Bagus!</p>
        <div className="comment-action">
          <div className="comment-action-button">
            <button type="button"><AiOutlineLike /></button>
            <p>4</p>
          </div>
          <div className="comment-action-button">
            <button type="button"><AiOutlineDislike /></button>
            <p>4</p>
          </div>
          <p className="comment-action-date">Few seconds ago</p>
        </div>
      </div>
      <div className="comment-item">
        <div className="comment-profile">
          <p><strong>Hifki Y</strong></p>
        </div>
        <p>Bagus!</p>
        <div className="comment-action">
          <div className="comment-action-button">
            <button type="button"><AiOutlineLike /></button>
            <p>4</p>
          </div>
          <div className="comment-action-button">
            <button type="button"><AiOutlineDislike /></button>
            <p>4</p>
          </div>
          <p className="comment-action-date">Few seconds ago</p>
        </div>
      </div>

    </>
  );
}

export default CommentItem;
