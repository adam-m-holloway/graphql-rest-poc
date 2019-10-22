const fetch = require('node-fetch');
const { BASE_URL } = require('../config');

module.exports = {
  author: (parent) => {
    const { id } = parent;
    return fetch(`${BASE_URL}/posts/${id}/user`).then(res => res.json());
  }
};
