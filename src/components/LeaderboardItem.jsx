import React from 'react';
import PropTypes from 'prop-types';

function LeaderboardItem({ user, score }) {
  return (
    <div className="leaderboard-item">
      <div className="item-profile">
        <img className="avatar" src={user.avatar} alt={user.name} />
        <h3>{user.name}</h3>
      </div>
      <div className="item-score">{score}</div>
    </div>
  );
}

LeaderboardItem.propTypes = {
  user: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired,
};

export default LeaderboardItem;
