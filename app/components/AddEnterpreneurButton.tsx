// components/AddMerchantButton.tsx

import React from 'react';
import Link from 'next/link';

const AddEnterpreneurButton: React.FC = () => {
  return (
    <Link href="/AddEnterpreneurForm">
      <button className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
        Add Enterpreneur
      </button>
    </Link>
  );
};

export default AddEnterpreneurButton;
