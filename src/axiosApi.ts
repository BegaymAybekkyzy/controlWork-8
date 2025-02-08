import axios from "axios";
import { BASE_URL } from "./globalConstant.ts";

const axiosApi = axios.create({
  baseURL: BASE_URL,
});

export default axiosApi;
