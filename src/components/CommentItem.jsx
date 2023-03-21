import React from 'react';
import PropTypes from 'prop-types';
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

CommentItem.propTypes = {
  owner: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string),
  downVotesBy: PropTypes.arrayOf(PropTypes.string),
  createdAt: PropTypes.string.isRequired,
};

export default CommentItem;
