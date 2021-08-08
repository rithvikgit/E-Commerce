import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: process.env.REACT_APP_AXIOS
});

export default instance;