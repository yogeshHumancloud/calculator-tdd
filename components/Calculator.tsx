import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");

  const handleNumberClick = (number: string) => {
    setDisplay((prevDisplay) =>
      prevDisplay === "0" ? number : prevDisplay + number
    );
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-lg max-w-xs mx-auto">
      <div
        data-testid="calculator-display"
        className="w-full p-4 mb-4 text-right bg-white rounded shadow text-2xl font-mono"
      >
        {display}
      </div>
      <div className="grid grid-cols-3 gap-2 w-full">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
          <button
            key={number}
            onClick={() => handleNumberClick(number.toString())}
            className="p-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
