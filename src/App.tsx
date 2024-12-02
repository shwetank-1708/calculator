import { useState } from "react";

let firstNum: number[] = [];
let secondNum: number[] = [];
let opClicked = 0;
let first: number;
let second: number;

const App = () => {
  const [value, setValue] = useState<number>(0);
  const [operation, setOperation] = useState("");
  const [isActive, setIsActive] = useState(false);

  const numberClicked = (newVal: number) => {
    if (opClicked == 0) {
      firstNum.push(Number(newVal));
      first = Number(firstNum.join(""));
      setValue(first);
      console.log("first = ", opClicked);
    } else {
      secondNum.push(newVal);
      second = Number(secondNum.join(""));
      setValue(second);
      console.log("second = ", opClicked);
    }
    // setIsActive(!isActive);
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 50);
  };

  const operationClicked = (newOp: string) => {
    console.log(newOp);
    opClicked = +1;
    console.log(opClicked);
    setOperation(newOp);
    // setValue("");
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
          className={`bg-gray-500 rounded-full w-[60px] p-4 font-bold text-xl`}
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
          className="bg-yellow-600 rounded-full w-[60px] p-4 text-white font-bold text-xl"
        >
          /
        </button>
      </div>

      <div className="p-2 flex gap-2">
        <button
          onClick={() => numberClicked(7)}
          className={`rounded-full w-[60px] p-4 text-white font-bold text-xl ${
            isActive ? "bg-gray-500" : "bg-gray-900"
          }`}
        >
          7
        </button>
        <button
          onClick={() => numberClicked(8)}
          className={`rounded-full w-[60px] p-4 text-white font-bold text-xl ${
            isActive ? "bg-gray-500" : "bg-gray-900"
          }`}
        >
          8
        </button>
        <button
          onClick={() => numberClicked(9)}
          className="bg-gray-600  rounded-full w-[60px] p-4 text-white font-bold text-xl"
        >
          9
        </button>
        <button
          onClick={() => operationClicked("*")}
          className="bg-yellow-600  rounded-full w-[60px] p-4 text-white font-bold text-xl"
        >
          X
        </button>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => numberClicked(4)}
          className="bg-gray-600  rounded-full w-[60px] p-4 text-white font-bold text-xl"
        >
          4
        </button>
        <button
          onClick={() => numberClicked(5)}
          className="bg-gray-600  rounded-full w-[60px] p-4 text-white font-bold text-xl"
        >
          5
        </button>
        <button
          onClick={() => numberClicked(6)}
          className="bg-gray-600  rounded-full w-[60px] p-4 text-white font-bold text-xl"
        >
          6
        </button>
        <button
          onClick={() => operationClicked("-")}
          className="bg-yellow-600  rounded-full w-[60px] p-4 text-white font-bold text-xl"
        >
          -
        </button>
      </div>

      <div className="p-2 flex gap-2">
        <button
          onClick={() => numberClicked(1)}
          className="bg-gray-600  rounded-full w-[60px] p-4 text-white font-bold text-xl"
        >
          1
        </button>
        <button
          onClick={() => numberClicked(2)}
          className="bg-gray-600  rounded-full w-[60px] p-4 text-white font-bold text-xl"
        >
          2
        </button>
        <button
          onClick={() => numberClicked(3)}
          className="bg-gray-600  rounded-full w-[60px] p-4 text-white font-bold text-xl"
        >
          3
        </button>
        <button
          onClick={() => operationClicked("+")}
          className="bg-yellow-600  rounded-full w-[60px] p-4 text-white font-bold text-xl"
        >
          +
        </button>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => numberClicked(0)}
          className="bg-gray-600  rounded-full w-[130px] p-4 text-white font-bold text-xl text-left"
        >
          0
        </button>
        <button
          onClick={() => numberClicked(3)}
          className="bg-gray-600  rounded-full w-[60px] p-4 text-white font-bold text-xl"
        >
          .
        </button>
        <button
          onClick={() => calResult()}
          className="bg-yellow-600  rounded-full w-[60px] p-4 text-white font-bold text-xl"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default App;
