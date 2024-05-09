const apiUrls = {
  merchant: {
    getMerchant: {
      method: "GET",
      url: "/merchant/getMerchant",
    },
    createMerchant: {
      method: "POST",
      url: "/merchant/createMerchant",
    },
  },
  entrepreneur: {
    getEntrepreneur: {
      method: "GET",
      url: "/entrepreneur/getEntrepreneur",
    },
    createEntrepreneur: {
      method: "POST",
      url: "/entrepreneur/createEntrepreneur",
    },
  },
  farmerGroup: {
    getFarmerGroup: {
      method: "GET",
      url: "/farmerGroup/getFarmerGroup",
    },
    createFarmerGroup: {
      method: "GET",
      url: "/farmerGroup/createFarmerGroup",
    },
  },
  farmer: {
    getFarmer: {
      method: "GET",
      url: "/farmer/getFarmer",
    },
    createFarmer: {
      method: "GET",
      url: "/farmer/createFarmer",
    },
  },
};
export default apiUrls;
