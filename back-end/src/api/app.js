const express = require('express');
const cors = require('cors');
const Router = require('../routes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => res.send('Olá estamos ON!!!'));

app.use('/users', Router.UserRouter);
app.use('/login', Router.SignInRouter);
app.use('/favorites', Router.FavoriteRouter);

module.exports = app;
