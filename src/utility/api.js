/* eslint-disable prettier/prettier */
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bilim-coin.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
