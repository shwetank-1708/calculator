// import { useState } from "react";
// import "./App.css";

import { useState } from "react";

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

let firstNum = [];

const App = () => {
  const [value, setValue] = useState("");

  const numberClicked = (newVal: number) => {
    console.log(newVal);
    firstNum.push(newVal);
    console.log(firstNum.join(""));
    setValue(firstNum.join(""));
  };

  const operationClicked = (newOp) => {
    console.log(newOp);
  };

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <input
        type="button"
        placeholder="Enter Your Data"
        value="1"
        onClick={() => numberClicked(1)}
      />
      <input
        type="button"
        placeholder="Enter Your Data"
        value="+"
        onClick={() => operationClicked("+")}
      />
    </div>
  );
};

export default App;
