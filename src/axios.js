import axios from 'axios';

const instance = axios.create({
  baseURL: 'localhost:8000/api',
  timeout: 5000,
  headers: {
    'Accept-Version': 1,
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export default instance;