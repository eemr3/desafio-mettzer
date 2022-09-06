import React from 'react';
import { screen, cleanup, within } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import Home from '../pages/Home';
import AppProvider from '../context/AppProvider';
import Table from '../components/Table';
import userEvent from '@testing-library/user-event';

afterEach(cleanup);

describe('Tela de Home', () => {
  it('renderiza navbar com input e button', async () => {
    renderWithRouter(
      <AppProvider>
        <Home />
      </AppProvider>,
    );

    await screen.findByTestId('navbar-test');
    await screen.findByPlaceholderText('Digite sua busca');
    await screen.findByRole('button', { name: /Buscar/i });
  });

  it('verifica se ao clicar na opção "Meus favoritos" navega para "/favorites"', async () => {
    const { history } = renderWithRouter(
      <AppProvider>
        <Home />
      </AppProvider>,
    );

    await screen.findByTestId('navbar-test');
    const menu = await screen.findByTestId('menu-profile');
    userEvent.click(menu);
    const item = await screen.findByText('Meus favoritos');
    userEvent.click(item);
    const path = history.location.pathname;
    expect(path).toBe('/favorites');
  });

  it('renderiz barra de paginação', async () => {
    renderWithRouter(
      <AppProvider>
        <Home />
      </AppProvider>,
    );

    await screen.findByTestId('pagination');
  });

  it('renderiza tabela na tela', async () => {
    renderWithRouter(
      <AppProvider>
        <Home>
          <Table />
        </Home>
      </AppProvider>,
    );

    await screen.findByTestId('table-article');
  });

  it('renderiz o head da tabela', async () => {
    renderWithRouter(
      <AppProvider>
        <Home>
          <Table />
        </Home>
      </AppProvider>,
    );

    const table = screen.getByRole('table');
    // eslint-disable-next-line no-unused-vars
    const [columnName, ...rows] = within(table).getAllByRole('rowgroup');
    within(columnName).getAllByText('Autor');
    within(columnName).getAllByText('Tipo');
    within(columnName).getAllByText('Titulo');
    within(columnName).getAllByText('Descrição');
    within(columnName).getAllByText('Urls');
    within(columnName).getAllByText('Favoritar');
  });
});
