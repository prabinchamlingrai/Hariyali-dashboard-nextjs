import axios from "axios";
import { store } from "../redux/store";
const baseUrl = "http://localhost:8000/api";
export const urls = {
  mainUrl: `${baseUrl}`,
  getMerchant: `${baseUrl}/merchant/getMerchant`,
  createMerchant: `${baseUrl}/merchant/createMerchant`,
  getState: `${baseUrl}/office/getState`,
  getDistrict: `${baseUrl}/office/getDistrict`,
  getPalika: `${baseUrl}/office/getPalika`,
};
export const mainApi = async (method: string, url: string, data?: string) => {
  // const tok = store.getState();
  let response = await axios({
    method,
    url: `${urls.mainUrl}${url}`,
    data,
    headers: {
      Authorization: `Bearer `,
    },
  });
  return response.data;
};
