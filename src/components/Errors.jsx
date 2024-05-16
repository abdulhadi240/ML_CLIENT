import React from 'react';

const Errors = ({ actual, predicted }) => {
  // Calculate the sum of absolute errors
  const sumOfErrors = actual.reduce((sum, actualValue, index) => {
    const predictedValue = predicted[index];
    return sum + Math.abs(actualValue - predictedValue);
  }, 0);
  
  // Calculate the sum of actual values
  const sumOfActual = actual.reduce((sum, value) => sum + value, 0);
  
  // Calculate the percentage error
  const percentageError = (sumOfErrors / sumOfActual) * 100;

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md h-72 w-72">
      <div className="flex items-center mt-2 text-4xl font-bold text-blue-600">
        {sumOfErrors.toFixed(2)}
      </div>
      <div className="flex items-center mt-1 text-2xl text-green-500">
        {percentageError.toFixed(2)}%
      </div>
      <div className="flex flex-col items-center mt-1 text-sm text-gray-700">
        Total Error <span className="text-gray-500">(Actual - Forecast)</span>
      </div>
      
    </div>
  );
};

export default Errors;
