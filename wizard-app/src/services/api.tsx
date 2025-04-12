import axios from "axios";
import { GenericTextUtils } from "../utils/GeneralText";

const instance = axios.create({
  baseURL: GenericTextUtils.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
