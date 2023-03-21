/* eslint-disable react/prop-types */
import React from 'react';
import ThreadItem from './ThreadItem';

function ThreadsList({ threads }) {
  return (
    <div className="threads-list">
      {
        threads.map((thread) => (
          <ThreadItem key={thread.id} {...thread} />
        ))
      }
    </div>
  );
}

export default ThreadsList;
