const express = require('express');
const app = express.Router();

const {
	loginView,
	login,
	validateLogin,
	handleRedirectUrl
} = require('../controllers/loginController');

app.get('/', handleRedirectUrl, loginView);

app.post('/', validateLogin, handleRedirectUrl, login);

module.exports = app;