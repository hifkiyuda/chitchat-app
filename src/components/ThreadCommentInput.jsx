import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './styled/Button';

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
      <Button type="button" backgroundColor="lightBlue" color="white" hoverBackgroundColor="darkBlue" onClick={() => createComment(content)}>Reply</Button>
    </div>
  );
}

ThreadCommentInput.propTypes = {
  createComment: PropTypes.func.isRequired,
};

export default ThreadCommentInput;
