import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  CREATE_THREAD: 'CREATE_THREAD',
  LIKE_THREAD: 'LIKE_THREAD',
  DISLIKE_THREAD: 'DISLIKE_THREAD',
  NEUTRALIZE_THREAD: 'NEUTRALIZE_THREAD',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function createThreadActionCreator(thread) {
  return {
    type: ActionType.CREATE_THREAD,
    payload: {
      thread,
    },
  };
}

function likeThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.LIKE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function dislikeThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.DISLIKE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function neutralizeThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.NEUTRALIZE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncCreateThread({ thread }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const createThread = await api.createThread({ ...thread });
      dispatch(createThreadActionCreator(createThread));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncLikeThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(neutralizeThreadActionCreator({ threadId, userId: authUser.id }));
    dispatch(likeThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.likeThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(likeThreadActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

function asyncDislikeThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(neutralizeThreadActionCreator({ threadId, userId: authUser.id }));
    dispatch(dislikeThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.dislikeThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(dislikeThreadActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

function asyncNeutralizeThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(neutralizeThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.neutralizeThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(neutralizeThreadActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  createThreadActionCreator,
  asyncCreateThread,
  likeThreadActionCreator,
  asyncLikeThread,
  dislikeThreadActionCreator,
  asyncDislikeThread,
  neutralizeThreadActionCreator,
  asyncNeutralizeThread,
};
