const fetch = require('node-fetch');
const { BASE_URL } = require('../config');

module.exports = {
  posts: (parent) => {
    const { id } = parent;
    return fetch(`${BASE_URL}/users/${id}/posts`).then(res => res.json());
  }
};
