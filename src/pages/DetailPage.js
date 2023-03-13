import React from 'react';
import CommentsList from '../components/CommentsList';
import ThreadCommentInput from '../components/ThreadCommentInput';
import ThreadDetail from '../components/ThreadDetail';

function DetailPage() {
  return (
    <section className="detail-page">
      <ThreadDetail />
      <h3>Comment (2)</h3>
      <ThreadCommentInput />
      <CommentsList />
    </section>
  );
}

export default DetailPage;
