import axios from "axios";

import config from "../constant/config";

axios.defaults.headers.post["Content-Type"] = "application/json";

export const sensorAxios = axios.create({
  baseURL: config.baseURL + "/sensor",
});

export const authAxios = axios.create({
  baseURL: config.baseURL + "/auth",
});
