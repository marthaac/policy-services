import axios from "axios";
import { BASEURL } from "../Features/const";

/**
 * Function that call external service
 */
export const getData = () => axios.get(BASEURL);
