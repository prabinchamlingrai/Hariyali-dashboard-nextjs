// components/AddMerchantButton.tsx

import React from 'react';
import Link from 'next/link';

const AddMerchantButton: React.FC = () => {
  return (
    <Link href="/AddMerchantForm">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add Merchant
      </button>
    </Link>
  );
};

export default AddMerchantButton;
