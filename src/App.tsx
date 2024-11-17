import "./App.css";

function App() {
  return (
    <>
      <div className="bg-black h-[100vh] flex flex-col justify-center items-center">
        <div className="">
          <input
            type="number"
            value="0"
            className="text-right text-white text-4xl m-3 px-[0px] w-[300px] bg-black"
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
          />
        </div>

        <div>
          <input
            type="button"
            value="7"
            className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer"
          />
          <input
            type="button"
            value="8"
            className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer"
          />
          <input
            type="button"
            value="9"
            className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer"
          />
          <input
            type="button"
            value="*"
            className="bg-yellow-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer"
          />
        </div>

        <div>
          <input
            type="button"
            value="4"
            className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer"
          />
          <input
            type="button"
            value="5"
            className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer"
          />
          <input
            type="button"
            value="6"
            className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer"
          />
          <input
            type="button"
            value="-"
            className="bg-yellow-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer"
          />
        </div>

        <div>
          <input
            type="button"
            value="1"
            className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer"
          />
          <input
            type="button"
            value="2"
            className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer"
          />
          <input
            type="button"
            value="3"
            className="bg-gray-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer"
          />
          <input
            type="button"
            value="+"
            className="bg-yellow-500 p-5 rounded-full text-xl m-1 w-[70px] cursor-pointer"
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
          />
        </div>
      </div>
    </>
  );
}

export default App;
