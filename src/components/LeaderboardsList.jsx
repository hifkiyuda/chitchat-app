/* eslint-disable react/prop-types */
import React from 'react';
import LeaderboardItem from './LeaderboardItem';

function LeaderboardsList({ leaderboards }) {
  console.log(leaderboards);
  return (
    <div className="leaderboards-list">
      {
        leaderboards.map((leaderboard) => (
          <LeaderboardItem key={leaderboard.id} {...leaderboard} />
        ))
      }
    </div>
  );
}

export default LeaderboardsList;
