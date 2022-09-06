import React from 'react';
import { screen, cleanup, within } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import AppProvider from '../context/AppProvider';
import Table from '../components/Table';
import userEvent from '@testing-library/user-event';
import Favorites from '../pages/Favorites';

afterEach(cleanup);

describe('Tela de Home', () => {
  it('renderiza navbar com input e button', async () => {
    renderWithRouter(
      <AppProvider>
        <Favorites />
      </AppProvider>,
    );

    await screen.findByTestId('navbar-test');
    await screen.findByRole('link', { name: /Home/i });
  });

  it('verifica se ao clicar na opção "Meus favoritos" navega para "/home"', async () => {
    const { history } = renderWithRouter(
      <AppProvider>
        <Favorites />
      </AppProvider>,
    );

    await screen.findByTestId('navbar-test');
    const link = await screen.findByRole('link', { name: /Home/i });
    userEvent.click(link);
    const path = history.location.pathname;
    expect(path).toBe('/home');
  });

  it('renderiza tabela na tela', async () => {
    renderWithRouter(
      <AppProvider>
        <Favorites>
          <Table />
        </Favorites>
      </AppProvider>,
    );

    await screen.findByTestId('table-article');
  });

  it('renderiz o head da tabela', async () => {
    renderWithRouter(
      <AppProvider>
        <Favorites>
          <Table />
        </Favorites>
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
