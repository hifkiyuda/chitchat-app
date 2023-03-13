/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { AiOutlineLike } from 'react-icons/ai';

function LeaderboardItem() {
  return (
    <>
      <div className="leaderboard-item">
        <div className="item-profile">
          <span><AiOutlineLike /></span>
          <h3>Hifki Yuda</h3>
        </div>
        <div className="item-score">80</div>
      </div>
      <div className="leaderboard-item">
        <div className="item-profile">
          <span><AiOutlineLike /></span>
          <h3>Hifki Yuda</h3>
        </div>
        <div className="item-score">80</div>
      </div>
      <div className="leaderboard-item">
        <div className="item-profile">
          <span><AiOutlineLike /></span>
          <h3>Hifki Yuda</h3>
        </div>
        <div className="item-score">80</div>
      </div>
    </>
  );
}

export default LeaderboardItem;
