/**
 * test scenario for ThreadCommentInput
 *
 * - ThreadCommentInput component
 *   - should handle comment typing correctly
 *   - should call createComment function when reply button is clicked
 */

import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThreadCommentInput from './ThreadCommentInput';

import '@testing-library/jest-dom';

describe('ThreadCommentInput component', () => {
  it('should handle comment typing correctly', async () => {
    // Arrange
    await act(async () => render(<ThreadCommentInput createComment={() => {}} />));
    const commentInput = await screen.getByTestId('Comment');

    // Action
    await act(async () => userEvent.type(commentInput, 'comment'));

    // Assert
    expect(commentInput).toHaveTextContent('comment');
  });

  it('should call createComment function when reply button is clicked', async () => {
    // Arrange
    const mockCreateComment = jest.fn();
    await act(async () => render(<ThreadCommentInput createComment={mockCreateComment} />));

    const commentInput = await screen.getByTestId('Comment');
    await act(async () => userEvent.type(commentInput, 'comment'));

    const replyButton = await screen.getByRole('button', { name: 'Reply' });

    // Action
    await act(async () => userEvent.click(replyButton));

    // Assert
    expect(mockCreateComment).toBeCalledWith('comment');
  });
});
