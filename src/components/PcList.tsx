import React, { useState } from "react";
import Cronometro from "./Cronometro";

const PcList = ({name}: any) => {

  const [active, setActive] = useState(false)

  const activeButton = ()=>{
    setActive(true)
    
  }
  
  return (
    <li className="w-full text-[30px] flex cursor-default border-b-2 border-neutral-800 border-opacity-100 py-6  dark:border-opacity-50">
      PC {name}
      {!active &&
      <div>
        <button
          type="button"
          className="mx-10 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={activeButton}
        >
          Iniciar Contador
        </button>
      </div>
      }
      <div>{ active ?
        <Cronometro isActive={setActive} /> : <div className="mx-5">cerrado</div>
        }</div>
    </li>
  );
};

export default PcList;
