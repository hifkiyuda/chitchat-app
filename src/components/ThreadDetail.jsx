import React from 'react';
import PropTypes from 'prop-types';
import {
  AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike,
} from 'react-icons/ai';
import parser from 'html-react-parser';
import { postedAt } from '../utils';
import Card from './styled/Card';
import Action from './styled/Action';

function ThreadDetail({
  title, body, category, upVotesBy, downVotesBy, createdAt, owner, authUser, like, dislike, neutralize,
}) {
  const isDetailThreadLiked = upVotesBy.includes(authUser);
  const isDetailThreadDisliked = downVotesBy.includes(authUser);

  const onLikeClick = (event) => {
    event.stopPropagation();
    like();
  };

  const onDislikeClick = (event) => {
    event.stopPropagation();
    dislike();
  };

  const onNeutralize = (event) => {
    event.stopPropagation();
    neutralize();
  };

  return (
    <Card backgroundColor="white" color="black">
      <div className="thread-body">
        <p className="category">{`#${category}`}</p>
        <h2 className="title">{title}</h2>
        <div className="body">{parser(body)}</div>
      </div>
      <div className="thread-action">
        <div className="thread-action-buttons">
          <div className="thread-action-button">
            { isDetailThreadLiked
              ? (
                <Action type="button" aria-label="like" onClick={onNeutralize}>
                  <AiFillLike className="icon" style={{ color: '#5b68fe' }} />
                </Action>
              )
              : (
                <Action type="button" aria-label="like" onClick={onLikeClick}>
                  <AiOutlineLike className="icon" />
                </Action>
              )}
            <p>{upVotesBy.length}</p>
          </div>
          <div className="thread-action-button">
            { isDetailThreadDisliked
              ? (
                <Action type="button" aria-label="like" onClick={onNeutralize}>
                  <AiFillDislike className="icon" style={{ color: '#5b68fe' }} />
                </Action>
              )
              : (
                <Action type="button" aria-label="like" onClick={onDislikeClick}>
                  <AiOutlineDislike className="icon" />
                </Action>
              )}
            <p>{downVotesBy.length}</p>
          </div>
        </div>
        <div className="thread-action-created-and-date">
          <p className="thread-action-date">{postedAt(createdAt)}</p>
          <div className="thread-action-created-detail">
            <p>Created by </p>
            <img src={owner.avatar} alt={owner.name} />
            <strong>{owner.name}</strong>
          </div>
        </div>
      </div>
    </Card>
  );
}

ThreadDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string),
  downVotesBy: PropTypes.arrayOf(PropTypes.string),
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.object.isRequired,
  authUser: PropTypes.string.isRequired,
  like: PropTypes.func,
  dislike: PropTypes.func,
  neutralize: PropTypes.func,
};

export default ThreadDetail;
