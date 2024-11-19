import { useState } from "react";
import "./App.css";

function App() {
  const [val, setVal] = useState(0);
  const num: number[] = [];

  const changeHandler = () => {
    console.log("Change Happened");
  };

  const numberClicked = (val: number) => {
    console.log("Number Clicked", val);
    console.log(typeof val);
    setVal(val);
  };

  num.push(val);
  console.log(num);
  console.log(typeof num);

  const operationClicked = (op: string) => {
    console.log("Operation Clicked", op);
    console.log(typeof op);
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
              onClick={() => operationClicked("=")}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
