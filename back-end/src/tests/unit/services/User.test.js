const { expect } = require('chai');
const sinon = require('sinon');

const { User } = require('../../../database/models');
const Service = require('../../../services/User.service');
const { responseUserMock, payloadMock } = require('../../mocks/User.mock');

describe('Rota "/users"', () => {
  describe('criar usuario sucesso', () => {
    before(() => {
      sinon.stub(User, 'findOne').resolves(null);
      sinon.stub(User, 'create').resolves(responseUserMock);
    });

    after(() => {
      User.findOne.restore();
      User.create.restore();
    });

    it('valida retorno do sucesso na criação do usuário', async () => {
      const result = await Service.createUser(payloadMock);

      expect(result).to.deep.equals(responseUserMock);
    });
  });

  describe('falha ao criar usuario, usuário existente', () => {
    before(() => {
      sinon.stub(User, 'findOne').resolves(responseUserMock);
      sinon.stub(User, 'create').resolves(responseUserMock);
    });

    after(() => {
      User.findOne.restore();
      User.create.restore();
    });

    it('valida retorno do sucesso na criação do usuário', async () => {
      try {
        await Service.createUser(payloadMock);
      } catch (error) {
        expect(error.message).to.be.equal('Usuário já cadastrado');
      }
    });
  });
});
