import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import Button from './styled/Button';

function CreateThread({ createThread }) {
  const [title, onTitleChange] = useInput('');
  const [body, setBody] = useState('');
  const [category, onCategoryChange] = useInput('');

  const onBodyChange = (event) => {
    setBody(event.target.innerHTML);
  };

  const createThreadSumbitHandler = (event) => {
    event.preventDefault();

    createThread({
      title,
      body,
      category,
    });
  };

  return (
    <form className="create-thread-form" onSubmit={createThreadSumbitHandler}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={onTitleChange}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={onCategoryChange}
        required
      />
      <div
        className="input-body"
        data-testid="Body"
        data-placeholder="Fill the thread here"
        value={body}
        onInput={onBodyChange}
        contentEditable
      />
      <Button type="submit" backgroundColor="lightBlue" color="white" hoverBackgroundColor="darkBlue">Create</Button>
    </form>
  );
}

CreateThread.propTypes = {
  createThread: PropTypes.func.isRequired,
};

export default CreateThread;
