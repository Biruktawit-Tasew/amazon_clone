import axios from "axios";

const instance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-f03d6/us-central1/api",
  // deployed on render.com
  baseURL: "https://amazon-api-deploy-q53x.onrender.com",
});

export default instance