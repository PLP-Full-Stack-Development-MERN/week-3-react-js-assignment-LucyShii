import React, { useState } from 'react';

function Counter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const reset = () => {
    setCount(initialCount);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Counter</h2>
      <div className="flex items-center justify-center mb-4">
        <span className="text-4xl font-bold px-8 py-4 bg-gray-100 rounded-md">{count}</span>
      </div>
      <div className="flex space-x-2 justify-center">
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Reset
        </button>
        <button
          onClick={increment}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;