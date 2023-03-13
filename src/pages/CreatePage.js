import React from 'react';
import CreateThread from '../components/CreateThread';

function CreatePage() {
  return (
    <section className="create-page">
      <div className="create-page-body">
        <h1>Create New Thread</h1>
        <p>This is your canvas, create some thread!</p>
        <CreateThread />
      </div>
    </section>
  );
}

export default CreatePage;
