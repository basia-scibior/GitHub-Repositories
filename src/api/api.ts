import axios from "axios";
import axiosRetry from "axios-retry";

export const api = axios.create({
  baseURL: "https://api.github.com",
});

axiosRetry(api, { retries: 3 });
