import React, { useState } from "react";
import Cronometro from "./Cronometro";

const PcList = ({name}: any) => {

  const [active, setActive] = useState(false)

  const activeButton = ()=>{
    setActive(true)
    
  }

  const stopButton = ()=>{
    setActive(false)
    
  }
  
  return (
    <li className="w-full text-[30px] flex cursor-default border-b-2 border-neutral-800 border-opacity-100 py-6  dark:border-opacity-50">
      PC {name}
      <div>
        <button
          type="button"
          className="mx-10 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={activeButton}
        >
          Iniciar Contador
        </button>
        <button
          type="button"
          className="mx-10 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={stopButton}
        >
          Cerrar Contador
        </button>
      </div>
      <div>{ active ?
        <Cronometro/> : <div>cerrado</div>
        }</div>
    </li>
  );
};

export default PcList;
