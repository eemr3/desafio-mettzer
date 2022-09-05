const responseUserMock = {
  id: 1,
  name: 'Jonh Doe',
  email: 'doej@email.com',
  password: '$2a$10$Ilyp9CRCUXyWGPfyysHG3.VjMPuLtRHPAaAuhFnN514UPUZDFNP9i',
  updatedAt: '2022-09-05T20:08:43.271Z',
  createdAt: '2022-09-05T20:08:43.271Z',
};

const payloadMock = {
  name: 'Jonh Doe',
  email: 'doej@email.com',
  password: '123456',
};

module.exports = {
  responseUserMock,
  payloadMock,
};
