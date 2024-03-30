// import logo from './logo.svg';
import { useState } from 'react';
import './main.css';
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

function App() {
  const[count,setCount] = useState(0);

  function decrement(){
    setCount(count-1);
  }

  function increment(){
    setCount(count+1);
  }

  function reset(){
    setCount(0);
  }

  return (
    <div class="w-[100] h-[100vh] flex flex-col items-center justify-center bg-[#344151] gap-10">
        <div class="text-[#0398d4] font-medium text-[20px]">Increment And Decrement</div>
        <div class="bg-white flex text-[25px] text-[#344151] rounded-sm gap-12 p-3 px-5">

            <button onClick={decrement} class="border-r-2 border-[#bfbfbf] pr-5">
            <FaMinus/>
            </button>
            <div id="counter" class="font-bold">{count}</div>
          
            <button onClick={increment} class="border-l-2 border-[#bfbfbf] pl-5">
            <FaPlus/>
            </button>

        </div>

        <div>
        <button onClick={reset} class=" py-1 pr-5 pl-5 bg-[#0398d4] rounded-sm">reset</button>
        </div>
    </div>
  );
}

export default App;
