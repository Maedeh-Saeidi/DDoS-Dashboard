import { BASE_URL } from "../CONSTANTS";
import {http} from "@/api/http/http";

export const request_get_countChart = async () => {
return await http.get(BASE_URL + "/count-chart");
};
export const request_get_sumpps = async () => {
return await http.get(BASE_URL + "/sum-pps");
};
export const request_get_sumlrl = async () => {
return await http.get(BASE_URL + "/sum-lrl");
};
