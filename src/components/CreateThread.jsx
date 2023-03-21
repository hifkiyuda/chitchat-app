/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import useInput from '../hooks/useInput';

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
        data-placeholder="Fill the thread here"
        value={body}
        onInput={onBodyChange}
        contentEditable
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default CreateThread;
