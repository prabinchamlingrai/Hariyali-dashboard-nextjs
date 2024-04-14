"use client";
import React, { useState } from "react";
import { ZodError } from "zod";
import merchantSchema from "../merchantSchema";

// Define Zod schema for form validation

const AddMerchantForm: React.FC = () => {
  const [formData, setFormData] = useState({
    number: "",
    name: "",
    address: "",
    projectChiefName: "",
    vatTax: "",
    email: "",
    panVatNumber: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Validate form data against schema
      merchantSchema.parse(formData);
      // If validation succeeds, you can handle form submission here
      console.log("Form data is valid:", formData);
      // Reset form data after successful submission
      setFormData({
        number: "",
        name: "",
        address: "",
        projectChiefName: "",
        vatTax: "",
        email: "",
        panVatNumber: "",
      });
      // Clear any previous errors
      setFormErrors({});
    } catch (error) {
      if (error instanceof ZodError) {
        // If there are validation errors, set them in state
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            fieldErrors[err.path[0]] = err.message;
          }
        });
        setFormErrors(fieldErrors);
      }
    }
  };

  return (
    <div className="flex flex-col shadow-lg mb-6 justify-center items-center">
      <main className="flex flex-1 flex-col justify-items-center gap-4 p-4 lg:gap-6 lg:p-6  ">
        <h1 className="text-2xl font-bold mb-5">Add Merchant</h1>
        <div className="flex  items-center">
          <form
            onSubmit={handleSubmit}
            className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
          >
            {/* Number */}
            <div className="sm:col-span-3">
              <label
                htmlFor="number"
                className="block text-sm font-medium leading-6  text-gray-900"
              >
                Number
              </label>
              <input
                type="text"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className={`w-full px-4 py-1.5 rounded-md border ${formErrors.number ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-blue-500`}
              />
              {formErrors.number && (
                <p className="text-red-500">{formErrors.number}</p>
              )}
            </div>

            {/* Merchant Name */}
            <div className="sm:col-span-3">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6  text-gray-900"
              >
                Merchant Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-1.5 rounded-md border ${formErrors.name ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-blue-500`}
              />
              {formErrors.name && (
                <p className="text-red-500">{formErrors.name}</p>
              )}
            </div>
            {/* Address */}
            <div className="sm:col-span-3">
              <label
                htmlFor="address"
                className="block text-sm font-medium leading-6  text-gray-900"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`w-full px-4 py-1.5 rounded-md border ${formErrors.address ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-blue-500`}
              />
              {formErrors.address && (
                <p className="text-red-500">{formErrors.address}</p>
              )}
            </div>
            {/* Ward Number */}
            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="ward-number"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Ward Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="ward-number"
                  id="ward-number"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* Tole Number */}
            <div className="sm:col-span-2">
              <label
                htmlFor="tole-number"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Tole Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="tole-number"
                  id="tole-number"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* House Number */}
            <div className="sm:col-span-2">
              <label
                htmlFor="house-number"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                House Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="house-number"
                  id="house-number"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Pradesh */}
            <div className="sm:col-span-2">
              <label
                htmlFor="pradesh"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Pradesh
              </label>
              <div className="mt-2">
                <select
                  id="pradesh"
                  name="pradesh"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Pradesh</option>
                  <option>Pradesh 1</option>
                  <option>Pradesh 2</option>
                  <option>Pradesh 3</option>
                  <option>Pradesh 4</option>
                  <option>Pradesh 5</option>
                </select>
              </div>
            </div>
            {/* District */}
            <div className="sm:col-span-2">
              <label
                htmlFor="district"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                District
              </label>
              <div className="mt-2">
                <select
                  id="district"
                  name="district"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>District</option>
                  <option>District 1</option>
                  <option>District 2</option>
                  <option>District 3</option>
                  <option>District 4</option>
                  <option>District 5</option>
                </select>
              </div>
            </div>

            {/* Nagar palika */}
            <div className="sm:col-span-2">
              <label
                htmlFor="nagar-palika"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nagar palika
              </label>
              <div className="mt-2">
                <select
                  id="nagar-palika"
                  name="nagar-palika"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Nagar palika</option>
                  <option>Nagar palika 1</option>
                  <option>Nagar palika 2</option>
                  <option>Nagar palika 3</option>
                  <option>Nagar palika 4</option>
                  <option>Nagar palika 5</option>
                </select>
              </div>
            </div>

            {/* Project Chief Name */}
            <div className="sm:col-span-3">
              <label
                htmlFor="projectChiefName"
                className="block text-sm font-medium leading-6  text-gray-900"
              >
                Project Chief Name
              </label>
              <input
                type="text"
                id="projectChiefName"
                name="projectChiefName"
                value={formData.projectChiefName}
                onChange={handleChange}
                className={`w-full px-4 py-1.5 rounded-md border ${formErrors.projectChiefName
                  ? "border-red-500"
                  : "border-gray-300"
                  } focus:outline-none focus:border-blue-500`}
              />
              {formErrors.projectChiefName && (
                <p className="text-red-500">{formErrors.projectChiefName}</p>
              )}
            </div>
            {/* VAT/Tax */}
            <div className="sm:col-span-3">
              <label
                htmlFor="vatTax"
                className="block text-sm font-medium leading-6  text-gray-900"
              >
                VAT/Tax
              </label>
              <input
                type="text"
                id="vatTax"
                name="vatTax"
                value={formData.vatTax}
                onChange={handleChange}
                className={`w-full px-4 py-1.5 rounded-md border ${formErrors.vatTax ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-blue-500`}
              />
              {formErrors.vatTax && (
                <p className="text-red-500">{formErrors.vatTax}</p>
              )}
            </div>
            {/* Email ID */}
            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6  text-gray-900"
              >
                Email ID
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-1.5 rounded-md border ${formErrors.email ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-blue-500`}
              />
              {formErrors.email && (
                <p className="text-red-500">{formErrors.email}</p>
              )}
            </div>
            {/* PAN/VAT Number */}
            <div className="sm:col-span-3">
              <label
                htmlFor="panVatNumber"
                className="block text-sm font-medium leading-6  text-gray-900"
              >
                PAN/VAT Number
              </label>
              <input
                type="text"
                id="panVatNumber"
                name="panVatNumber"
                value={formData.panVatNumber}
                onChange={handleChange}
                className={`w-full px-4 py-1.5 rounded-md border ${formErrors.panVatNumber ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-blue-500`}
              />
              {formErrors.panVatNumber && (
                <p className="text-red-500">{formErrors.panVatNumber}</p>
              )}
            </div>
            <div className="mt-6 flex items-end justify-start gap-x-6">
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
