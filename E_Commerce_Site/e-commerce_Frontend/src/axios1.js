import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();

const instance1 = axios.create({
  // THE API (cloud function) URL
  baseURL: process.env.REACT_APP_AXIOS_1   
});

export default instance1;