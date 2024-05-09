"use client";
import React, { useState } from "react";

import { useForm } from "react-hook-form";
const AddMerchantForm: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const [quantity, setQuantity] = useState(0);
  const [rate, setRate] = useState(0);
  const price: number = quantity * rate;
  const onSubmit = () => {};
  return (
    <div className="flex flex-col shadow-md px-8 ">
      <main className=" py-10 ">
        <h1 className="text-2xl font-bold my-5">Add Details</h1>
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
                Date
              </label>
              <input
                type="date"
                id="number"
                name="number"
                className="w-full px-0 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Farmer's Group Name
              </label>
              <select className="selectStyle">
                <option selected disabled>
                  --Select Group--
                </option>
                <option>1</option>
              </select>
            </div>

            <div className="">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Farmer's Name
              </label>
              <select className="selectStyle">
                <option selected disabled>
                  --Select Farmer--
                </option>
                <option>1</option>
              </select>
            </div>
            <div className="">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                G. commodity Name
              </label>
              <select className="selectStyle">
                <option selected disabled>
                  --Select Commodity--
                </option>
                <option>1</option>
              </select>
            </div>

            <div className="">
              <label
                htmlFor="vatTax"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Quantity
              </label>
              <input
                type="number"
                id="vatTax"
                name="vatTax"
                onChange={(e: any) => setQuantity(e.target.value)}
                className="inputStyle"
              />
            </div>

            <div className="">
              <label
                htmlFor="vatTax"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Rate
              </label>
              <input
                type="number"
                id="vatTax"
                onChange={(e: any) => setRate(e.target.value)}
                className="inputStyle"
              />
            </div>
            <div className="">
              <label
                htmlFor="vatTax"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Price
              </label>
              <input
                type="number"
                id="vatTax"
                value={price}
                className="inputStyle"
              />
            </div>
            <div className="">
              <label
                htmlFor="vatTax"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Cash/Credit
              </label>
              <input
                type="number"
                id="vatTax"
                name="vatTax"
                className="inputStyle"
              />
            </div>
            <div className="flex gap-5 items-center pt-5">
              <div className="flex gap-2 ">
                <input type="checkbox" />
                <label htmlFor="">Cash</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" />
                <label htmlFor="">Credit</label>
              </div>
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
