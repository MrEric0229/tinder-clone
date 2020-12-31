import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend-eric.herokuapp.com/",
});

export default instance;
