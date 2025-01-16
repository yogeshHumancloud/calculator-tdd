"use client";
import { useState } from "react";

type Operation = "+" | "-" | "×" | null;

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [firstNumber, setFirstNumber] = useState<number | null>(null);
  const [operation, setOperation] = useState<Operation>(null);
  const [newNumber, setNewNumber] = useState(true);

  const handleNumberClick = (number: string) => {
    if (newNumber) {
      setDisplay(number);
      setNewNumber(false);
    } else {
      setDisplay((prevDisplay) => prevDisplay + number);
    }
  };

  const handleOperationClick = (op: Operation) => {
    setFirstNumber(parseFloat(display));
    setOperation(op);
    setNewNumber(true);
  };

  const calculateResult = () => {
    if (firstNumber === null || operation === null) return;

    const secondNumber = parseFloat(display);
    let result: number;

    switch (operation) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "×":
        result = firstNumber * secondNumber;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setFirstNumber(null);
    setOperation(null);
    setNewNumber(true);
  };

  const operations: Operation[] = ["+", "-", "×"];

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-lg max-w-xs mx-auto">
      <div
        data-testid="calculator-display"
        className="w-full p-4 mb-4 text-right bg-white rounded shadow text-2xl font-mono"
      >
        {display}
      </div>
      <div className="grid grid-cols-4 gap-2 w-full">
        {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((number) => (
          <button
            key={number}
            onClick={() => handleNumberClick(number.toString())}
            className="p-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            {number}
          </button>
        ))}
        {operations.map((op) => (
          <button
            key={op}
            onClick={() => handleOperationClick(op)}
            className="p-4 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
          >
            {op}
          </button>
        ))}
        <button
          onClick={calculateResult}
          className="p-4 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
