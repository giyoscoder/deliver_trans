import React from "react";
import { box } from "../Assets/images";

const Kомпании = () => {
  return (
    <div className="bg-[#F3F9FF] pt-[60px] pb-[100px]">
      <div className="container">
          <h1 className="title pb-[60px]">О компании</h1>
          <div className="grid grid-cols-2 gap-[57px]">
            <div >
              <p className="font-bold text-3xl">Lorem ipsum dolor sit amet</p>
              <p className="font-semibold text-lg text mt-10">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate <br /> <br /> At
                vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditii Sint occaecati cupiditate non provident, similique sunt in
                culpa qui officia deserunt <br /> <br /> Cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum. <br /> <br /> Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate
              </p>
            </div>
            <div className="translate-x-[75px]">
                <img src={box} alt="" className="h-full w-full rounded-xl"/>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Kомпании;
