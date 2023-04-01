import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_DETAIL_THREAD: 'RECEIVE_DETAIL_THREAD',
  CLEAR_DETAIL_THREAD: 'CLEAR_DETAIL_THREAD',
  CREATE_COMMENT: 'CREATE_COMMENT',
  LIKE_DETAIL_THREAD: 'LIKE_DETAIL_THREAD',
  DISLIKE_DETAIL_THREAD: 'DISLIKE_DETAIL_THREAD',
  NEUTRALIZE_DETAIL_THREAD: 'NEUTRALIZE_DETAIL_THREAD',
  LIKE_COMMENT: 'LIKE_COMMENT',
  DISLIKE_COMMENT: 'DISLIKE_COMMENT',
  NEUTRALIZE_COMMENT: 'NEUTRALIZE_COMMENT',
};

function receiveDetailThreadActionCreator(detailThread) {
  return {
    type: ActionType.RECEIVE_DETAIL_THREAD,
    payload: {
      detailThread,
    },
  };
}

function clearDetailThreadActionCreator() {
  return {
    type: ActionType.CLEAR_DETAIL_THREAD,
  };
}

function createCommentActionCreator(comment) {
  return {
    type: ActionType.CREATE_COMMENT,
    payload: {
      comment,
    },
  };
}

function likeDetailThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.LIKE_DETAIL_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function dislikeDetailThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.DISLIKE_DETAIL_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function neutralizeDetailThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.NEUTRALIZE_DETAIL_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function likeCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.LIKE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function dislikeCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.DISLIKE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function neutralizeCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.NEUTRALIZE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function asyncReceiveDetailThread(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const detailThread = await api.getDetailThread(threadId);
      dispatch(receiveDetailThreadActionCreator(detailThread));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncCreateComment(threadId, content) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const comment = await api.createComment(threadId.id, content);
      dispatch(createCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncLikeDetailThread() {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(neutralizeDetailThreadActionCreator({ threadId: detailThread.id, userId: authUser.id }));
    dispatch(likeDetailThreadActionCreator({ threadId: detailThread.id, userId: authUser.id }));

    try {
      await api.likeThread(detailThread.id);
    } catch (error) {
      alert(error.message);
      dispatch(likeDetailThreadActionCreator({ threadId: detailThread.id, userId: authUser.id }));
    }
  };
}

function asyncDislikeDetailThread() {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(neutralizeDetailThreadActionCreator({ threadId: detailThread.id, userId: authUser.id }));
    dispatch(dislikeDetailThreadActionCreator({ threadId: detailThread.id, userId: authUser.id }));

    try {
      await api.dislikeThread(detailThread.id);
    } catch (error) {
      alert(error.message);
      dispatch(dislikeDetailThreadActionCreator({ threadId: detailThread.id, userId: authUser.id }));
    }
  };
}

function asyncNeutralizeDetailThread() {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(neutralizeDetailThreadActionCreator({ threadId: detailThread.id, userId: authUser.id }));

    try {
      await api.neutralizeThread(detailThread.id);
    } catch (error) {
      alert(error.message);
      dispatch(neutralizeDetailThreadActionCreator({ threadId: detailThread.id, userId: authUser.id }));
    }
  };
}

function asyncLikeComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(neutralizeCommentActionCreator({ commentId, userId: authUser.id }));
    dispatch(likeCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await api.likeComment(detailThread.id, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(likeCommentActionCreator({ commentId, userId: authUser.id }));
    }
  };
}

function asyncDislikeComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(neutralizeCommentActionCreator({ commentId, userId: authUser.id }));
    dispatch(dislikeCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await api.dislikeComment(detailThread.id, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(likeCommentActionCreator({ commentId, userId: authUser.id }));
    }
  };
}

function asyncNeutralizeComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(neutralizeCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await api.neutralizeComment(detailThread.id, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(neutralizeCommentActionCreator({ commentId, userId: authUser.id }));
    }
  };
}

export {
  ActionType,
  receiveDetailThreadActionCreator,
  createCommentActionCreator,
  clearDetailThreadActionCreator,
  asyncReceiveDetailThread,
  asyncCreateComment,
  likeDetailThreadActionCreator,
  dislikeDetailThreadActionCreator,
  neutralizeDetailThreadActionCreator,
  asyncLikeDetailThread,
  asyncDislikeDetailThread,
  asyncNeutralizeDetailThread,
  likeCommentActionCreator,
  dislikeCommentActionCreator,
  neutralizeCommentActionCreator,
  asyncLikeComment,
  asyncDislikeComment,
  asyncNeutralizeComment,
};
