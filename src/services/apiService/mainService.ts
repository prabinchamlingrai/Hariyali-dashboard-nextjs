import { mainApi } from "../apiHelper";
import apiUrls from "../apiUrls";
export const getMerchant = async () => {
  let response = await mainApi(
    apiUrls.merchant.getMerchant.method,
    apiUrls.merchant.getMerchant.url
  );
  return response;
};
export const createMerchant = async (data: string) => {
  let response = await mainApi(
    apiUrls.merchant.createMerchant.method,
    apiUrls.merchant.createMerchant.url,
    data
  );
  return response;
};
export const getEntrepreneur = async (id: any) => {
  let response = await mainApi(
    apiUrls.entrepreneur.getEntrepreneur.method,
    apiUrls.entrepreneur.getEntrepreneur.url + `/${id ? id : ""}`
  );
  return response;
};
export const createEntrepreneur = async (data: string) => {
  let response = await mainApi(
    apiUrls.entrepreneur.createEntrepreneur.method,
    apiUrls.entrepreneur.createEntrepreneur.url,
    data
  );
  return response;
};
export const getFarmerGroup = async (eid: any) => {
  let response = await mainApi(
    apiUrls.farmerGroup.getFarmerGroup.method,
    apiUrls.farmerGroup.getFarmerGroup.url + `/${eid ? eid : ""}`
  );
  return response;
};
