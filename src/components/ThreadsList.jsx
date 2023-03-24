import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';

function ThreadsList({
  threads, like, dislike, neutralize,
}) {
  return (
    <div className="threads-list">
      {
        threads.map((thread) => (
          <ThreadItem key={thread.id} {...thread} like={like} dislike={dislike} neutralize={neutralize} />
        ))
      }
    </div>
  );
}

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.object).isRequired,
  like: PropTypes.func.isRequired,
  dislike: PropTypes.func.isRequired,
  neutralize: PropTypes.func.isRequired,
};

export default ThreadsList;
