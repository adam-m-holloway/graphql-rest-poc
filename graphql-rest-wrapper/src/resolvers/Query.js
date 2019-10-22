const fetch = require('node-fetch');
const { BASE_URL } = require('../config');

module.exports = {
  users: () => fetch(`${BASE_URL}/users`).then(res => res.json()),
  user: (parent, args) => {
    const { id } = args;
    return fetch(`${BASE_URL}/users/${id}`).then(res => res.json());
  },
  posts: () => fetch(`${BASE_URL}/posts`).then(res => res.json()),
  post: (parent, args) => {
    const { id } = args;
    return fetch(`${BASE_URL}/posts/${id}`).then(res => res.json());
  }
};
