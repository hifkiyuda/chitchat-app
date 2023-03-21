/* eslint-disable react/prop-types */
import React from 'react';

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

export default LeaderboardItem;
