"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { urls } from "@/src/services/apiHelper";
import { useForm } from "react-hook-form";
import axios from "axios";
import { createMerchant } from "@/src/services/apiService/mainService";
import { stateType } from "@/types/types";
const AddMerchantForm: React.FC = () => {
  const { register, handleSubmit, watch } = useForm();
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
  const onSubmit = async (data: any) => {
    data = {
      ...data,
    };
    try {
      const response = await createMerchant(data);
      if (response?.status === 201) {
        router.push("/dashboard/merchant");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col shadow-md px-8 ">
      <main className=" py-10 ">
        <h1 className="text-2xl font-bold my-5">Add Merchant</h1>
        <div className=" ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" grid md:grid-cols-3 grid-cols-2 gap-8 w-full pr-5 "
          >
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
                {...register("merchantNumber")}
                className="w-full px-0 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            {/* Name */}
            <div className="">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                {...register("merchantName")}
                id="name"
                className="w-full px-0 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            {/* Address */}
            {/* <div className="">
              <label
                htmlFor="address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
               

                className="w-full px-0 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div> */}
            {/* Project Chief Name */}
            <div className="">
              <label
                htmlFor="projectChiefName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Project Chief Name
              </label>
              <input
                type="text"
                id="projectChiefName"
                {...register("projectChiefName")}
                className="w-full px-0 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            {/* VAT/Tax */}
            {/* <div className="">
              <label
                htmlFor="vatTax"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                VAT/Tax
              </label>
              <input
                type="text"
                id="vatTax"
                {...register("projectChiefName")}
                className="w-full px-0 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div> */}
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
                {...register("merchantEmail")}
                className="w-full px-0 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            {/* PAN/VAT Number */}
            <div className="">
              <label
                htmlFor="panVatNumber"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                PAN/VAT Number
              </label>
              <input
                type="text"
                id="panVatNumber"
                {...register("merchantPan")}
                className="w-full px-0 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
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
                {...register(`merchantAddress.ward`)}
                className="w-full px-0 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
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
                {...register(`merchantAddress.tolNum`)}
                className="w-full px-0 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
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
                {...register(`merchantAddress.houseNum`)}
                className="w-full px-0 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
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
                className="selectStyle"
                {...register(`merchantAddress.stateName`)}
                onChange={(e: any) => setStateChange(parseInt(e.target.value))}
              >
                <option value="" selected disabled>
                  --Select Pradesh--
                </option>
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
            <div className=" ">
              <label
                htmlFor="district"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                District
              </label>
              <select
                id="district"
                {...register(`merchantAddress.districtName`)}
                onChange={(e: any) => setDistrictChange(e.target.value)}
                className="w-full px-0 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              >
                <option value="" selected disabled>
                  --Select District--
                </option>
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
                {...register(`merchantAddress.palikaName`)}
                className="selectStyle"
              >
                <option value="" selected disabled>
                  Select Nagar Palika
                </option>
                {palika?.map((item: stateType, index: number) => {
                  return <option key={index}>{item?.palikaName}</option>;
                })}
              </select>
            </div>
            <div className="sm:col-start-1 mt-6 flex items-end justify-start gap-x-6">
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
