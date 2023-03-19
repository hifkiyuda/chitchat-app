/* eslint-disable react/prop-types */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
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
