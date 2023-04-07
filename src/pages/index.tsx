import Image from "next/image";
import { Inter } from "next/font/google";
import PcList from "@/components/PcList";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
          <div className="text-lg font-medium uppercase p-8 text-center border-b border-blue-800 tracking-wide">
          </div>
          <div className="text-center text-sm sm:text-md max-w-sm mx-auto mt-8 text-blue-200 px-8 lg:px-0">
            Stripe offers everything needed to run an online business at scale.
            Get in touch for details.
          </div>
          <div className="mt-8 border border-blue-800 mx-8 lg:mx-16 flex flex-wrap">
            <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-b border-blue-800">
              Account management
            </div>
            <div className="flex items-center justify-center w-1/2 text-center p-4 border-b border-blue-800">
              Volume discounts
            </div>
            <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-blue-800">
              Migration assistance
            </div>
            <div className="flex items-center justify-center w-1/2 text-center p-4">
              Dedicated support
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
