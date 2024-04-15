
"use client"
import React from 'react';

const Page = () => {
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
<div className='flex flex-col shadow-lg mb-6 justify-center items-center'>
    <main className="flex flex-1 flex-col justify-items-center gap-4 p-4 lg:gap-6 lg:p-6  ">
      <div className="flex  items-center">
        <form onSubmit={handleSubmit}>
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">MERCHANT</h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* first name */}
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6  text-gray-900">Merchant name</label>
                <div className="mt-2">
                  <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6  text-gray-900">Address</label>
                <div className="mt-2">
                  <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              {/* last name */}
              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Project Chief Name</label>
                <div className="mt-2">
                  <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                
              </div>
              {/* phone number */}
              <div className="sm:col-span-3">
                <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                <div className="mt-2">
                  <input type="tel" name="phone-number" id="phone-number" autoComplete="tel" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              {/* email */}
              {/* <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                  <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div> */}
              
              {/* Pan / VAT Number */}
              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                  <input type="email" name="email" id="email" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="vat-number" className="block text-sm font-medium leading-6 text-gray-900">Pan / VAT Number</label>
                <div className="mt-2">
                  <input type="text" name="vat-number" id="vat-number" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              {/* Ward Number */}
              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="ward-number" className="block text-sm font-medium leading-6 text-gray-900">Ward Number</label>
                <div className="mt-2">
                  <input type="text" name="ward-number" id="ward-number" autoComplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              {/* Tole Number */}
              <div className="sm:col-span-2">
                <label htmlFor="tole-number" className="block text-sm font-medium leading-6 text-gray-900">Tole Number</label>
                <div className="mt-2">
                  <input type="text" name="tole-number" id="tole-number" autoComplete="address-level1" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              {/* House Number */}
              <div className="sm:col-span-2">
                <label htmlFor="house-number" className="block text-sm font-medium leading-6 text-gray-900">House Number</label>
                <div className="mt-2">
                  <input type="text" name="house-number" id="house-number" autoComplete="postal-code" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              {/* Pradesh */}
              <div className="sm:col-span-2">
                <label htmlFor="pradesh" className="block text-sm font-medium leading-6 text-gray-900">Pradesh</label>
                <div className="mt-2">
                  <select id="pradesh" name="pradesh" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
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
                <label htmlFor="district" className="block text-sm font-medium leading-6 text-gray-900">District</label>
                <div className="mt-2">
                  <select id="district" name="district" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
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
                <label htmlFor="nagar-palika" className="block text-sm font-medium leading-6 text-gray-900">Nagar palika</label>
                <div className="mt-2">
                  <select id="nagar-palika" name="nagar-palika" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option>Nagar palika</option>
                    <option>Nagar palika 1</option>
                    <option>Nagar palika 2</option>
                    <option>Nagar palika 3</option>
                    <option>Nagar palika 4</option>
                    <option>Nagar palika 5</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/*  save and cancel button */}
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
          </div>
        </form>
      </div>
    </main>
    </div>
  );
};

export default Page;

// 'use client'
// import React, { useState } from 'react';
// import { ZodError } from 'zod';
// import merchantSchema from '../merchantSchema';

// // Define Zod schema for form validation


// const AddMerchantForm: React.FC = () => {
//   const [formData, setFormData] = useState({
//     number: '',
//     name: '',
//     address: '',
//     projectChiefName: '',
//     vatTax: '',
//     email: '',
//     panVatNumber: '',
//   });
//   const [formErrors, setFormErrors] = useState<Record<string, string>>({});

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       // Validate form data against schema
//       merchantSchema.parse(formData);
//       // If validation succeeds, you can handle form submission here
//       console.log("Form data is valid:", formData);
//       // Reset form data after successful submission
//       setFormData({
//         number: '',
//         name: '',
//         address: '',
//         projectChiefName: '',
//         vatTax: '',
//         email: '',
//         panVatNumber: '',
//       });
//       // Clear any previous errors
//       setFormErrors({});
//     } catch (error) {
//       if (error instanceof ZodError) {
//         // If there are validation errors, set them in state
//         const fieldErrors: Record<string, string> = {};
//         error.errors.forEach(err => {
//           if (err.path) {
//             fieldErrors[err.path[0]] = err.message;
//           }
//         });
//         setFormErrors(fieldErrors);
//       }
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
//       <h1 className="text-2xl font-bold mb-5">Add Merchant</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="number" className="block text-gray-700 font-bold mb-2">Number</label>
//           <input type="number" id="number" name="number" value={formData.number} onChange={handleChange} className={`w-full px-4 py-2 rounded-md border ${formErrors.number ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`} />
//           {formErrors.number && <p className="text-red-500">{formErrors.number}</p>}
//         </div>

//         <div className="mb-4">
//           <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Merchant Name</label>
//           <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-2 rounded-md border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`} />
//           {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}
//         </div>
//         <div className="mb-4">
//           <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
//           <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className={`w-full px-4 py-2 rounded-md border ${formErrors.address ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`} />
//           {formErrors.address && <p className="text-red-500">{formErrors.address}</p>}
//         </div>
//         <div className="mb-4">
//           <label htmlFor="projectChiefName" className="block text-gray-700 font-bold mb-2">Project Chief Name</label>
//           <input type="text" id="projectChiefName" name="projectChiefName" value={formData.projectChiefName} onChange={handleChange} className={`w-full px-4 py-2 rounded-md border ${formErrors.projectChiefName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`} />
//           {formErrors.projectChiefName && <p className="text-red-500">{formErrors.projectChiefName}</p>}
//         </div>
//         <div className="mb-4">
//           <label htmlFor="vatTax" className="block text-gray-700 font-bold mb-2">VAT/Tax</label>
//           <input type="text" id="vatTax" name="vatTax" value={formData.vatTax} onChange={handleChange} className={`w-full px-4 py-2 rounded-md border ${formErrors.vatTax ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`} />
//           {formErrors.vatTax && <p className="text-red-500">{formErrors.vatTax}</p>}
//         </div>
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email ID</label>
//           <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-2 rounded-md border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`} />
//           {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
//         </div>
//         <div className="mb-4">
//           <label htmlFor="panVatNumber" className="block text-gray-700 font-bold mb-2">PAN/VAT Number</label>
//           <input type="text" id="panVatNumber" name="panVatNumber" value={formData.panVatNumber} onChange={handleChange} className={`w-full px-4 py-2 rounded-md border ${formErrors.panVatNumber ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`} />
//           {formErrors.panVatNumber && <p className="text-red-500">{formErrors.panVatNumber}</p>}
//         </div>
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors">Add Merchant</button>
//       </form>
//     </div>
//   );
// };

// export default AddMerchantForm;
