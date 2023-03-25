import React from 'react';
import PropTypes from 'prop-types';
import {
  AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike,
} from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import parser from 'html-react-parser';
import { postedAt } from '../utils';

function ThreadItem({
  id, title, body, category, upVotesBy, downVotesBy, createdAt, totalComments, user, authUser, like, dislike, neutralize,
}) {
  const isThreadLiked = upVotesBy.includes(authUser);
  const isThreadDisliked = downVotesBy.includes(authUser);

  const onLikeClick = (event) => {
    event.stopPropagation();
    like(id);
  };

  const onDislikeClick = (event) => {
    event.stopPropagation();
    dislike(id);
  };

  const onNeutralize = (event) => {
    event.stopPropagation();
    neutralize(id);
  };

  return (
    <div className="thread-item">
      <div className="thread-body">
        <p className="category">{`#${category}`}</p>
        <h2 className="title"><Link className="detail-link" to={`/threads/${id}`}>{title}</Link></h2>
        <div className="body body-item">{parser(body)}</div>
      </div>
      <div className="thread-action">
        <div className="thread-action-buttons">
          <div className="thread-action-button">
            { isThreadLiked
              ? (
                <button type="button" aria-label="like" onClick={onNeutralize}>
                  <AiFillLike className="icon" style={{ color: '#5b68fe' }} />
                </button>
              )
              : (
                <button type="button" aria-label="like" onClick={onLikeClick}>
                  <AiOutlineLike className="icon" />
                </button>
              )}
            <p>{upVotesBy.length}</p>
          </div>
          <div className="thread-action-button">
            { isThreadDisliked
              ? (
                <button type="button" aria-label="like" onClick={onNeutralize}>
                  <AiFillDislike className="icon" style={{ color: '#5b68fe' }} />
                </button>
              )
              : (
                <button type="button" aria-label="like" onClick={onDislikeClick}>
                  <AiOutlineDislike className="icon" />
                </button>
              )}
            <p>{downVotesBy.length}</p>
          </div>
          <div className="thread-action-button">
            <button type="button"><Link to={`/threads/${id}`}><BiCommentDetail className="icon" /></Link></button>
            <p>{totalComments}</p>
          </div>
        </div>
        <div className="thread-action-created-and-date">
          <p className="thread-action-date">{postedAt(createdAt)}</p>
          <p className="thread-action-created">
            Created by
            {' '}
            <strong>{user.name}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

ThreadItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string),
  downVotesBy: PropTypes.arrayOf(PropTypes.string),
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
  authUser: PropTypes.string.isRequired,
  like: PropTypes.func,
  dislike: PropTypes.func,
  neutralize: PropTypes.func,
};

export default ThreadItem;
