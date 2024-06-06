// pages/index.js
import { useState } from 'react';

const calculateError = ({array1, array2}) => {
  if (array1.length !== array2.length) {
    throw new Error("Arrays must have the same length");
  }

  let error = 0;
  for (let i = 0; i < array1.length; i++) {
    error += (array1[i] - array2[i]) ** 2;
  }
  const errorCalculated = error / array1.length;
  return errorCalculated;
};

const Error_percentage = ({actual , predicted}) => {
  const [error, setError] = useState(null);

  const handleCalculate = () => {
    try {
      const result = calculateError(actual, predicted);
      setError(result);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div>
      <h1>Array Error Calculator</h1>
      <p>Array 1: {actual}</p>
      <p>Array 2: {predicted}</p>
      <button onClick={handleCalculate}>Calculate Error</button>
      {error !== null && (
        <div>
          <h2>Calculated Error</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Error_percentage;
