// components/NetSalesCard.js
import React from 'react';

const Errors = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md h-72 w-72">
      <div className="flex items-center mt-2 text-4xl font-bold text-blue-600">
        80.86 <span className="text-2xl text-green-500">(+33.00%)</span>
      </div>
      <div className="flex flex-col items-center mt-1 text-sm text-gray-700">
        Total Net Sales <span className="text-gray-500">(Actual - Forecast%)</span>
      </div>
    </div>
  );
};

export default Errors;
