/**
 * test scenario for LoginInput
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginInput from './LoginInput';

import '@testing-library/jest-dom';

describe('LoginInput component', () => {
  it('should handle email typing correctly', async () => {
    // Arrange
    await act(async () => render(<LoginInput login={() => {}} />));
    const emailInput = await screen.getByPlaceholderText('Email');

    // Action
    await act(async () => userEvent.type(emailInput, 'test@mail.com'));

    // Assert
    expect(emailInput).toHaveValue('test@mail.com');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    await act(async () => render(<LoginInput login={() => {}} />));
    const passwordInput = await screen.getByPlaceholderText('Password');

    // Action
    await act(async () => userEvent.type(passwordInput, 'passwordtest'));

    // Assert
    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call login function when login button is clicked', async () => {
    // Arrange
    const mockLogin = jest.fn();
    await act(async () => render(<LoginInput login={mockLogin} />));

    const emailInput = await screen.getByPlaceholderText('Email');
    await act(async () => userEvent.type(emailInput, 'test@mail.com'));

    const passwordInput = await screen.getByPlaceholderText('Password');
    await act(async () => userEvent.type(passwordInput, 'passwordtest'));

    const loginButton = await screen.getByRole('button', { name: 'Login' });

    // Action
    await act(async () => userEvent.click(loginButton));

    // Assert
    expect(mockLogin).toBeCalledWith({
      email: 'test@mail.com',
      password: 'passwordtest',
    });
  });
});
