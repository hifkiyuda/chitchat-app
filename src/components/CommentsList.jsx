import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';

function CommentsList({
  comments, like, dislike, neutralize, authUser,
}) {
  return (
    <div className="comments-list">
      {
        comments.map((comment) => (
          <CommentItem key={comment.id} {...comment} like={like} dislike={dislike} neutralize={neutralize} authUser={authUser} />
        ))
      }
    </div>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  like: PropTypes.func.isRequired,
  dislike: PropTypes.func.isRequired,
  neutralize: PropTypes.func.isRequired,
  authUser: PropTypes.string.isRequired,
};

export default CommentsList;
