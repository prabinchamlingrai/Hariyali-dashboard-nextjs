"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddFarmersGroup: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = () => {};
  return (
    <div className=" shadow-lg mb-6  ">
      <main className=" px-5 py-4 ">
        <h1 className="text-2xl font-bold mb-5">Add Farmer Group</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          <div className=" ">
            <label
              htmlFor="projectChiefName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Merchant Name
            </label>
            <select id="pradesh" name="pradesh" className="inputStyle">
              <option value="">Select Pradesh</option>
              <option value="Pradesh 1">Pradesh 1</option>
              <option value="Pradesh 2">Pradesh 2</option>
              <option value="Pradesh 3">Pradesh 3</option>
              <option value="Pradesh 4">Pradesh 4</option>
              <option value="Pradesh 5">Pradesh 5</option>
            </select>
          </div>
          <div className=" ">
            <label
              htmlFor="projectChiefName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Entrepreneur Name
            </label>
            <select id="pradesh" name="pradesh" className="inputStyle">
              <option value="">Select Pradesh</option>
              <option value="Pradesh 1">Pradesh 1</option>
              <option value="Pradesh 2">Pradesh 2</option>
              <option value="Pradesh 3">Pradesh 3</option>
              <option value="Pradesh 4">Pradesh 4</option>
              <option value="Pradesh 5">Pradesh 5</option>
            </select>
          </div>
          {/* Name */}
          <div className="">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Group Name
            </label>
            <input type="text" id="name" className="inputStyle" />
          </div>
          {/* Address */}
          <div className="">
            <label
              htmlFor="address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
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
              name="number"
              className="inputStyle"
            />
          </div>

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
              name="email"
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
              name="panVatNumber"
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
              name="wardNumber"
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
            <input type="text" id="toleNumber" className="inputStyle" />
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
              name="houseNumber"
              className="inputStyle"
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
            <select id="pradesh" name="pradesh" className="selectStyle">
              <option value="">Select Pradesh</option>
              <option value="Pradesh 1">Pradesh 1</option>
              <option value="Pradesh 2">Pradesh 2</option>
              <option value="Pradesh 3">Pradesh 3</option>
              <option value="Pradesh 4">Pradesh 4</option>
              <option value="Pradesh 5">Pradesh 5</option>
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
            <select id="district" name="district" className="selectStyle">
              <option value="">Select District</option>
              <option value="District 1">District 1</option>
              <option value="District 2">District 2</option>
              <option value="District 3">District 3</option>
              <option value="District 4">District 4</option>
              <option value="District 5">District 5</option>
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
            <select id="nagarPalika" name="nagarPalika" className="selectStyle">
              <option value="">Select Nagar Palika</option>
              <option value="Nagar Palika 1">Nagar Palika 1</option>
              <option value="Nagar Palika 2">Nagar Palika 2</option>
              <option value="Nagar Palika 3">Nagar Palika 3</option>
              <option value="Nagar Palika 4">Nagar Palika 4</option>
              <option value="Nagar Palika 5">Nagar Palika 5</option>
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
      </main>
    </div>
  );
};

export default AddFarmersGroup;
