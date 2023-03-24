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
        comments: detailThread.comments.includes(action.payload.threadId) ? detailThread.comments.filter((id) => id !== action.payload.threadId) : detailThread.comments.concat([action.payload.threadId]),
      };
    case ActionType.TOGGLE_LIKE_DETAIL_THREAD:
      if (detailThread.id === action.payload.threadId) {
        return {
          ...detailThread,
          upVotesBy: detailThread.upVotesBy.includes(action.payload.userId)
            ? detailThread.upVotesBy.filter((id) => id !== action.payload.userId)
            : detailThread.upVotesBy.concat([action.payload.userId]),
        };
      }
      return detailThread;
    case ActionType.TOGGLE_DISLIKE_DETAIL_THREAD:
      if (detailThread.id === action.payload.threadId) {
        return {
          ...detailThread,
          downVotesBy: detailThread.downVotesBy.includes(action.payload.userId)
            ? detailThread.downVotesBy.filter((id) => id !== action.payload.userId)
            : detailThread.downVotesBy.concat([action.payload.userId]),
        };
      }
      return detailThread;
    case ActionType.TOGGLE_NEUTRALIZE_DETAIL_THREAD:
      return {
        ...detailThread,
        upVotesBy: detailThread.upVotesBy.includes(action.payload.userId) ? detailThread.upVotesBy.filter((id) => id !== action.payload.userId) : detailThread.upVotesBy,
        downVotesBy: detailThread.downVotesBy.includes(action.payload.userId) ? detailThread.downVotesBy.filter((id) => id !== action.payload.userId) : detailThread.downVotesBy,
      };
    case ActionType.TOGGLE_LIKE_COMMENT:
      return {
        ...detailThread,
        comments: detailThread.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.includes(action.payload.userId) ? comment.upVotesBy.filter((id) => id !== action.payload.userId) : comment.upVotesBy.concat([action.payload.userId]),
            };
          }
          return comment;
        }),
      };
    case ActionType.TOGGLE_DISLIKE_COMMENT:
      return {
        ...detailThread,
        comments: detailThread.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              downVotesBy: comment.downVotesBy.includes(action.payload.userId) ? comment.downVotesBy.filter((id) => id !== action.payload.userId) : comment.downVotesBy.concat([action.payload.userId]),
            };
          }
          return comment;
        }),
      };
    case ActionType.TOGGLE_NEUTRALIZE_COMMENT:
      return {
        ...detailThread,
        comments: detailThread.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.includes(action.payload.userId) ? comment.upVotesBy.filter((id) => id !== action.payload.userId) : comment.upVotesBy,
              downVotesBy: comment.downVotesBy.includes(action.payload.userId) ? comment.downVotesBy.filter((id) => id !== action.payload.userId) : comment.downVotesBy,
            };
          }
          return comment;
        }),
      };
    default:
      return detailThread;
  }
}

export default detailThreadReducer;
