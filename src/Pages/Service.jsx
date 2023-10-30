import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calculator, Form, Map, CalculatorTwo } from "../components";
import { motion, AnimatePresence } from "framer-motion";

const Service = () => {
  const [group, setGroup] = useState("yes");

  return (
    <div className="pt-[50px]  bg-[#F3F9FF]">
      <div className="container">
        <div className="flex item-center text-[#667582] text-lg font-semibold">
          <Link to="/">Главная</Link>&nbsp;
          <Link>&#8725; Услуги</Link>
        </div>
        <h1 className="text-[80px] font-bold text-start">Наши услуги</h1>
        <div className="grid grid-cols-3 gap-[30px] mt-[90px]">
          <div className="bg-white flex flex-col justify-between rounded-xl p-[30px] bg-one bg-contain bg-no-repeat bg-right-top">
            <p className="text-3xl font-bold ">Экспедирование</p>
            <p className="text-lg  py-[7px] w-[150px] inline-block px-[21px]  bg-[#FFD200] font-bold rounded-xl">
              от 9 руб/ед
            </p>
          </div>
          <div className="bg-white flex flex-col justify-between rounded-xl p-[30px] bg-three bg-no-repeat bg-contain bg-right-top">
            <p className="text-3xl font-bold pb-[70px]">Экспедирование</p>
            <p className="text-lg w-[150px] inline-block py-[7px] px-[21px] bg-[#FFD200] font-bold rounded-xl">
              от 9 руб/ед
            </p>
          </div>
          <div className="bg-white flex flex-col justify-between rounded-xl p-[30px] bg-five bg-contain bg-no-repeat bg-right-top">
            <p className="text-3xl font-bold pb-[70px]">
              Перевозка <br /> стройматериалов
            </p>
            <p className="text-lg w-[150px] inline-block py-[7px] px-[21px] bg-[#FFD200] font-bold rounded-xl">
              от 9 руб/ед
            </p>
          </div>
        </div>
        <div className="text-center mt-[60px]">
          <button className="text-lg py-[18px] px-[21px] font-bold rounded-xl bg-[#FFD200] mx-auto">
            Показать еще
          </button>
        </div>

        <div>
          <h1 className="text-[80px] font-bold">Калькулятор</h1>

          <div className="bg-white overflow-hidden mt-[60px] pb-[30px] rounded-xl">
            <div className=" py-[30px] px-[60px] rounded-xl">
              <div className="flex items-center justify-between">
                <div className="bg-darkMain rounded-xl p-[10px] flex item-center justify-between">
                  <button
                    onClick={() => setGroup("yes")}
                    className={`${
                      group == "yes" && "bg-lightMain"
                    } text-white text-lg font-bold text-center py-[8px] px-[58px] rounded-xl `}
                  >
                    Сборные грузы
                  </button>
                  <button
                    onClick={() => setGroup("no")}
                    className={`${
                      group == "no" && "bg-lightMain"
                    } text-white text-lg font-bold text-center py-[8px] px-[58px] rounded-xl `}
                  >
                    Не сборные грузы
                  </button>
                </div>
                <div>
                  <Link to="#" className="text-lg font-bold text-darkMain">
                    Сбросить калькулятор
                  </Link>
                </div>
              </div>
              <AnimatePresence>
              {group == "yes" ? <Calculator /> : <CalculatorTwo />}
              </AnimatePresence>

            </div>
          </div>
        </div>
        <Map />
      </div>
      <Form />
    </div>
  );
};

export default Service;
