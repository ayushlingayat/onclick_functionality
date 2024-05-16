import React, { useState } from 'react';

const App = () => {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);

  const handleButtonClick = () => {
    // Filter out the last item in the array
    setVal((prevVal) => prevVal.slice(0, -1));
  };

  return (
    <div className='p-5'>
      {val.map((item) => (
        <h1 key={item}>{item}</h1>
      ))}
      <button
        onClick={handleButtonClick}
        className="bg-blue-600 px-2 py-1 rounded-md mt-4 text-white"
      >
        Click Me
      </button>
    </div>
  );
};

export default App;
