/**
 * test scenario for CreateThread
 *
 * - CreateThread component
 *   - should handle title typing correctly
 *   - should handle body typing correctly
 *   - should handle category typing correctly
 *   - should call createThread function when create thread form is submitted
 */

import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateThread from './CreateThread';

import '@testing-library/jest-dom';

describe('CreateThread component', () => {
  it('should handle title typing correctly', async () => {
    // Arrange
    await act(async () => render(<CreateThread createThread={() => {}} />));
    const titleInput = await screen.getByPlaceholderText('Title');

    // Action
    await act(async () => userEvent.type(titleInput, 'title'));

    // Assert
    expect(titleInput).toHaveValue('title');
  });

  it('should handle body typing correctly', async () => {
    // Arrange
    await act(async () => render(<CreateThread createThread={() => {}} />));
    const bodyInput = await screen.getByTestId('Body');

    // Action
    await act(async () => userEvent.type(bodyInput, 'body'));

    // Assert
    expect(bodyInput).toHaveTextContent('body');
  });

  it('should handle category typing correctly', async () => {
    // Arrange
    await act(async () => render(<CreateThread createThread={() => {}} />));
    const categoryInput = await screen.getByPlaceholderText('Category');

    // Action
    await act(async () => userEvent.type(categoryInput, 'category'));

    // Assert
    expect(categoryInput).toHaveValue('category');
  });

  it('should call createThread function when create thread form is submitted', async () => {
    // Arrange
    const mockSubmitThread = jest.fn();
    await act(async () => render(<CreateThread createThread={mockSubmitThread} />));

    const titleInput = await screen.getByPlaceholderText('Title');
    await act(async () => userEvent.type(titleInput, 'title'));

    const bodyInput = await screen.getByTestId('Body');
    await act(async () => userEvent.type(bodyInput, 'body'));

    const categoryInput = await screen.getByPlaceholderText('Category');
    await act(async () => userEvent.type(categoryInput, 'category'));

    const submitButton = await screen.getByRole('button', { name: 'Create' });

    // Action
    await act(async () => userEvent.click(submitButton));

    // Assert
    expect(mockSubmitThread).toBeCalledWith({
      title: 'title',
      body: 'body',
      category: 'category',
    });
  });
});
