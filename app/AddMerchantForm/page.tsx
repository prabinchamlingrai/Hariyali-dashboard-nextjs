'use client'
import React, { useState } from "react";
import {  ZodError } from "zod";
import merchantSchema from "../merchantSchema";

const AddMerchantForm: React.FC = () => {
  const [formData, setFormData] = useState({
    number: "",
    name: "",
    address: "",
    projectChiefName: "",
    vatTax: "",
    email: "",
    panVatNumber: "",
    wardNumber: "",
    toleNumber: "",
    houseNumber: "",
    pradesh: "",
    district: "",
    nagarPalika: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
        wardNumber: "",
        toleNumber: "",
        houseNumber: "",
        pradesh: "",
        district: "",
        nagarPalika: "",
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
  const handleCancel = () => {
    // Reset the form data and clear any errors
    setFormData({
      number: "",
      name: "",
      address: "",
      projectChiefName: "",
      vatTax: "",
      email: "",
      panVatNumber: "",
      wardNumber: "",
      toleNumber: "",
      houseNumber: "",
      pradesh: "",
      district: "",
      nagarPalika: "",
    });
    setFormErrors({});
  };

  

  return (
    <div className="flex flex-col shadow-lg mb-6 justify-center items-center">
      <main className="flex flex-1 flex-col justify-items-center gap-4 p-4 lg:gap-6 lg:p-6">
        <h1 className="text-2xl font-bold mb-5">Add Merchant</h1>
        <div className="flex items-center">
          <form
            onSubmit={handleSubmit}
            className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
          >
            {/* Number */}
            <div className="sm:col-span-2 sm:col-start-1">
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
                value={formData.number}
                onChange={handleChange}
                className={`w-full sm:w-auto px-4 py-1.5 rounded-md border ${formErrors.number ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-blue-500`}
              />
              {formErrors.number && (
                <p className="text-red-500">{formErrors.number}</p>
              )}
            </div>
            {/* Name */}
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full sm:w-auto px-4 py-1.5 rounded-md border ${formErrors.name ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-blue-500`}
              />
              {formErrors.name && (
                <p className="text-red-500">{formErrors.name}</p>
              )}
            </div>
            {/* Address */}
            <div className="sm:col-span-2">
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
                value={formData.address}
                onChange={handleChange}
                className={`w-full sm:w-auto px-4 py-1.5 rounded-md border ${formErrors.address ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-blue-500`}
              />
              {formErrors.address && (
                <p className="text-red-500">{formErrors.address}</p>
              )}
            </div>
            {/* Project Chief Name */}
            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="projectChiefName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Project Chief Name
              </label>
              <input
                type="text"
                id="projectChiefName"
                name="projectChiefName"
                value={formData.projectChiefName}
                onChange={handleChange}
                className={`w-full sm:w-auto px-4 py-1.5 rounded-md border ${formErrors.projectChiefName ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-blue-500`}
              />
              {formErrors.projectChiefName && (
                <p className="text-red-500">{formErrors.projectChiefName}</p>
              )}
            </div>
            {/* VAT/Tax */}
            <div className="sm:col-span-2">
              <label
                htmlFor="vatTax"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                VAT/Tax
              </label>
              <input
                type="text"
                id="vatTax"
                name="vatTax"
                value={formData.vatTax}
                onChange={handleChange}
                className={`w-full sm:w-auto px-4 py-1.5 rounded-md border ${formErrors.vatTax ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-blue-500`}
              />
              {formErrors.vatTax && (
                <p className="text-red-500">{formErrors.vatTax}</p>
              )}
            </div>
            {/* Email */}
            <div className="sm:col-span-2">
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
                value={formData.email}
                onChange={handleChange}
                className={`w-full sm:w-auto px-4 py-1.5 rounded-md border ${formErrors.email ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-blue-500`}
              />
              {formErrors.email && (
                <p className="text-red-500">{formErrors.email}</p>
              )}
            </div>
            {/* PAN/VAT Number */}
            <div className="sm:col-span-2 sm:col-start-1">
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
                value={formData.panVatNumber}
                onChange={handleChange}
                className={`w-full sm:w-auto px-4 py-1.5 rounded-md border ${formErrors.panVatNumber ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-blue-500`}
              />
              {formErrors.panVatNumber && (
                <p className="text-red-500">{formErrors.panVatNumber}</p>
              )}
            </div>
            {/* Ward Number */}
            <div className="sm:col-span-2">
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
                value={formData.wardNumber}
                onChange={handleChange}
                className={`w-full sm:w-auto px-4 py-1.5 rounded-md border ${formErrors.wardNumber ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-blue-500`}
              />
              {formErrors.wardNumber && (
                <p className="text-red-500">{formErrors.wardNumber}</p>
              )}
            </div>
            {/* Tole Number */}
            <div className="sm:col-span-2">
              <label
                htmlFor="toleNumber"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Tole Number
              </label>
              <input
                type="text"
                id="toleNumber"
                name="toleNumber"
                value={formData.toleNumber}
                onChange={handleChange}
                className={`w-full sm:w-auto px-4 py-1.5 rounded-md border ${formErrors.toleNumber ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-blue-500`}
              />
              {formErrors.toleNumber && (
                <p className="text-red-500">{formErrors.toleNumber}</p>
              )}
            </div>
            {/* House Number */}
            <div className="sm:col-span-2">
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
                value={formData.houseNumber}
                onChange={handleChange}
                className={`w-full sm:w-auto px-4 py-1.5 rounded-md border ${formErrors.houseNumber ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-blue-500`}
              />
              {formErrors.houseNumber && (
                <p className="text-red-500">{formErrors.houseNumber}</p>
              )}
            </div>
            {/* Pradesh */}
            <div className="sm:col-span-2">
              <label
                htmlFor="pradesh"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Pradesh
              </label>
              <select
                id="pradesh"
                name="pradesh"
                value={formData.pradesh}
                onChange={handleChange}
                className={`w-full sm:w-auto px-4 py-1.5 rounded-md border  ${formErrors.pradesh ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-blue-500`}
              >
                <option value="">Select Pradesh</option>
                <option value="Pradesh 1">Pradesh 1</option>
                <option value="Pradesh 2">Pradesh 2</option>
                <option value="Pradesh 3">Pradesh 3</option>
                <option value="Pradesh 4">Pradesh 4</option>
                <option value="Pradesh 5">Pradesh 5</option>
              </select>
              {formErrors.pradesh && (
                <p className="text-red-500">{formErrors.pradesh}</p>
              )}
            </div>
            {/* District */}
            <div className="sm:col-span-2 ">
              <label
                htmlFor="district"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                District
              </label>
              <select
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                className={`w-full sm:w-auto px-4 py-1.5 rounded-md border ${formErrors.district ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-blue-500`}
              >
                <option value="">Select District</option>
                <option value="District 1">District 1</option>
                <option value="District 2">District 2</option>
                <option value="District 3">District 3</option>
                <option value="District 4">District 4</option>
                <option value="District 5">District 5</option>
              </select>
              {formErrors.district && (
                <p className="text-red-500">{formErrors.district}</p>
              )}
            </div>
            {/* Nagar Palika */}
            <div className="sm:col-span-2">
              <label
                htmlFor="nagarPalika"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nagar Palika
              </label>
              <select
                id="nagarPalika"
                name="nagarPalika"
                value={formData.nagarPalika}
                onChange={handleChange}
                className={`w-full sm:w-auto px-4 py-1.5 rounded-md border ${formErrors.nagarPalika ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-blue-500`}
              >
                <option value="">Select Nagar Palika</option>
                <option value="Nagar Palika 1">Nagar Palika 1</option>
                <option value="Nagar Palika 2">Nagar Palika 2</option>
                <option value="Nagar Palika 3">Nagar Palika 3</option>
                <option value="Nagar Palika 4">Nagar Palika 4</option>
                <option value="Nagar Palika 5">Nagar Palika 5</option>
              </select>
              {formErrors.nagarPalika && (
                <p className="text-red-500">{formErrors.nagarPalika}</p>
              )}
            </div>
            <div className="sm:col-start-1 mt-6 flex items-end justify-start gap-x-6">
  <button
    type="button"
    onClick={handleCancel}
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
