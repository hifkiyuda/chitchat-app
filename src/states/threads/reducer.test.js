/**
 * test scenario for threadsReducer
 *
 * - threadsReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the threads when given by RECEIVE_THREADS action
 *  - should return the threads with the new thread when given by CREATE_THREAD action
 *  - should return the threads with the up vote thread when given by LIKE_THREAD action
 *  - should return the threads with the down vote thread when given by DISLIKE_THREAD action
 *  - should return the threads with the neutralize thread vote when given by NEUTRALIZE_THREAD action
 *
 */

import threadsReducer from './reducer';

const initialStateDefault = [
  {
    id: 'thread-1',
    title: 'Thread Pertama',
    body: 'Ini adalah thread pertama',
    category: 'General',
    createdAt: '2021-06-21T07:00:00.000Z',
    ownerId: 'users-1',
    upVotesBy: [],
    downVotesBy: [],
    totalComments: 0,
  },
];

describe('threadsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_THREADS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            id: 'thread-1',
            title: 'Thread Pertama',
            body: 'Ini adalah thread pertama',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-1',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
        ],
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the threads with the new thread when given by CREATE_THREAD action', () => {
    // arrange
    const action = {
      type: 'CREATE_THREAD',
      payload: {
        thread: {
          id: 'thread-2',
          title: 'Thread Kedua',
          body: 'Ini adalah thread kedua',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          ownerId: 'users-2',
          upVotesBy: [],
          downVotesBy: [],
          totalComments: 0,
        },
      },
    };

    // action
    const nextState = threadsReducer(initialStateDefault, action);

    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialStateDefault]);
  });

  it('should return the threads with the toggled like thread when given by LIKE_THREAD action', () => {
    // arrange
    const action = {
      type: 'LIKE_THREAD',
      payload: {
        userId: 'users-1',
        threadId: 'thread-1',
      },
    };

    // action
    const nextState = threadsReducer(initialStateDefault, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialStateDefault[0],
        upVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('should return the threads with the toggled dislike thread when given by DISLIKE_THREAD action', () => {
    // arrange
    const action = {
      type: 'DISLIKE_THREAD',
      payload: {
        userId: 'users-1',
        threadId: 'thread-1',
      },
    };

    // action
    const nextState = threadsReducer(initialStateDefault, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialStateDefault[0],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('should return the threads with the toggled dislike thread when given by NEUTRALIZE_THREAD action', () => {
    // arrange
    const action = {
      type: 'NEUTRALIZE_THREAD',
      payload: {
        userId: 'users-1',
        threadId: 'thread-1',
      },
    };

    // action: neutralize like
    const nextStateLike = threadsReducer(initialStateDefault, action);

    // assert
    expect(nextStateLike).toEqual([
      {
        ...initialStateDefault[0],
        upVotesBy: [],
      },
    ]);

    // action: neutralize dislike
    const nextStateDislike = threadsReducer(initialStateDefault, action);

    // assert
    expect(nextStateDislike).toEqual([
      {
        ...initialStateDefault[0],
        downVotesBy: [],
      },
    ]);
  });
});
