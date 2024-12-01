// import { useState } from "react";
// import "./App.css";

// let firstNum: number[] = [];
// let secondNum: number[] = [];

// function App() {
//   const [value, setValue] = useState(0);
//   // const [num, setNum] = useState<number[]>([]);
//   const [operation, setOperation] = useState<string | null>(null);

//   const changeHandler = () => {
//     console.log("Change Happened");
//   };

//   const numberClicked = (newVal: number) => {
//     setValue(newVal);
//     firstNum.push(Number(newVal));
//     console.log(firstNum);
//   };

//   const operationClicked = (op: string) => {
//     console.log("Operation Clicked", op);
//     setOperation(op);
//     setVal([]);
//   };

//   // const calculateResult = () => {
//   //   if (num.length < 2) {
//   //     console.log("Insufficient numbers for calculation.");
//   //     return null;
//   //   }

//   //   let result = 0;

//   //   if (operation === "+") {
//   //     result = num.reduce((prev, curr) => prev + curr, 0);
//   //   } else if (operation === "-") {
//   //     result = num.reduce((prev, curr) => prev - curr);
//   //   } else if (operation === "*") {
//   //     result = num.reduce((prev, curr) => prev * curr, 1);
//   //   } else if (operation === "/") {
//   //     result = num.reduce((prev, curr) => (curr !== 0 ? prev / curr : NaN));
//   //   } else {
//   //     console.log("Unknown operation");
//   //     return null;
//   //   }

//   //   console.log("Calculated Result:", result);
//   //   return result;
//   // };

//   // const equalClicked = () => {
//   //   const result = calculateResult();
//   //   console.log(result);
//   //   setVal(result ?? 0);
//   // };

//   const acClicked = () => {
//     setVal(0);
//   };

//   return (
//     <>
//       <div className="bg-black h-[100vh] flex flex-col justify-center items-center">
//         <form>
//           <div className="">
//             <input
//               type="number"
//               value={value}
//               className="text-right text-white text-4xl m-3 px-[0px] w-[300px] bg-black"
//               onChange={changeHandler}
//             />
//           </div>

//           <div className="">
//             <input
//               type="button"
//               value="A/C"
//               className="bg-gray-300 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer hover:bg-gray-200"
//               onClick={acClicked}
//             />
//             <input
//               type="button"
//               value="+/-"
//               className="bg-gray-300 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer hover:bg-gray-200"
//             />
//             <input
//               type="button"
//               value="%"
//               className="bg-gray-300 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer hover:bg-gray-200"
//             />
//             <input
//               type="button"
//               value="/"
//               className="bg-yellow-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer hover:bg-yellow-400"
//               onClick={() => operationClicked("/")}
//             />
//           </div>

//           <div>
//             <input
//               type="button"
//               value="7"
//               className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer hover:bg-gray-400"
//               onClick={() => numberClicked(7)}
//             />
//             <input
//               type="button"
//               value="8"
//               className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer hover:bg-gray-400"
//               onClick={() => numberClicked(8)}
//             />
//             <input
//               type="button"
//               value="9"
//               className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer hover:bg-gray-400"
//               onClick={() => numberClicked(9)}
//             />
//             <input
//               type="button"
//               value="*"
//               className="bg-yellow-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer hover:bg-yellow-400"
//               onClick={() => operationClicked("*")}
//             />
//           </div>

//           <div>
//             <input
//               type="button"
//               value="4"
//               className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer hover:bg-gray-400"
//               onClick={() => numberClicked(4)}
//             />
//             <input
//               type="button"
//               value="5"
//               className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer hover:bg-gray-400"
//               onClick={() => numberClicked(5)}
//             />
//             <input
//               type="button"
//               value="6"
//               className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer hover:bg-gray-400"
//               onClick={() => numberClicked(6)}
//             />
//             <input
//               type="button"
//               value="-"
//               className="bg-yellow-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer hover:bg-yellow-400"
//               onClick={() => operationClicked("-")}
//             />
//           </div>

//           <div>
//             <input
//               type="button"
//               value="1"
//               className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer hover:bg-gray-400"
//               onClick={() => numberClicked(1)}
//             />
//             <input
//               type="button"
//               value="2"
//               className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer hover:bg-gray-400"
//               onClick={() => numberClicked(2)}
//             />
//             <input
//               type="button"
//               value="3"
//               className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer hover:bg-gray-400"
//               onClick={() => numberClicked(3)}
//             />
//             <input
//               type="button"
//               value="+"
//               className="bg-yellow-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer hover:bg-yellow-400"
//               onClick={() => operationClicked("+")}
//             />
//           </div>

//           <div>
//             <input
//               type="button"
//               value="0"
//               className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[150px] text-left cursor-pointer hover:bg-gray-400"
//             />
//             <input
//               type="button"
//               value="."
//               className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer hover:bg-gray-400"
//             />
//             <input
//               type="button"
//               value="="
//               className="bg-yellow-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer hover:bg-yellow-400"
//               onClick={() => equalClicked()}
//             />
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default App;

import { useState } from "react";

let firstNum: number[] = [];
let secondNum: number[] = [];
let opClicked = 0;
let first: number;
let second: number;

const App = () => {
  const [value, setValue] = useState<number>(0);
  const [operation, setOperation] = useState("");

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
          className="text-white bg-black text-right p-4 w-[300px] text-4xl"
        />
      </div>

      <div className="p-2 flex gap-1">
        <button className="bg-gray-300 rounded-full w-[60px] p-4 border-2">
          AC
        </button>
        <button className="bg-gray-300 rounded-full w-[60px] p-4">+/-</button>
        <button className="bg-gray-300 rounded-full w-[60px] p-4">%</button>
        <button
          onClick={() => operationClicked("/")}
          className="bg-yellow-600 rounded-full w-[60px] p-4 text-white"
        >
          /
        </button>
      </div>

      <div className="p-2 flex gap-1">
        <button
          onClick={() => numberClicked(7)}
          className="bg-gray-600  rounded-full w-[60px] p-4 text-white"
        >
          7
        </button>
        <button
          onClick={() => numberClicked(8)}
          className="bg-gray-600  rounded-full w-[60px] p-4 text-white"
        >
          8
        </button>
        <button
          onClick={() => numberClicked(9)}
          className="bg-gray-600  rounded-full w-[60px] p-4 text-white"
        >
          9
        </button>
        <button
          onClick={() => operationClicked("*")}
          className="bg-yellow-600  rounded-full w-[60px] p-4 text-white"
        >
          X
        </button>
      </div>

      <div className="p-2 flex gap-1">
        <button
          onClick={() => numberClicked(4)}
          className="bg-gray-600  rounded-full w-[60px] p-4 text-white"
        >
          4
        </button>
        <button
          onClick={() => numberClicked(5)}
          className="bg-gray-600  rounded-full w-[60px] p-4 text-white"
        >
          5
        </button>
        <button
          onClick={() => numberClicked(6)}
          className="bg-gray-600  rounded-full w-[60px] p-4 text-white"
        >
          6
        </button>
        <button
          onClick={() => operationClicked("-")}
          className="bg-yellow-600  rounded-full w-[60px] p-4 text-white"
        >
          -
        </button>
      </div>

      <div className="p-2 flex gap-1">
        <button
          onClick={() => numberClicked(1)}
          className="bg-gray-600  rounded-full w-[60px] p-4 text-white"
        >
          1
        </button>
        <button
          onClick={() => numberClicked(2)}
          className="bg-gray-600  rounded-full w-[60px] p-4 text-white"
        >
          2
        </button>
        <button
          onClick={() => numberClicked(3)}
          className="bg-gray-600  rounded-full w-[60px] p-4 text-white"
        >
          3
        </button>
        <button
          onClick={() => operationClicked("+")}
          className="bg-yellow-600  rounded-full w-[60px] p-4 text-white"
        >
          +
        </button>
      </div>

      <div className="p-2 flex gap-1">
        <button
          onClick={() => numberClicked(0)}
          className="bg-gray-600  rounded-full w-[130px] p-4 text-white"
        >
          0
        </button>
        <button
          onClick={() => numberClicked(3)}
          className="bg-gray-600  rounded-full w-[60px] p-4 text-white"
        >
          .
        </button>
        <button
          onClick={() => calResult()}
          className="bg-yellow-600  rounded-full w-[60px] p-4 text-white text-left"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default App;
