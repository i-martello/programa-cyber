import axios from "axios";
import React, { useEffect, useState } from "react";

const Cronometro = ({isActive, precioInicial, precioPorHora}: any) => {
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
  const [precio, setPrecio] = useState(precioInicial);
  

  useEffect(() => {
    const idInterval = setInterval(() => {
      if (segundos === 59) {
        setSegundos(0);
        if (minutos === 59) {
          setMinutos(0);
          setHoras(horas + 1);
        } else {
          setMinutos(minutos + 1);
        }
      } else {
        setSegundos(segundos + 1);
      }
    }, 1000);

    return () => {
      clearInterval(idInterval);
    };
  }, [segundos, minutos, horas, precio]);  

  const handleButton = async () => {
    const data = { segundos, minutos, horas, precio };
    await fetch("/api/historial", {
      method: "POST",
      body: JSON.stringify(data),
    });
    isActive(false)
  };

  useEffect(() => {
    const idIntervalPrecio = setInterval(() => {
      setPrecio(Math.round(precio + (precioPorHora / 60)));
    }, 60000);

    return () => {
      clearInterval(idIntervalPrecio);
    };
  }, [precio]);

  return (
    <div className="flex">
      <div className=" flex ml-[15vh] mr-[5vh]">
      <span>
        {horas.toString().length === 2 ? (
          <div>{horas}:</div>
        ) : (
          <div>0{horas}:</div>
        )}
      </span>
      <span>
        {minutos.toString().length === 2 ? (
          <div>{minutos}:</div>
        ) : (
          <div>0{minutos}:</div>
        )}
      </span>
      <span>
        {segundos.toString().length === 2 ? (
          <div>{segundos}</div>
        ) : (
          <div>0{segundos}</div>
        )}
      </span>
      </div>
      <div className="mx-10">${precio}</div>
      <button
        type="button"
        className="mx-10 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={handleButton}
      >
        Cerrar Contador
      </button>
    </div>
  );
};

export default Cronometro;
