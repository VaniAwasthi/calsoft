import React from "react";

export default function ReliabilityMatters({
  data = [
    "Balance velocity and stability",
    "Detect root cause beyond metrics noise",
    "Prevent incident recurrence with limited bandwidth",
    "Align error budgets with business SLAs",
    "Evolve legacy ops into product-centric reliability",
  ],
}) {
  return (
    <div>
      <div className="relative">
        <svg
          width="741"
          height="403"
          viewBox="0 0 741 403"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M123.5 125L0 278.882H20.6577C19.649 284.788 19.1059 290.851 19.1059 297.052C19.1059 355.577 65.8524 403 123.5 403C181.148 403 227.894 355.558 227.894 297.052C227.894 290.851 227.332 284.788 226.342 278.882H247L123.5 125Z"
            fill="#E1E1E1"
          />
          <path
            d="M247.5 279L372 124.564H351.175C352.192 118.637 352.739 112.552 352.739 106.329C352.739 47.5932 305.614 0 247.5 0C189.386 0 142.261 47.6129 142.261 106.329C142.261 112.552 142.828 118.637 143.825 124.564H123L247.5 279Z"
            fill="#E1E1E1"
          />
          <path
            d="M370.99 125L247 278.882H267.74C266.727 284.788 266.182 290.851 266.182 297.052C266.182 355.577 313.114 403 371.01 403C428.906 403 475.818 355.558 475.818 297.052C475.818 290.851 475.253 284.788 474.26 278.882H495L371.01 125H370.99Z"
            fill="#E1E1E1"
          />
          <path
            d="M494.01 279L618 125.118H597.26C598.273 119.212 598.818 113.149 598.818 106.948C598.818 48.4226 551.886 1 493.99 1C436.094 1 389.182 48.4423 389.182 106.948C389.182 113.149 389.747 119.212 390.74 125.118H370L493.99 279H494.01Z"
            fill="#E1E1E1"
          />
          <path
            d="M617.49 125L494 278.882H514.656C513.647 284.788 513.104 290.851 513.104 297.052C513.104 355.577 559.847 403 617.49 403C675.133 403 721.896 355.558 721.896 297.052C721.896 290.851 721.333 284.788 720.344 278.882H741L617.51 125H617.49Z"
            fill="#E1E1E1"
          />
        </svg>
        <div
          className="absolute bottom-3.5 left-9 size-44 p-[6px] rounded-full bg-gradient-to-r from-[#2E3092] to-[#BA0007] hover:scale-105 transition-all
        "
        >
          <div className="size-full bg-white rounded-full flex justify-center items-center p-6 text-center font-semibold">
            {data[0]}
          </div>
        </div>
        <div
          className="absolute top-3.5 left-40 size-44 p-[6px] rounded-full bg-gradient-to-r from-[#2E3092] to-[#BA0007] hover:scale-105 transition-all
        "
        >
          <div className="size-full bg-white rounded-full flex justify-center items-center p-6 text-center font-semibold">
            {data[1]}
          </div>
        </div>
        <div
          className="absolute bottom-3.5 left-[17.75rem] size-44 p-[6px] rounded-full bg-gradient-to-r from-[#2E3092] to-[#BA0007] hover:scale-105 transition-all
        "
        >
          <div className="size-full bg-white rounded-full flex justify-center items-center p-6 text-center font-semibold">
            {data[2]}
          </div>
        </div>
        <div
          className="absolute top-3.5 left-[25.45rem] size-44 p-[6px] rounded-full bg-gradient-to-r from-[#2E3092] to-[#BA0007] hover:scale-105 transition-all
        "
        >
          <div className="size-full bg-white rounded-full flex justify-center items-center p-6 text-center font-semibold">
            {data[3]}
          </div>
        </div>
        <div
          className="absolute bottom-3.5 left-[33.1rem] size-44 p-[6px] rounded-full bg-gradient-to-r from-[#2E3092] to-[#BA0007] hover:scale-105 transition-all
        "
        >
          <div className="size-full bg-white rounded-full flex justify-center items-center p-6 text-center font-semibold">
            {data[4]}
          </div>
        </div>
      </div>
    </div>
  );
}
