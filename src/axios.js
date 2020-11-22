import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend-nowfel2k.herokuapp.com",
});

export default instance;
