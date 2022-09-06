import React from 'react';
import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import Login from '../pages/Login';

describe('Tela de Login', () => {
  it('renderiza titulo na tela', () => {
    renderWithRouter(<Login />);
    const title = screen.getByText('Entre com sua conta');

    expect(title).toBeInTheDocument();
  });

  it('renderiza inputs na tela de login', async () => {
    renderWithRouter(<Login />);

    const inputEmail = screen.getByPlaceholderText('Endereço de e-mail');
    const inputPassword = screen.getByPlaceholderText('Senha');
    expect(inputEmail).toHaveValue('');
    expect(inputEmail).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      userEvent.type(inputEmail, 'ichigo@gmail.com');
    });
    expect(inputEmail).toHaveValue('ichigo@gmail.com');

    expect(inputPassword).toHaveValue('');
    expect(inputPassword).toBeInTheDocument();
    expect(inputPassword).toHaveAttribute('type', 'password');
  });
});
