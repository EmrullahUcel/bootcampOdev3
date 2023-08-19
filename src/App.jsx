import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(0);

  const handleNum1 = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2 = (e) => {
    setNum2(e.target.value);
  };

  const handleOperation = (e) => {
    setOperation(e.target.value);
  };

  const handleClear = () => {
    setNum1("");
    setNum2("");
    setOperation("");
    setResult(0);
  };

  const calculateResult = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    switch (operation) {
      case "+":
        setResult(number1 + number2);
        setNum1("");
        setNum2("");
        break;
      case "-":
        setResult(number1 - number2);
        setNum1("");
        setNum2("");
        break;
      case "*":
        setResult(number1 * number2);
        setNum1("");
        setNum2("");
        break;
      case "/":
        setResult(number1 / number2);
        setNum1("");
        setNum2("");
        break;
      default:
        setResult(0);
        break;
    }
  };

  return (
    <div className="w-[300px] h-[300px] bg-lime-300">
      <div className="flex flex-col">
        <input
          value={num1}
          onChange={handleNum1}
          type="number"
          placeholder="number 1"
          className="bg-lime-300"
        />
        <input
          value={num2}
          onChange={handleNum2}
          type="number"
          placeholder="number 2"
          className="bg-lime-300"
        />
      </div>
      <div>
        <button
          className="w-28 h-16 bg-blue-600 text-white border-solid border-4"
          onClick={handleOperation}
          value="+"
        >
          +
        </button>
        <button
          className="w-28 h-16 bg-blue-600 text-white border-solid border-4"
          onClick={handleOperation}
          value="-"
        >
          -
        </button>
        <button
          className="w-28 h-16 bg-blue-600 text-white border-solid border-4"
          onClick={handleOperation}
          value="/"
        >
          /
        </button>
        <button
          className="w-28 h-16 bg-blue-600 text-white border-solid border-4"
          onClick={handleOperation}
          value="*"
        >
          *
        </button>
        <button
          className="w-28 h-16 bg-blue-600 text-white border-solid border-4"
          onClick={calculateResult}
        >
          Calculate
        </button>
        <button
          className="w-28 h-16 bg-red-600 text-white border-solid border-4"
          onClick={handleClear}
        >
          C
        </button>
      </div>
      <p>Result: {result}</p>
    </div>
  );
}

export default App;
