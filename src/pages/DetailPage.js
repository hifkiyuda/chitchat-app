/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CommentsList from '../components/CommentsList';
import ThreadCommentInput from '../components/ThreadCommentInput';
import ThreadDetail from '../components/ThreadDetail';
import { asyncReceiveDetailThread, asyncCreateComment } from '../states/detailThread/action';

function DetailPage() {
  const { id } = useParams();
  const {
    detailThread = null,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveDetailThread(id));
  }, [id, dispatch]);

  const onCreateComment = (content) => {
    dispatch(asyncCreateComment(detailThread, content));
  };

  if (!detailThread) {
    return null;
  }

  return (
    <section className="detail-page">
      <ThreadDetail {...detailThread} />
      <h3>
        Comments (
        {detailThread.comments.length}
        )
      </h3>
      <ThreadCommentInput createComment={onCreateComment} />
      <CommentsList comments={detailThread.comments} />
    </section>
  );
}

export default DetailPage;
