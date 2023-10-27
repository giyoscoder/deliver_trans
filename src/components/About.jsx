import React from "react";

const About = () => {
  return (
    <div className="bg-[#F3F9FF]">
      <div className="container">
        <div className="add -translate-y-[40%] mt-[70px] mb-5 p-[64px] rounded-xl flex items-center justify-between">
          <div className="w-1/2">
            <p className="text-white font-bold text-[84px] pb-[60px]">
              О нас в цифрах
            </p>
            <p className="text-white text-lg font-semibold">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor F
            </p>
          </div>
          <div className="flex items-center gap-[30px] text-white w-1/2]">
            <p className=" text-[200px]">#6 </p>
            <p className="text-lg">
              Consectetur adipiscing elit, <br /> sed do eiusmod tempor
            </p>
          </div>
        </div>
        <div className=" -translate-y-[35%] grid grid-cols-3 gap-[30px]">
          <div className="bg-white rounded-xl py-[10px] px-[30px]">
            <p className="text-[80px]  font-bold">3500</p>
            <p className="font-semibold text-lg text-[#667582]">
              Профессиональных сотрудников
            </p>
          </div>
          <div className="bg-white rounded-xl py-[10px] px-[30px]">
            <p className="text-[80px]  font-bold">400</p>
            <p className="font-semibold text-lg text-[#667582]">
              Единиц автотранспорта
            </p>
          </div>
          <div className="bg-white rounded-xl py-[10px] px-[30px]">
            <p className="text-[80px]  font-bold">31</p>
            <p className="font-semibold text-lg text-[#667582]">
              Филиал по всей России
            </p>
          </div>
          <div className="bg-white rounded-xl py-[10px] px-[30px]">
            <p className="text-[80px]  font-bold">10</p>
            <p className="font-semibold text-lg text-[#667582]">
              В топе транспортных компаний
            </p>
          </div>
          <div className="bg-white rounded-xl py-[10px] px-[30px]">
            <p className="text-[80px]  font-bold">7000</p>
            <p className="font-semibold text-lg text-[#667582]">
              Постоянных клиентов
            </p>
          </div>
          <div className="bg-white rounded-xl py-[10px] px-[30px]">
            <p className="text-[80px]  font-bold">22</p>
            <p className="font-semibold text-lg text-[#667582]">
              Года вместе с вами
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
