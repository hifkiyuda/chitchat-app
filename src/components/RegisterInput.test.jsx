/**
 * test scenario for RegisterInput
 *
 * - RegisterInput component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterInput from './RegisterInput';

import '@testing-library/jest-dom';

describe('RegisterInput component', () => {
  it('should handle name typing correctly', async () => {
    // Arrange
    await act(async () => render(<RegisterInput register={() => {}} />));
    const nameInput = await screen.getByPlaceholderText('Name');

    // Action
    await act(async () => userEvent.type(nameInput, 'test'));

    // Assert
    expect(nameInput).toHaveValue('test');
  });

  it('should handle email typing correctly', async () => {
    // Arrange
    await act(async () => render(<RegisterInput register={() => {}} />));
    const emailInput = await screen.getByPlaceholderText('Email');

    // Action
    await act(async () => userEvent.type(emailInput, 'test@mail.com'));

    // Assert
    expect(emailInput).toHaveValue('test@mail.com');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    await act(async () => render(<RegisterInput register={() => {}} />));
    const passwordInput = await screen.getByPlaceholderText('Password');

    // Action
    await act(async () => userEvent.type(passwordInput, 'passwordtest'));

    // Assert
    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call register function when register button is clicked', async () => {
    // Arrange
    const mockRegister = jest.fn();
    await act(async () => render(<RegisterInput register={mockRegister} />));

    const nameInput = await screen.getByPlaceholderText('Name');
    await act(async () => userEvent.type(nameInput, 'test'));

    const emailInput = await screen.getByPlaceholderText('Email');
    await act(async () => userEvent.type(emailInput, 'test@mail.com'));

    const passwordInput = await screen.getByPlaceholderText('Password');
    await act(async () => userEvent.type(passwordInput, 'passwordtest'));

    const registerButton = await screen.getByRole('button', { name: 'Register' });

    // Action
    await act(async () => userEvent.click(registerButton));

    // Assert
    expect(mockRegister).toBeCalledWith({
      name: 'test',
      email: 'test@mail.com',
      password: 'passwordtest',
    });
  });
});
