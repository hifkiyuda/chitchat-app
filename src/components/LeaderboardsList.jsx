import React from 'react';
import PropTypes from 'prop-types';
import LeaderboardItem from './LeaderboardItem';

function LeaderboardsList({ leaderboards }) {
  return (
    <div className="leaderboards-list">
      {
        leaderboards.map((leaderboard) => (
          <LeaderboardItem key={leaderboard.user.id} {...leaderboard} />
        ))
      }
    </div>
  );
}

LeaderboardsList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LeaderboardsList;
