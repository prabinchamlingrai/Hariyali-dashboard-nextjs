"use client";
import { urls } from "@/src/services/apiHelper";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { stateType } from "@/types/types";
import {
  createEntrepreneur,
  getMerchant,
} from "@/src/services/apiService/mainService";
import { useRouter } from "next/navigation";
// Define Zod schema for form validation

const AddMerchantForm: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  //get state
  const [state, setState] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${urls.getState}`);
      setState(data.data);
    };
    fetchData();
  }, []);

  //get district
  const [district, setDistrict] = useState([]);
  const [stateChange, setStateChange] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${urls.getDistrict}?stateId=${stateChange}`
      );
      setDistrict(data.data);
    };
    fetchData();
  }, [stateChange]);
  //get palika
  const [districtChange, setDistrictChange] = useState(0);
  const [palika, setPalika] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${urls.getPalika}?districtId=${districtChange}`
      );
      setPalika(data.data);
    };
    fetchData();
  }, [districtChange]);
  //get merchant
  const [merchant, setMerchant] = useState([]);
  console.log(merchant, "merchant");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMerchant();
        setMerchant(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const onSubmit = async (data: any) => {
    data = {
      ...data,
    };
    console.log(data, "mydata");
    try {
      const response = await createEntrepreneur(data);
      if (response?.status === 201) {
        router.push("/dashboard/entrepreneur");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col shadow-lg mb-6 pr-7 ">
      <main className="flex flex-1 flex-col justify-items-center gap-4 p-4 lg:gap-6 lg:p-6">
        <h1 className="text-2xl font-bold my-5">Add Enterpreneur</h1>
        <div className="">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-7 gap-x-8 md:grid-cols-3"
          >
            {/* District */}
            <div className="">
              <label
                htmlFor="district"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Merchant Name
              </label>
              <select
                id="district"
                className="inputStyle"
                {...register("merchantId")}
              >
                <option value={""} selected disabled>
                  --Select Merchant--
                </option>
                {merchant?.map((item: any, index) => {
                  return (
                    <option value={item?._id} key={index}>
                      {item?.merchantName}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* Name */}
            <div className="">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Entrepreneur Name
              </label>
              <input
                type="text"
                id="name"
                {...register("entName")}
                className="inputStyle"
              />
            </div>

            {/* Number */}
            <div className="">
              <label
                htmlFor="number"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Number
              </label>
              <input
                type="text"
                id="number"
                {...register("entNumber")}
                className="inputStyle"
              />
            </div>
            {/* VAT/Tax */}

            {/* Email */}
            <div className="">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("entEmail")}
                className="inputStyle"
              />
            </div>
            {/* PAN/VAT Number */}
            <div className=" ">
              <label
                htmlFor="panVatNumber"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                PAN/VAT Number
              </label>
              <input
                type="text"
                id="panVatNumber"
                {...register("entPan")}
                className="inputStyle"
              />
            </div>
            {/* Ward Number */}
            <div className="">
              <label
                htmlFor="wardNumber"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Ward Number
              </label>
              <input
                type="text"
                id="wardNumber"
                {...register(`entAddress.ward`)}
                className="inputStyle"
              />
            </div>
            {/* Tole Number */}
            <div className="">
              <label
                htmlFor="toleNumber"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Tole Number
              </label>
              <input
                type="text"
                id="toleNumber"
                {...register(`entAddress.tolNum`)}
                className="inputStyle"
              />
            </div>
            {/* House Number */}
            <div className="">
              <label
                htmlFor="houseNumber"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                House Number
              </label>
              <input
                type="text"
                id="houseNumber"
                {...register(`entAddress.houseNum`)}
                className="selectStyle"
              />
            </div>
            {/* Pradesh */}
            <div className="">
              <label
                htmlFor="pradesh"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Pradesh
              </label>
              <select
                id="pradesh"
                {...register("entAddress.stateId")}
                className="selectStyle"
                onChange={(e: any) => setStateChange(parseInt(e.target.value))}
              >
                <option value="">--Select State--</option>
                {state?.map((item: stateType, index: number) => {
                  return (
                    <option key={index} value={item?.stateId}>
                      {item?.stateName}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* District */}
            <div className="">
              <label
                htmlFor="district"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                District
              </label>
              <select
                id="district"
                {...register("entAddress.districtId")}
                className="selectStyle"
                onChange={(e: any) => setDistrictChange(e.target.value)}
              >
                <option value="">Select District</option>
                {district?.map((item: stateType, index: number) => {
                  return (
                    <option key={index} value={item?.districtId}>
                      {item?.districtName}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* Nagar Palika */}
            <div className="">
              <label
                htmlFor="nagarPalika"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nagar Palika
              </label>
              <select
                id="nagarPalika"
                {...register("entAddress.palikaId")}
                className="selectStyle"
              >
                <option value="">Select Nagar Palika</option>
                {palika?.map((item: stateType, index: number) => {
                  return (
                    <option key={index} value={item?.palikaId}>
                      {item?.palikaName}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="sm:col-start-1  flex items-end justify-start gap-x-6">
              <button
                type="button"
                className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddMerchantForm;
