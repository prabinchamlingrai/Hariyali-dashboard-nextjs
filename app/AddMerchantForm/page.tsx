'use client'
import React, { useState } from 'react';
import { ZodError } from 'zod';
import merchantSchema from '../merchantSchema';

// Define Zod schema for form validation


const AddMerchantForm: React.FC = () => {
  const [formData, setFormData] = useState({
    number: '',
    name: '',
    address: '',
    projectChiefName: '',
    vatTax: '',
    email: '',
    panVatNumber: '',
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
        number: '',
        name: '',
        address: '',
        projectChiefName: '',
        vatTax: '',
        email: '',
        panVatNumber: '',
      });
      // Clear any previous errors
      setFormErrors({});
    } catch (error) {
      if (error instanceof ZodError) {
        // If there are validation errors, set them in state
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path) {
            fieldErrors[err.path[0]] = err.message;
          }
        });
        setFormErrors(fieldErrors);
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-5">Add Merchant</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="number" className="block text-gray-700 font-bold mb-2">Number</label>
          <input type="number" id="number" name="number" value={formData.number} onChange={handleChange} className={`w-full px-4 py-2 rounded-md border ${formErrors.number ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`} />
          {formErrors.number && <p className="text-red-500">{formErrors.number}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Merchant Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-2 rounded-md border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`} />
          {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className={`w-full px-4 py-2 rounded-md border ${formErrors.address ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`} />
          {formErrors.address && <p className="text-red-500">{formErrors.address}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="projectChiefName" className="block text-gray-700 font-bold mb-2">Project Chief Name</label>
          <input type="text" id="projectChiefName" name="projectChiefName" value={formData.projectChiefName} onChange={handleChange} className={`w-full px-4 py-2 rounded-md border ${formErrors.projectChiefName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`} />
          {formErrors.projectChiefName && <p className="text-red-500">{formErrors.projectChiefName}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="vatTax" className="block text-gray-700 font-bold mb-2">VAT/Tax</label>
          <input type="text" id="vatTax" name="vatTax" value={formData.vatTax} onChange={handleChange} className={`w-full px-4 py-2 rounded-md border ${formErrors.vatTax ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`} />
          {formErrors.vatTax && <p className="text-red-500">{formErrors.vatTax}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email ID</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-2 rounded-md border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`} />
          {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="panVatNumber" className="block text-gray-700 font-bold mb-2">PAN/VAT Number</label>
          <input type="text" id="panVatNumber" name="panVatNumber" value={formData.panVatNumber} onChange={handleChange} className={`w-full px-4 py-2 rounded-md border ${formErrors.panVatNumber ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`} />
          {formErrors.panVatNumber && <p className="text-red-500">{formErrors.panVatNumber}</p>}
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors">Add Merchant</button>
      </form>
    </div>
  );
};

export default AddMerchantForm;
