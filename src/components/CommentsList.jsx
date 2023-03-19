/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import CommentItem from './CommentItem';

function CommentsList({ comments }) {
  return (
    <div className="comments-list">
      {
        comments.map((comment) => (
          <CommentItem key={comment.id} {...comment} />
        ))
      }
    </div>
  );
}

export default CommentsList;
