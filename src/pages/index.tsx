import Image from "next/image";
import { Inter } from "next/font/google";
import PcList from "@/components/PcList";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

interface historialType {
  segundos: number;
  minutos: number;
  horas: number;
  precio: number;
  createdAt: Date;
}

export default function Home() {
  const [historial, setHistorial] = useState<historialType[]>([]);
  const [botonPrecio, setBotonPrecio] = useState<boolean>(false);
  const [precioInicial, setPrecioInicial] = useState(0);
  const [precioPorHora, setPrecioPorHora] = useState(0);

  useEffect(() => {
    (async () => {
      await fetch("/api/gethistorial")
        .then((response) => response.json())
        .then((data) => setHistorial(data));
    })();
  }, [historial]);
  
  

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setBotonPrecio(false);
  }

  const [pc, setPC] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <div>
      {botonPrecio && (
        <div>
          <div className="absolute z-40 h-full w-full flex justify-center items-center opacity-50 bg-black"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 h-[40%] w-[40%] bg-white rounded-lg">
            <h2 className="text-center m-8 text-3xl">Cambiar precio</h2>
            <form onSubmit={handleSubmit}>
            <div className="flex flex-col m-10">
              <div className="m-auto p-5">
              <label className="text-center text-2xl">Precio Inicial:</label>
              <input type="number" className="m-2 p-2" onChange={(e)=>setPrecioInicial(parseInt(e.target.value))}></input>
              </div>
              <div className="m-auto p-5">
              <label  className="text-center text-2xl">Precio por Hora:</label>
              <input type="number" className="m-2 p-2" onChange={(e)=>setPrecioPorHora(parseInt(e.target.value))}></input>
              </div>
            </div>
            <div className="flex justify-center items-end">
              <button
                type="submit"
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Confirmar
              </button>
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                onClick={()=> setBotonPrecio(false)}

              >
                Cancelar
              </button>
            </div>
            </form>
          </div>
        </div>
      )}
      <nav className="bg-white fixed z-30 w-full border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center p-4">
          <a href="#" className="flex items-center">
            <span className="self-center text-2xl mx-20 font-semibold whitespace-nowrap dark:text-white">
              ControlCyber
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <button
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                  onClick={()=> setBotonPrecio(true)}
                >
                  Cambiar precio
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="grid grid-cols-2">
        <div className="col-span-1 p-4 w-full h-[95vh] mt-[5%] relative z-1 bg-[#9798a8] rounded shadow-lg overflow-hidden">
          <ul className="w-full">
            {pc.map((item, index) => {
              return (
                <article key={index}>
                  <PcList name={item} precioInicial={precioInicial} precioPorHora={precioPorHora} />
                </article>
              );
            })}
          </ul>
        </div>
        <div className="col-span-1 bg-[#adaeb8] p-6 w-full mt-[5%]  relative z-0 px-8 h-[95vh] overflow-y-auto">
          <table className="border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="p-4">Tiempo</th>
                <th className="p-4">Precio</th>
                <th className="p-4">Hora</th>
              </tr>
            </thead>
            <tbody>
              {historial.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="flex p-10">
                      <span>
                        {item.horas.toString().length === 2 ? (
                          <div>{item.horas}:</div>
                        ) : (
                          <div>0{item.horas}:</div>
                        )}
                      </span>
                      <span>
                        {item.minutos.toString().length === 2 ? (
                          <div>{item.minutos}:</div>
                        ) : (
                          <div>0{item.minutos}:</div>
                        )}
                      </span>
                      <span>
                        {item.segundos.toString().length === 2 ? (
                          <div>{item.segundos}</div>
                        ) : (
                          <div>0{item.segundos}</div>
                        )}
                      </span>
                    </td>
                    <td className="p-10">${item.precio}</td>
                    <td className="p-10">
                      {new Date(item.createdAt).toLocaleString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
