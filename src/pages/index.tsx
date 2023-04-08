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

  useEffect(() => {
    (async () => {
      await fetch("/api/gethistorial")
        .then((response) => response.json())
        .then((data) => setHistorial(data));
    })();
  }, [historial]);

  console.log(historial);

  const [pc, setPC] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="col-span-1 p-4 w-full h-[100vh] relative z-1 bg-[#9798a8] rounded shadow-lg overflow-hidden">
          <ul className="w-full">
            {pc.map((item, index) => {
              return (
                <article key={index}>
                  <PcList name={item} />
                </article>
              );
            })}
          </ul>
        </div>
        <div className=" col-span-1 bg-[#adaeb8] p-4 w-full relative z-0 px-8 h-[100vh] ">
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
                    <td className="p-10">{new Date(item.createdAt).toLocaleString()}</td>
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
