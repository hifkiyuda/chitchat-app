import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ThreadCommentInput({ createComment }) {
  const [content, setContent] = useState('');

  const onContentChange = (event) => {
    setContent(event.target.innerHTML);
  };

  return (
    <div className="thread-comment-input">
      <div
        data-testid="Comment"
        value={content}
        onInput={onContentChange}
        className="input-body"
        contentEditable
      />
      <button type="button" className="comment-button" onClick={() => createComment(content)}>Reply</button>
    </div>
  );
}

ThreadCommentInput.propTypes = {
  createComment: PropTypes.func.isRequired,
};

export default ThreadCommentInput;
