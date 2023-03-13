import React from 'react';
import LeaderboardsList from '../components/LeaderboardsList';

function LeaderboardPage() {
  return (
    <section className="leaderboard-page">
      <div className="leaderboard-page-body">
        <h1>Leaderboard</h1>
        <LeaderboardsList />
      </div>
    </section>
  );
}

export default LeaderboardPage;
