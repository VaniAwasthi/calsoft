import React from "react";

export default function ReferSomeone() {
  return (
    <div className="bg-[#2E3092] flex justify-between items-center px-10 md:px-16 py-8">
      <div className="text-white flex lg:gap-5 lg:flex-row flex-col gap-4 items-center">
        <p className="text-3xl md:text-4xl font-bold">Want to refer someone?</p>
        <p className="text-xl md:text-2xl">Be the difference for someone</p>
      </div>
      <button className="flex justify-center items-center bg-white p-4 rounded-full">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.5198 1.41652L2.1851 0.709551C1.62543 0.697603 1.15534 1.16359 1.14629 1.6819C1.13703 2.20862 1.59235 2.70325 2.11865 2.72072L23.133 3.36139L0.726454 25.768C0.33592 26.1585 0.335919 26.7916 0.726455 27.1822C1.11699 27.5727 1.75013 27.5727 2.14067 27.1822L24.5473 4.7756L25.188 25.79C25.2052 26.3165 25.7001 26.78 26.2268 26.7624C26.7533 26.745 27.1972 26.3137 27.1991 25.7236L26.4922 2.38892C26.4302 1.78908 25.9539 1.45421 25.5198 1.41652Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  );
}
