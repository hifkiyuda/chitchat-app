import React from 'react';

function ThreadCommentInput() {
  return (
    <div className="thread-comment-input">
      <div
        className="input-body"
        contentEditable
      />
      <button type="submit" className="comment-button">Reply</button>
    </div>
  );
}

export default ThreadCommentInput;
