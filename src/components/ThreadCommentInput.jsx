import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ThreadCommentInput({ createComment }) {
  const [content, setContent] = useState('');

  const onContentChange = (event) => {
    setContent(event.target.innerHTML);
  };

  const createCommentSumbitHandler = (event) => {
    event.preventDefault();

    createComment(content);
  };

  return (
    <div className="thread-comment-input">
      <div
        value={content}
        onInput={onContentChange}
        className="input-body"
        contentEditable
      />
      <button type="submit" className="comment-button" onClick={createCommentSumbitHandler}>Reply</button>
    </div>
  );
}

ThreadCommentInput.propTypes = {
  createComment: PropTypes.func.isRequired,
};

export default ThreadCommentInput;
