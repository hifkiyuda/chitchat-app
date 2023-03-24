import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CommentsList from '../components/CommentsList';
import ThreadCommentInput from '../components/ThreadCommentInput';
import ThreadDetail from '../components/ThreadDetail';
import {
  asyncReceiveDetailThread, asyncCreateComment, asyncToogleLikeComment, asyncToogleDislikeComment, asyncToogleNeutralizeComment, asyncToogleNeutralizeDetailThread, asyncToogleDislikeDetailThread, asyncToogleLikeDetailThread,
} from '../states/detailThread/action';

function DetailPage() {
  const { id } = useParams();
  const {
    detailThread = null,
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveDetailThread(id));
  }, [id, dispatch]);

  const onCreateComment = (content) => {
    dispatch(asyncCreateComment(detailThread, content));
  };

  const onLikeDetailThread = () => {
    dispatch(asyncToogleLikeDetailThread());
  };

  const onDislikeDetailThread = () => {
    dispatch(asyncToogleDislikeDetailThread());
  };

  const onNeutralizeDetailThread = () => {
    dispatch(asyncToogleNeutralizeDetailThread());
  };

  const onLikeComment = (id) => {
    dispatch(asyncToogleLikeComment(id));
  };

  const onDislikeComment = (id) => {
    dispatch(asyncToogleDislikeComment(id));
  };

  const onNeutralizeComment = (id) => {
    dispatch(asyncToogleNeutralizeComment(id));
  };

  if (!detailThread) {
    return null;
  }

  return (
    <section className="detail-page">
      <ThreadDetail {...detailThread} authUser={authUser.id} like={onLikeDetailThread} dislike={onDislikeDetailThread} neutralize={onNeutralizeDetailThread} />
      <h3>
        Comments (
        {detailThread.comments.length}
        )
      </h3>
      <ThreadCommentInput createComment={onCreateComment} />
      <CommentsList comments={detailThread.comments} authUser={authUser.id} like={onLikeComment} dislike={onDislikeComment} neutralize={onNeutralizeComment} />
    </section>
  );
}

export default DetailPage;
