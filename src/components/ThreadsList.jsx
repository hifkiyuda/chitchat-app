import React from 'react';
import ThreadItem from './ThreadItem';

function ThreadsList() {
  return (
    <div className="threads-list">
      <h1>Threads</h1>
      <ThreadItem />
    </div>
  );
}

export default ThreadsList;
