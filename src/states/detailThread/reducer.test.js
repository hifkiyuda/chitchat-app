/**
 * test scenario for detailThreadReducer
 *
 * - detailThreadReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the detail thread when given by RECEIVE_DETAIL_THREAD action
 *  - should return the initial state when given by CLEAR_DETAIL_THREAD action
 *  - should return the detail thread with the new comment when given by CREATE_COMMENT action
 *  - should return the detail thread with the up vote detail thread when given by LIKE_DETAIL_THREAD action
 *  - should return the detail thread with the down vote detail thread when given by DISLIKE_DETAIL_THREAD action
 *  - should return the detail thread with the neutralize detail thread vote when given by NEUTRALIZE_DETAIL_THREAD action
 *  - should return the comments with the up vote comment when given by LIKE_COMMENT action
 *  - should return the comments with the down vote comment when given by DISLIKE_COMMENT action
 *  - should return the comments with the neutralize comment vote when given by NEUTRALIZE_COMMENT action
 *
 */

import detailThreadReducer from './reducer';

const initialStateDefault = {
  id: 'thread-1',
  title: 'Thread Pertama',
  body: 'Ini adalah thread pertama',
  category: 'General',
  createdAt: '2021-06-21T07:00:00.000Z',
  owner: {
    id: 'users-1',
    name: 'John Doe',
    avatar: 'https://generated-image-url.jpg',
  },
  upVotesBy: [],
  downVotesBy: [],
  comments: [
    {
      id: 'comment-1',
      content: 'Ini adalah komentar pertama',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
    },
  ],
};

const initialStateComment = {
  comments: [
    {
      id: 'comment-1',
      content: 'Ini adalah komentar pertama',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
    },
  ],
};

describe('detailThreadReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = null;
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = detailThreadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the detail thread when given by RECEIVE_DETAIL_THREAD action', () => {
    // arrange
    const initialState = null;
    const action = {
      type: 'RECEIVE_DETAIL_THREAD',
      payload: {
        detailThread: {
          id: 'thread-1',
          title: 'Thread Pertama',
          body: 'Ini adalah thread pertama',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
          comments: [
            {
              id: 'comment-1',
              content: 'Ini adalah komentar pertama',
              createdAt: '2021-06-21T07:00:00.000Z',
              owner: {
                id: 'users-1',
                name: 'John Doe',
                avatar: 'https://generated-image-url.jpg',
              },
              upVotesBy: [],
              downVotesBy: [],
            },
          ],
        },
      },
    };

    // action
    const nextState = detailThreadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.detailThread);
  });

  it('should return the initial state when given by CLEAR_DETAIL_THREAD action', () => {
    // arrange
    const initialState = null;
    const action = { type: 'CLEAR_DETAIL_THREAD' };

    // action
    const nextState = detailThreadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the detail thread with the new comment when given by CREATE_COMMENT action', () => {
    // arrange
    const action = {
      type: 'CREATE_COMMENT',
      payload: {
        comment: {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          upVotesBy: [],
          downVotesBy: [],
          owner: {
            id: 'users-1',
            name: 'John Doe',
            email: 'john@example.com',
          },
        },
      },
    };

    // action
    const nextState = detailThreadReducer(initialStateDefault, action);

    // assert
    expect(nextState).toEqual(
      {
        ...initialStateDefault,
        comments: [action.payload.comment, ...initialStateDefault.comments],
      },
    );
  });

  it('should return the detail thread with the up vote detail thread when given by LIKE_DETAIL_THREAD action', () => {
    // arrange
    const action = {
      type: 'LIKE_DETAIL_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'users-1',
      },
    };

    // action
    const nextState = detailThreadReducer(initialStateDefault, action);

    // assert
    expect(nextState).toEqual(
      {
        ...initialStateDefault,
        upVotesBy: [action.payload.userId],
      },
    );
  });

  it('should return the detail thread with the down vote detail thread when given by DISLIKE_DETAIL_THREAD action', () => {
    // arrange
    const action = {
      type: 'DISLIKE_DETAIL_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'users-1',
      },
    };

    // action
    const nextState = detailThreadReducer(initialStateDefault, action);

    // assert
    expect(nextState).toEqual(
      {
        ...initialStateDefault,
        downVotesBy: [action.payload.userId],
      },
    );
  });

  it('should return the detail thread with the neutralize detail thread vote when given by NEUTRALIZE_DETAIL_THREAD action', () => {
    // arrange
    const action = {
      type: 'NEUTRALIZE_DETAIL_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'users-1',
      },
    };

    // action: neutralize like
    const nextStateLike = detailThreadReducer(initialStateDefault, action);

    // assert
    expect(nextStateLike).toEqual(
      {
        ...initialStateDefault,
        upVotesBy: [],
      },
    );

    // action: neutralize dislike
    const nextStateDislike = detailThreadReducer(initialStateDefault, action);

    // assert
    expect(nextStateDislike).toEqual(
      {
        ...initialStateDefault,
        downVotesBy: [],
      },
    );
  });

  it('should return the comments with the up vote comment when given by LIKE_COMMENT action', () => {
    // arrange
    const action = {
      type: 'LIKE_COMMENT',
      payload: {
        commentId: 'comment-1',
        userId: 'users-1',
      },
    };

    // action
    const nextState = detailThreadReducer(initialStateComment, action);

    // assert
    const expectedComment = {
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [action.payload.userId],
          downVotesBy: [],
        },
      ],
    };

    expect(nextState).toEqual(expectedComment);
  });

  it('should return the comments with the down vote comment when given by DISLIKE_COMMENT action', () => {
    // arrange
    const action = {
      type: 'DISLIKE_COMMENT',
      payload: {
        commentId: 'comment-1',
        userId: 'users-1',
      },
    };

    // action
    const nextState = detailThreadReducer(initialStateComment, action);

    // assert
    const expectedComment = {
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [action.payload.userId],
        },
      ],
    };

    expect(nextState).toEqual(expectedComment);
  });

  it('should return the comments with the neutralize comment vote when given by NEUTRALIZE_COMMENT action', () => {
    // arrange
    const action = {
      type: 'NEUTRALIZE_COMMENT',
      payload: {
        commentId: 'comment-1',
        userId: 'users-1',
      },
    };

    // action
    const nextState = detailThreadReducer(initialStateComment, action);

    // assert
    const expectedComment = {
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    expect(nextState).toEqual(expectedComment);
  });
});
