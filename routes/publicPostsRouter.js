const express = require('express');
const app = express.Router();

const posts = require('../controllers/postsController');

app.post('/send-passcode', posts.sendPasscode);

app.post('/verify-passcode', posts.passcodeValidation, posts.verifyPasscode);

app.get('/:id/update', posts.postUpdateView);

app.post('/:id/update', posts.postUpdate);

app.get('/:id/delete', posts.postDeleteView);

app.post('/:id/delete', posts.postDelete);

app.get('/:id', posts.postDetailView);

app.get('/', posts.publicPostsView);

app.post('/', posts.postCreate);

module.exports = app;