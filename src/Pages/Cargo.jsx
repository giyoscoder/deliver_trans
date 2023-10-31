import React from "react";
import { Link } from "react-router-dom";
import {miniCal, gurzavik, gurzavik2, furgon, furgon2} from '../Assets/images'

const Cargo = () => {
  return (
    <div>
      <div className="bg-white pt-[50px] pb-[90px]">
        <div className="container">
          <div className="flex item-center text-[#667582] text-lg font-semibold">
            <Link to="/">Главная</Link>&nbsp;
            <Link>&#8725; Услуги</Link>
          </div>
        </div>
      </div>
      <div>
        <div className="container -translate-y-[40px]  ">
          <div className="p-[10px] rounded-xl bg-darkMain ">
            <ul className="flex items-center justify-between">
              <li className="text-white font-bold text-lg py-[17px] bg-lightMain cursor-pointer px-[46px] rounded-xl">
                до 1.5 т
              </li>
              <li className="text-white font-bold text-lg py-[17px] px-[46px] rounded-xl">
                до 3 т
              </li>
              <li className="text-white font-bold text-lg py-[17px] px-[46px] rounded-xl">
                до 1.5 т
              </li>
              <li className="text-white font-bold text-lg py-[17px] px-[46px] rounded-xl">
                до 3 т
              </li>
              <li className="text-white font-bold text-lg py-[17px] px-[46px] rounded-xl">
                до 1.5 т
              </li>
              <li className="text-white font-bold text-lg py-[17px] px-[46px] rounded-xl">
                до 3 т
              </li>
            </ul>
          </div>
          <div className="space-y-[30px] pt-[70px] pb-[100px]">
            <div className="bg-white flex items-center justify-between rounded-xl p-[30px] ">
              <div className="pr-[50px] border-r border-[#D6EAFF]">
                <p className="font-bold text-3xl">Тент низкий 3 метра</p>
                <p className="text-lg font-semibold py-[30px]">
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse
                </p>
                <div className="flex items-center gap-[10px]">
                    <button className="rounded-xl font-bold text-lg py-[17px] px-[90px] bg-[#FFD200]">Заказать</button>
                    <div>
                        <img src={miniCal} alt="" className="bg-[#FFD200] p-[15px] rounded-xl box-border"/>
                    </div>
                </div>
              </div>
              <div className=" w-full">
                <img src={furgon} alt=""  className="w-[270px] h-[130px] block mx-auto"/>
              </div>
            </div>
            <div className="bg-white flex items-center justify-between rounded-xl p-[30px] ">
              <div className="pr-[50px] border-r border-[#D6EAFF]">
                <p className="font-bold text-3xl">Тент низкий 3 метра</p>
                <p className="text-lg font-semibold py-[30px]">
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse
                </p>
                <div className="flex items-center gap-[10px]">
                    <button className="rounded-xl font-bold text-lg py-[17px] px-[90px] bg-[#FFD200]">Заказать</button>
                    <div>
                        <img src={miniCal} alt="" className="bg-[#FFD200] p-[15px] rounded-xl box-border"/>
                    </div>
                </div>
              </div>
              <div className=" w-full">
                <img src={furgon2} alt=""  className="w-[270px] h-[130px] block mx-auto"/>
              </div>
            </div>
            <div className="bg-white flex items-center justify-between rounded-xl p-[30px] ">
              <div className="pr-[50px] border-r border-[#D6EAFF]">
                <p className="font-bold text-3xl">Тент низкий 3 метра</p>
                <p className="text-lg font-semibold py-[30px]">
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse
                </p>
                <div className="flex items-center gap-[10px]">
                    <button className="rounded-xl font-bold text-lg py-[17px] px-[90px] bg-[#FFD200]">Заказать</button>
                    <div>
                        <img src={miniCal} alt="" className="bg-[#FFD200] p-[15px] rounded-xl box-border"/>
                    </div>
                </div>
              </div>
              <div className=" w-full">
                <img src={gurzavik} alt=""  className="w-[270px] h-[130px] block mx-auto"/>
              </div>
            </div>
            <div className="bg-white flex items-center justify-between rounded-xl p-[30px] ">
              <div className="pr-[50px] border-r border-[#D6EAFF]">
                <p className="font-bold text-3xl">Тент низкий 3 метра</p>
                <p className="text-lg font-semibold py-[30px]">
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse
                </p>
                <div className="flex items-center gap-[10px]">
                    <button className="rounded-xl font-bold text-lg py-[17px] px-[90px] bg-[#FFD200]">Заказать</button>
                    <div>
                        <img src={miniCal} alt="" className="bg-[#FFD200] p-[15px] rounded-xl box-border"/>
                    </div>
                </div>
              </div>
              <div className=" w-full">
                <img src={gurzavik2} alt=""  className="w-[270px] h-[130px] block mx-auto"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cargo;
