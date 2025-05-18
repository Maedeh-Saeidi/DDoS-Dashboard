import { BASE_URL } from "../CONSTANTS";
import {http} from "@/api/http/http";

export const request_get_countChart = async ()=>{
return await http.get(BASE_URL + "/count-chart");
}