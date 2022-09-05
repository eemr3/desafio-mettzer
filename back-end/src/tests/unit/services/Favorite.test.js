const { expect } = require('chai');
const sinon = require('sinon');

const { Favorite, Author, Url } = require('../../../database/models');
const Service = require('../../../services/Favorite.service');
const {
  responseFavoriteMock,
  responseAuthorMock,
  responseUrlMock,
  payloadFavoriteMock,
  responseAllFavoritesMock,
} = require('../../mocks/Favorite.mock');

describe('Rota "/favorites"', () => {
  describe('criar favorito', () => {
    before(() => {
      sinon.stub(Favorite, 'create').resolves(responseFavoriteMock);
      sinon.stub(Author, 'create').resolves(responseAuthorMock);
      sinon.stub(Url, 'create').resolves(responseUrlMock);
    });

    after(() => {
      Favorite.create.restore();
      Author.create.restore();
      Url.create.restore();
    });

    it('cria favorito com sucesso', async () => {
      const response = await Service.createFavorite(payloadFavoriteMock);

      expect(response).to.deep.equals(responseFavoriteMock);
    });
  });

  describe('busca todos os favoritos', () => {
    before(() => {
      sinon.stub(Favorite, 'findAll').resolves(responseAllFavoritesMock);
    });

    after(() => {
      Favorite.findAll.restore();
    });

    it('resultado da requisição', async () => {
      const response = await Service.getAllFavorites(1);

      expect(response).to.deep.equals(responseAllFavoritesMock);
    });
  });
});
