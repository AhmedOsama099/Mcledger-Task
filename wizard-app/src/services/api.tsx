import axios from "axios";

import { GenerixTextUtils } from "../utils/generalText";

const instance = axios.create({
  baseURL: GenerixTextUtils.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
