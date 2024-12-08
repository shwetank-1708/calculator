import { useState } from "react";

let firstNum: string[] = [];
let secondNum: string[] = [];
let opClicked = 0;
let first: number;
let second: number;

const Calc = () => {
  const [value, setValue] = useState<number | string>(0); // Allow string for handling decimals
  const [operation, setOperation] = useState("");
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [activeOperation, setActiveOperation] = useState<string | null>(null);

  const numberClicked = (newVal: string) => {
    if (opClicked === 0) {
      if (newVal === "." && firstNum.includes(".")) return; // Prevent duplicate decimal points
      firstNum.push(newVal);
      first = parseFloat(firstNum.join(""));
      setValue(firstNum.join("")); // Update value as string
    } else {
      if (newVal === "." && secondNum.includes(".")) return; // Prevent duplicate decimal points
      secondNum.push(newVal);
      second = parseFloat(secondNum.join(""));
      setValue(secondNum.join("")); // Update value as string
    }

    setActiveButton(newVal === "." ? null : Number(newVal)); // Set active button for numbers
    setTimeout(() => {
      setActiveButton(null); // Reset after a short delay
    }, 50);
  };

  const operationClicked = (newOp: string) => {
    opClicked = +1;
    setOperation(newOp);

    setActiveOperation(newOp); // Set the clicked operation button as active
    setTimeout(() => {
      setActiveOperation(null); // Reset after a short delay
    }, 50);
  };

  const calResult = () => {
    let result;

    if (operation === "+") {
      result = first + second;
    } else if (operation === "-") {
      result = first - second;
    } else if (operation === "*") {
      result = first * second;
    } else if (operation === "/") {
      result = first / second;
    }

    setValue(result);
    firstNum = [String(result)]; // Store result as the next first number
    secondNum = [];
    opClicked = 0;
  };

  const acClicked = () => {
    setValue(0);
    firstNum = [];
    secondNum = [];
    opClicked = 0;
  };

  const numberButtonClass = (num: number) =>
    `rounded-full w-[60px] p-4 text-white font-bold text-xl ${
      activeButton === num ? "bg-gray-500" : "bg-gray-900"
    }`;

  const operationButtonClass = (op: string) =>
    `rounded-full w-[60px] p-4 text-white font-bold text-xl ${
      activeOperation === op ? "bg-yellow-400" : "bg-yellow-600"
    }`;

  return (
    <div className="bg-black h-[100vh] flex justify-center items-center flex-col">
      <div>
        <input
          type="text"
          readOnly
          value={value}
          className="text-white bg-black text-right p-4 w-[300px] text-4xl"
        />
      </div>

      <div className="flex gap-2">
        <button
          className="bg-gray-500 rounded-full w-[60px] p-4 font-bold text-xl"
          onClick={acClicked}
        >
          AC
        </button>
        <button className="bg-gray-500 rounded-full w-[60px] p-4 font-bold text-xl">
          +/-
        </button>
        <button className="bg-gray-500 rounded-full w-[60px] p-4 font-bold text-xl">
          %
        </button>
        <button
          onClick={() => operationClicked("/")}
          className={operationButtonClass("/")}
        >
          /
        </button>
      </div>

      <div className="p-2 flex gap-2">
        {[7, 8, 9].map((num) => (
          <button
            key={num}
            onClick={() => numberClicked(String(num))}
            className={numberButtonClass(num)}
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => operationClicked("*")}
          className={operationButtonClass("*")}
        >
          X
        </button>
      </div>

      <div className="flex gap-2">
        {[4, 5, 6].map((num) => (
          <button
            key={num}
            onClick={() => numberClicked(String(num))}
            className={numberButtonClass(num)}
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => operationClicked("-")}
          className={operationButtonClass("-")}
        >
          -
        </button>
      </div>

      <div className="p-2 flex gap-2">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => numberClicked(String(num))}
            className={numberButtonClass(num)}
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => operationClicked("+")}
          className={operationButtonClass("+")}
        >
          +
        </button>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => numberClicked("0")}
          className={`bg-gray-600 rounded-full w-[130px] p-4 text-white font-bold text-xl text-left ${
            activeButton === 0 ? "bg-gray-500" : "bg-gray-900"
          }`}
        >
          0
        </button>
        <button
          onClick={() => numberClicked(".")}
          className={`rounded-full w-[60px] p-4 text-white font-bold text-xl ${
            activeButton === null ? "bg-gray-500" : "bg-gray-900"
          }`}
        >
          .
        </button>
        <button
          onClick={calResult}
          className="bg-yellow-600 rounded-full w-[60px] p-4 text-white font-bold text-xl"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calc;
