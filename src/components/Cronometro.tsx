import React, { useEffect, useState } from "react";

const Cronometro = () => {
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
  const [precio, setPrecio] = useState(20);

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
    }
  }, [segundos, minutos, horas, precio]);

  useEffect(() => {
    const idIntervalPrecio = setInterval(()=>{
      setPrecio(Math.round(precio + 40))
    },12000)
  
    return () => {
      clearInterval(idIntervalPrecio);
    }
  }, [precio])
  

  return (
    <div className="flex">
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
      <div className="mx-10">
        {precio}
      </div>
    </div>
  );
};

export default Cronometro;
