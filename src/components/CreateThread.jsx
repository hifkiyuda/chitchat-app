import React from 'react';
import useInput from '../hooks/useInput';

function CreateThread() {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  return (
    <form className="create-thread-form">
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
