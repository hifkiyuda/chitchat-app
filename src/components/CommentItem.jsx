import React from 'react';
import PropTypes from 'prop-types';
import {
  AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike,
} from 'react-icons/ai';
import parser from 'html-react-parser';
import { postedAt } from '../utils';

function CommentItem({
  id, owner, content, upVotesBy, downVotesBy, createdAt, authUser, like, dislike, neutralize,
}) {
  const isCommentLiked = upVotesBy.includes(authUser);
  const isCommentDisliked = downVotesBy.includes(authUser);

  const onLikeClick = (event) => {
    event.stopPropagation();
    if (isCommentLiked) {
      neutralize(id);
    } else {
      like(id);
    }

    if (isCommentDisliked) {
      neutralize(id);
      like(id);
    }
  };

  const onDislikeClick = (event) => {
    event.stopPropagation();
    if (isCommentDisliked) {
      neutralize(id);
    } else {
      dislike(id);
    }

    if (isCommentLiked) {
      neutralize(id);
      dislike(id);
    }
  };

  return (
    <div className="comment-item">
      <div className="comment-profile">
        <img src={owner.avatar} alt={owner.name} />
        <p><strong>{owner.name}</strong></p>
      </div>
      <div className="comment-content">{parser(content)}</div>
      <div className="comment-action">
        <div className="comment-action-button">
          {
            like && (
            <>
              <button type="button" aria-label="like" onClick={onLikeClick}>
                { isCommentLiked ? <AiFillLike className="icon" style={{ color: '#5b68fe' }} /> : <AiOutlineLike className="icon" /> }
              </button>
              <p>{upVotesBy.length}</p>
            </>
            )
          }
        </div>
        <div className="comment-action-button">
          {
            dislike && (
            <>
              <button type="button" aria-label="like" onClick={onDislikeClick}>
                { isCommentDisliked ? <AiFillDislike className="icon" style={{ color: '#5b68fe' }} /> : <AiOutlineDislike className="icon" /> }
              </button>
              <p>{downVotesBy.length}</p>
            </>
            )
          }
        </div>
        <p className="comment-action-date">{postedAt(createdAt)}</p>
      </div>
    </div>
  );
}

CommentItem.propTypes = {
  id: PropTypes.string.isRequired,
  owner: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string),
  downVotesBy: PropTypes.arrayOf(PropTypes.string),
  createdAt: PropTypes.string.isRequired,
  like: PropTypes.func,
  dislike: PropTypes.func,
  neutralize: PropTypes.func,
  authUser: PropTypes.string.isRequired,
};

export default CommentItem;
