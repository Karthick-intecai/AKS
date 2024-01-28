import axios from "axios";

const instance = axios.create({
  baseURL: "https://hungry-yak-school-uniform.cyclic.app",
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;