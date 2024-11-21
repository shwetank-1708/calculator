import { useState } from "react";
import "./App.css";

function App() {
  const [val, setVal] = useState(0);
  const [num, setNum] = useState<number[]>([]);
  const [operation, setOperation] = useState<string | null>(null);

  const changeHandler = () => {
    console.log("Change Happened");
  };

  const numberClicked = (newVal: number) => {
    console.log("Number Clicked", newVal);
    setVal(newVal);
    setNum((prev) => [...prev, newVal]);
    // console.log(num);
  };

  const operationClicked = (op: string) => {
    console.log("Operation Clicked", op);
    setOperation(op);
  };

  const calculateResult = () => {
    if (num.length < 2) {
      console.log("Insufficient numbers for calculation.");
      return null;
    }

    let result = 0;

    if (operation === "+") {
      result = num.reduce((prev, curr) => prev + curr, 0);
    } else if (operation === "-") {
      result = num.reduce((prev, curr) => prev - curr);
    } else if (operation === "*") {
      result = num.reduce((prev, curr) => prev * curr, 1);
    } else if (operation === "/") {
      result = num.reduce((prev, curr) => (curr !== 0 ? prev / curr : NaN));
    } else {
      console.log("Unknown operation");
      return null;
    }

    console.log("Calculated Result:", result);
    return result;
  };

  const equalClicked = () => {
    const result = calculateResult();
    console.log(result);
  };

  return (
    <>
      <div className="bg-black h-[100vh] flex flex-col justify-center items-center">
        <form>
          <div className="">
            <input
              type="number"
              value={val}
              className="text-right text-white text-4xl m-3 px-[0px] w-[300px] bg-black"
              onChange={changeHandler}
            />
          </div>

          <div className="">
            <input
              type="button"
              value="A/C"
              className="bg-gray-300 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer"
            />
            <input
              type="button"
              value="+/-"
              className="bg-gray-300 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer"
            />
            <input
              type="button"
              value="%"
              className="bg-gray-300 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer"
            />
            <input
              type="button"
              value="/"
              className="bg-yellow-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer"
              onClick={() => operationClicked("/")}
            />
          </div>

          <div>
            <input
              type="button"
              value="7"
              className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer"
              onClick={() => numberClicked(7)}
            />
            <input
              type="button"
              value="8"
              className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer"
              onClick={() => numberClicked(8)}
            />
            <input
              type="button"
              value="9"
              className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer"
              onClick={() => numberClicked(9)}
            />
            <input
              type="button"
              value="*"
              className="bg-yellow-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer"
              onClick={() => operationClicked("*")}
            />
          </div>

          <div>
            <input
              type="button"
              value="4"
              className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer"
              onClick={() => numberClicked(4)}
            />
            <input
              type="button"
              value="5"
              className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer"
              onClick={() => numberClicked(5)}
            />
            <input
              type="button"
              value="6"
              className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer"
              onClick={() => numberClicked(6)}
            />
            <input
              type="button"
              value="-"
              className="bg-yellow-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer"
              onClick={() => operationClicked("-")}
            />
          </div>

          <div>
            <input
              type="button"
              value="1"
              className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer"
              onClick={() => numberClicked(1)}
            />
            <input
              type="button"
              value="2"
              className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer"
              onClick={() => numberClicked(2)}
            />
            <input
              type="button"
              value="3"
              className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer"
              onClick={() => numberClicked(3)}
            />
            <input
              type="button"
              value="+"
              className="bg-yellow-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer"
              onClick={() => operationClicked("+")}
            />
          </div>

          <div>
            <input
              type="button"
              value="0"
              className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[150px] text-left cursor-pointer"
            />
            <input
              type="button"
              value="."
              className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer"
            />
            <input
              type="button"
              value="="
              className="bg-yellow-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer"
              onClick={() => equalClicked()}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
