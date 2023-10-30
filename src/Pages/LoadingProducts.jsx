import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { Calculator, CalculatorTwo, Showcase, Map, Приемущества } from "../components";
import { loremImg } from "../Assets/images";

const LoadingProducts = () => {
  const [group, setGroup] = useState("yes");

  return (
    <div>
      <div>
        <div className=" relative">
          <div className="bg-darkMain bg-loadingProducts h-full bg-no-repeat bg-right">
            <div className="bg-loadingPageLinear h-full">
              <div className="container  pt-[60px] pb-[140px]">
                <div className="flex item-center text-white text-lg font-semibold">
                  <Link to="/">Главная</Link>&nbsp;
                  <Link>&#8725; Услуги</Link>
                </div>
                <h1 className="text-white text-[80px] font-semibold ">
                  Разгрузка и погрузка
                </h1>
                <p className="text-xl font-semibold max-w-[800px] text-white mt-[50px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo
                </p>

                <div className="mt-[50px] flex items-center gap-[30px]">
                  <input
                    type="text"
                    className="w-[480px] py-[16px] px-[21px] rounded-xl outline-none border-none"
                    placeholder="Телефон +7 ___ ___ __ __"
                  />
                  <button className="text-lg font-bold  py-[16px] px-[22px] rounded-xl bg-[#FFD200]">
                    Заказать звонок
                  </button>
                </div>
                <p className="text-white text-base mt-[21px] font-semibold ">
                  Отправляя нам свои данные, вы подтверждаете согласие с нашей
                  Политикой конфиденциальности
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <h1 className="text-[80px] font-bold">Калькулятор</h1>

            <div className="bg-white overflow-hidden mt-[60px] pb-[30px] px-[60px] rounded-xl">
              <div className=" py-[30px]  rounded-xl">
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
            <Map />
          </div>

          <div className="bg-white py-[60px] ">
            <div className="container">
              <h1 className="text-[80px] font-bold ">Lorem ipsum</h1>
              <div className="mt-[60px] bg-[#F3F9FF] rounded-xl py-[30px]">
                <div className="px-[30px]">
                  <p className="text-3xl font-bold pb-[30px]">
                    Lorem ipsum dolor sit amet
                  </p>
                  <p className="text-lg font-semibold p">
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse
                  </p>
                  <ul className="list-disc list-inside pt-[30px]">
                    <li>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditii
                    </li>
                    <li>
                      Sint occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt{" "}
                    </li>
                  </ul>
                </div>
                <div className="my-[30px]">
                  <img src={loremImg} alt="" />
                </div>
                <div className="px-[30px]">
                  <p className="text-3xl font-bold pb-[30px]">
                    Lorem ipsum dolor sit amet
                  </p>
                  <p className="text-lg font-semibold p">
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse
                  </p>
                  <ul className="list-disc list-inside pt-[30px]">
                    <li>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditii
                    </li>
                    <li>
                      Sint occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <IoIosArrowDown
                size="50"
                className="text-[#C7C7C7] block mx-auto mt-[50px]"
              />
            </div>
          </div>

          <div>
            <h1 className="text-[80px] font-bold container pb-[70px]">Документы</h1>
            <div className="form  pt-[60px] pb-[100px] ">
              <div className="container">
                <h1 className="title text-white">
                  Нет времени разбираться? Подскажем!
                </h1>
                <form action="" className="pt-[50px] pb-[30px]">
                  <div className="flex items-center justify-between gap-[30px]">
                    <input
                      type="text"
                      className="w-full py-[16px] px-[21px] rounded-xl outline-none border-none"
                      placeholder="Я хочу перевезти апример: Кухонный уголок"
                    />
                    <input
                      type="text"
                      className="w-full py-[16px] px-[21px] rounded-xl outline-none border-none"
                      placeholder=" Откуда - Куда Например: Москва - Владивосток"
                    />
                    <input
                      type="text"
                      className="w-full py-[16px] px-[21px] rounded-xl outline-none border-none"
                      placeholder="Телефон +7 ___ ___ __ _"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-[30px] mt-[30px]">
                    <input
                      type="text"
                      className="w-full py-[16px] px-[21px] rounded-xl outline-none border-none"
                      placeholder="Я хочу перевезти апример: Кухонный уголок"
                    />
                    <input
                      type="text"
                      className="w-full py-[16px] px-[21px] rounded-xl outline-none border-none"
                      placeholder=" Откуда - Куда Например: Москва - Владивосток"
                    />
                    <input
                      type="text"
                      className="w-full py-[16px] px-[21px] rounded-xl outline-none border-none"
                      placeholder="Телефон +7 ___ ___ __ _"
                    />
                  </div>
                </form>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <input type="checkbox" id="checked" />
                    <label
                      for="checked"
                      className="text-lg font-semibold text-white"
                    >
                      Согласие на обработку персональных данных
                    </label>
                  </div>
                  <button className="text-lg font-bold  py-[18px] px-[22px] rounded-xl bg-[#FFD200]">
                    Оставить заявку
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Приемущества/>
          </div>

        <div className="pt-[60px] pb-[200px]">
        <div className="container">
            <h1 className="text-[80px] font-bold  pb-[60px]">Популярные направления</h1>
            <div className="grid grid-cols-4">
                    <div>
                      <p className="text-[22px] font-semibold">Популярные направления</p>
                      <ul className="text-[#006790] text-lg font-semibold mt-[30px]">
                        <li>Москва – Омск</li>
                        <li>Москва – Красноярск</li>
                        <li>Москва – Ростов-на-Дону</li>
                        <li>Москва – Омск</li>
                        <li>Москва – Ростов-на-Дону</li>
                        <li>Москва – Красноярск</li>
                        <li>Москва – Омск</li>
                        <li>Москва – Красноярск</li>
                        <li>Москва – Ростов-на-Дону</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[22px] font-semibold">Популярные направления</p>
                      <ul className="text-[#006790] text-lg font-semibold mt-[30px]">
                        <li>Москва – Омск</li>
                        <li>Москва – Красноярск</li>
                        <li>Москва – Ростов-на-Дону</li>
                        <li>Москва – Омск</li>
                        <li>Москва – Ростов-на-Дону</li>
                        <li>Москва – Красноярск</li>
                        <li>Москва – Омск</li>
                        <li>Москва – Красноярск</li>
                        <li>Москва – Ростов-на-Дону</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[22px] font-semibold">Популярные направления</p>
                      <ul className="text-[#006790] text-lg font-semibold mt-[30px]">
                        <li>Москва – Омск</li>
                        <li>Москва – Красноярск</li>
                        <li>Москва – Ростов-на-Дону</li>
                        <li>Москва – Омск</li>
                        <li>Москва – Ростов-на-Дону</li>
                        <li>Москва – Красноярск</li>
                        <li>Москва – Омск</li>
                        <li>Москва – Красноярск</li>
                        <li>Москва – Ростов-на-Дону</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[22px] font-semibold">Популярные направления</p>
                      <ul className="text-[#006790] text-lg font-semibold mt-[30px]">
                        <li>Москва – Омск</li>
                        <li>Москва – Красноярск</li>
                        <li>Москва – Ростов-на-Дону</li>
                        <li>Москва – Омск</li>
                        <li>Москва – Ростов-на-Дону</li>
                        <li>Москва – Красноярск</li>
                        <li>Москва – Омск</li>
                        <li>Москва – Красноярск</li>
                        <li>Москва – Ростов-на-Дону</li>
                      </ul>
                    </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingProducts;
