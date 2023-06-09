import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CommentsList from '../components/CommentsList';
import ThreadCommentInput from '../components/ThreadCommentInput';
import ThreadDetail from '../components/ThreadDetail';
import {
  asyncReceiveDetailThread, asyncCreateComment, asyncLikeComment, asyncDislikeComment, asyncNeutralizeComment, asyncNeutralizeDetailThread, asyncDislikeDetailThread, asyncLikeDetailThread,
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
    dispatch(asyncLikeDetailThread());
  };

  const onDislikeDetailThread = () => {
    dispatch(asyncDislikeDetailThread());
  };

  const onNeutralizeDetailThread = () => {
    dispatch(asyncNeutralizeDetailThread());
  };

  const onLikeComment = (id) => {
    dispatch(asyncLikeComment(id));
  };

  const onDislikeComment = (id) => {
    dispatch(asyncDislikeComment(id));
  };

  const onNeutralizeComment = (id) => {
    dispatch(asyncNeutralizeComment(id));
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
