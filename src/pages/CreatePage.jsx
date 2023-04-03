import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CreateThread from '../components/CreateThread';
import { asyncCreateThread } from '../states/threads/action';

function CreatePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCreateThread = (thread) => {
    dispatch(asyncCreateThread({ thread }));
    navigate('/');
  };

  return (
    <section className="create-page">
      <div className="create-page-body">
        <h2>Create New Thread</h2>
        <p>This is your canvas, create some thread!</p>
        <CreateThread createThread={onCreateThread} />
      </div>
    </section>
  );
}

export default CreatePage;
