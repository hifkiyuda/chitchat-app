import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_DETAIL_THREAD: 'RECEIVE_DETAIL_THREAD',
  CLEAR_DETAIL_THREAD: 'CLEAR_DETAIL_THREAD',
  CREATE_COMMENT: 'CREATE_COMMENT',
  TOGGLE_LIKE_DETAIL_THREAD: 'TOGGLE_LIKE_DETAIL_THREAD',
  TOGGLE_DISLIKE_DETAIL_THREAD: 'TOGGLE_DISLIKE_DETAIL_THREAD',
  TOGGLE_NEUTRALIZE_DETAIL_THREAD: 'TOGGLE_NEUTRALIZE_DETAIL_THREAD',
  TOGGLE_LIKE_COMMENT: 'TOGGLE_LIKE_COMMENT',
  TOGGLE_DISLIKE_COMMENT: 'TOGGLE_DISLIKE_COMMENT',
  TOGGLE_NEUTRALIZE_COMMENT: 'TOGGLE_NEUTRALIZE_COMMENT',
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

function createCommentActionCreator(threadId, content) {
  return {
    type: ActionType.CREATE_COMMENT,
    payload: {
      threadId,
      content,
    },
  };
}

function toggleLikeDetailThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_LIKE_DETAIL_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleDislikeDetailThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_DISLIKE_DETAIL_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleNeutralizeDetailThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRALIZE_DETAIL_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleLikeCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.TOGGLE_LIKE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function toggleDislikeCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.TOGGLE_DISLIKE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function toggleNeutralizeCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRALIZE_COMMENT,
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

function asyncToogleLikeDetailThread() {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(toggleLikeDetailThreadActionCreator({ threadId: detailThread.id, userId: authUser.id }));

    try {
      await api.toggleLikeThread(detailThread.id);
    } catch (error) {
      alert(error.message);
      dispatch(toggleLikeDetailThreadActionCreator({ threadId: detailThread.id, userId: authUser.id }));
    }
  };
}

function asyncToogleDislikeDetailThread() {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(toggleDislikeDetailThreadActionCreator({ threadId: detailThread.id, userId: authUser.id }));

    try {
      await api.toggleDislikeThread(detailThread.id);
    } catch (error) {
      alert(error.message);
      dispatch(toggleDislikeDetailThreadActionCreator({ threadId: detailThread.id, userId: authUser.id }));
    }
  };
}

function asyncToogleNeutralizeDetailThread() {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(toggleNeutralizeDetailThreadActionCreator({ threadId: detailThread.id, userId: authUser.id }));

    try {
      await api.toggleNeutralizeThread(detailThread.id);
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralizeDetailThreadActionCreator({ threadId: detailThread.id, userId: authUser.id }));
    }
  };
}

function asyncToogleLikeComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(toggleLikeCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await api.toggleLikeComment(detailThread.id, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleLikeCommentActionCreator({ commentId, userId: authUser.id }));
    }
  };
}

function asyncToogleDislikeComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(toggleDislikeCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await api.toggleDislikeComment(detailThread.id, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleLikeCommentActionCreator({ commentId, userId: authUser.id }));
    }
  };
}

function asyncToogleNeutralizeComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(toggleNeutralizeCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await api.toggleNeutralizeComment(detailThread.id, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralizeCommentActionCreator({ commentId, userId: authUser.id }));
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
  toggleLikeDetailThreadActionCreator,
  toggleDislikeDetailThreadActionCreator,
  toggleNeutralizeDetailThreadActionCreator,
  asyncToogleLikeDetailThread,
  asyncToogleDislikeDetailThread,
  asyncToogleNeutralizeDetailThread,
  toggleLikeCommentActionCreator,
  toggleDislikeCommentActionCreator,
  toggleNeutralizeCommentActionCreator,
  asyncToogleLikeComment,
  asyncToogleDislikeComment,
  asyncToogleNeutralizeComment,
};
