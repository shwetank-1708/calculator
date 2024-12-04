import { useState } from "react";

let firstNum: number[] = [];
let secondNum: number[] = [];
let opClicked = 0;
let first: number;
let second: number;

const App = () => {
  const [value, setValue] = useState<number>(0);
  const [operation, setOperation] = useState("");
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [activeOperation, setActiveOperation] = useState<string | null>(null);

  const numberClicked = (newVal: number) => {
    if (opClicked == 0) {
      firstNum.push(Number(newVal));
      first = Number(firstNum.join(""));
      setValue(first);
    } else {
      secondNum.push(newVal);
      second = Number(secondNum.join(""));
      setValue(second);
    }

    setActiveButton(newVal); // Set the clicked number button as active
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

    if (operation == "+") {
      result = first + second;
      setValue(result);
    } else if (operation == "-") {
      result = first - second;
      setValue(result);
    } else if (operation == "*") {
      result = first * second;
      setValue(result);
    } else if (operation == "/") {
      result = first / second;
      setValue(result);
    }
  };

  const acClicked = () => {
    setValue(0);
    firstNum = [];
    secondNum = [];
  };

  const numberButtonClass = (num: number) =>
    `rounded-full w-[60px] p-4 text-white font-bold text-xl ${
      activeButton === num ? "bg-gray-500" : "bg-gray-900"
    }`;

  const operationButtonClass = (op: string) =>
    `bg-yellow-600 rounded-full w-[60px] p-4 text-white font-bold text-xl ${
      activeOperation === op ? "bg-yellow-400" : "bg-yellow-600"
    }`;

  return (
    <div className="bg-black h-[100vh] flex justify-center items-center flex-col">
      <div className="">
        <input
          type="number"
          onChange={(e) => setValue(Number(e.target.value))}
          value={value}
          className={`text-white bg-black text-right p-4 w-[300px] text-4xl`}
        />
      </div>

      <div className="flex gap-2">
        <button
          className="bg-gray-500 rounded-full w-[60px] p-4 font-bold text-xl"
          onClick={() => acClicked()}
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
            onClick={() => numberClicked(num)}
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
            onClick={() => numberClicked(num)}
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
            onClick={() => numberClicked(num)}
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

      <div className="p-2 flex gap-2">
        <button
          onClick={() => numberClicked(0)}
          className={`bg-gray-600 rounded-full w-[130px] p-4 text-white font-bold text-xl text-left ${
            activeButton === 0 ? "bg-gray-500" : "bg-gray-900"
          }`}
        >
          0
        </button>
        <button
          onClick={() => numberClicked(3)}
          className={numberButtonClass(3)}
        >
          .
        </button>
        <button
          onClick={() => calResult()}
          className="bg-yellow-600 rounded-full w-[60px] p-4 text-white font-bold text-xl"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default App;
