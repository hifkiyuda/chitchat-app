/* eslint-disable no-case-declarations */
/* eslint-disable no-unreachable */
/* eslint-disable max-len */
/* eslint-disable no-fallthrough */
import { ActionType } from './action';

function detailThreadReducer(detailThread = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL_THREAD:
      return action.payload.detailThread;
    case ActionType.CLEAR_DETAIL_THREAD:
      return null;
    case ActionType.CREATE_COMMENT:
      return {
        ...detailThread,
        comments: detailThread.comments.includes(action.payload.threadId) ? detailThread.comments.filter((id) => id !== action.payload.threadId) : [action.payload.threadId].concat(detailThread.comments),
      };
    default:
      return detailThread;
  }
}

export default detailThreadReducer;
