const fetch = require('node-fetch');
const uuid = require('uuid/v4');
const { BASE_URL } = require('../config');

module.exports = {
  createUser: (parent, args) => {
    const { name } = args;
    const body = { id: uuid(), name };
    return fetch(`${BASE_URL}/users`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(json => json);
  },
  updateUser: (parent, args) => {
    const { id, name } = args;
    const body = { id, name };
    return fetch(`${BASE_URL}/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(json => json);
  },
  deleteUser: (parent, args) => {
    const { id } = args;
    const body = { id };
    return fetch(`${BASE_URL}/users/${id}`, {
      method: 'DELETE',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(json => json);
  }
};
