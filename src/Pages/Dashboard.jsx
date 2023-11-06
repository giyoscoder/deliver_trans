import React, { useState } from "react";
import { logo2 } from "../Assets/images";
import {
  AiFillSetting,
  AiFillMinusCircle,
  AiFillCheckCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { BsArrowDown } from "react-icons/bs";
import { LiaSearchSolid } from "react-icons/lia";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaWeightHanging } from "react-icons/fa";
import { BiCube } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

import { workOne, workTwo } from "../Assets/images";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div>
        <div className="py-[30px] border-b bg-white border-[#F3F9FF]">
          <div className="px-[30px]">
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-[30px]">
                <Link
                  to="/add"
                  className="bg-[#FFD200] rounded-xl p-[17px] text-lg font-bold"
                >
                  Добавить заявку
                </Link>
                <button className="bg-[#FFD200] rounded-xl p-[17px] text-lg font-bold">
                  <AiFillSetting size="25" />
                </button>
              </div>
              <div className="flex items-center gap-[30px]">
                <button className="py-[17px] px-[20px] rounded-xl bg-[#F3F9FF] text-lg font-bold flex items-center ">
                  {" "}
                  Поездка ↓{" "}
                </button>
                <ul className="flex items-center gap-[30px] list-none text-[22px] font-semibold">
                  <li className="hover:text-[#3083A5] hover:underline cursor-pointer underline-offset-8">
                    Вчера
                  </li>
                  <li className="hover:text-[#3083A5] hover:underline cursor-pointer underline-offset-8">
                    Сегодня
                  </li>
                  <li className="hover:text-[#3083A5] hover:underline cursor-pointer underline-offset-8">
                    Завтра
                  </li>
                </ul>
                <button className="py-[17px] px-[20px] rounded-xl bg-[#F3F9FF] text-lg font-bold flex items-center ">
                  {" "}
                  Месяц ↓{" "}
                </button>
                <div className="flex items-center gap-[10px]">
                  <input
                    type="date"
                    className="outline-none border border-[#D6EAFF] py-[17px] px-[20px] rounded-xl"
                  />
                  <p>→</p>
                  <input
                    type="date"
                    className="outline-none border border-[#D6EAFF] py-[17px] px-[20px] rounded-xl"
                  />
                </div>
              </div>
              <div>
                <button className="py-[17px] px-[20px] rounded-xl bg-[#F3F9FF] text-lg font-bold flex items-center ">
                  {" "}
                  Показывать по 100 ↓{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="py-[30px] border-b bg-white border-[#F3F9FF]">
          <div className="px-[30px] flex items-center justify-between gap-[]">
            <div className=" border border-[#D6EAFF] py-[17px] px-[20px]  bg-white rounded-xl flex items-center gap-[10px]">
              <LiaSearchSolid />
              <input
                type="text"
                className="outline-none  placeholder:text-lg placeholder:font-bold placeholder:text-black w-[124px]"
                placeholder="Номер"
              />
            </div>
            <button className="text-[22px] font-bold">Создана ↓</button>
            <button className="text-[22px] font-bold">Поездка ↑</button>
            <button className="bg-[#F3F9FF] p-[17px] rounded-xl text-lg font-bold">
              Статус ↓{" "}
            </button>
            <button className="text-[22px] font-bold">Время подачи</button>
            <button className="bg-[#F3F9FF] p-[17px] rounded-xl text-lg font-bold">
              Водитель ↓{" "}
            </button>
            <button className="bg-[#F3F9FF] p-[17px] rounded-xl text-lg font-bold">
              Тип авто ↓{" "}
            </button>
            <button className="text-[22px] font-bold">Вес груза (т)‎ ↑</button>
            <button className="bg-[#F3F9FF] p-[17px] rounded-xl text-lg font-bold">
              Машина ↓{" "}
            </button>
            <div className=" border border-[#D6EAFF] py-[17px] px-[20px]  bg-white rounded-xl flex items-center gap-[10px]">
              <LiaSearchSolid />
              <input
                type="text"
                className="outline-none  placeholder:text-lg placeholder:font-bold placeholder:text-black w-[190px]"
                placeholder="Адрес подачи"
              />
            </div>
            <button className="text-[22px] font-bold">Сумма заказа ↑</button>
          </div>
        </div>
        <div className="bg-white">
          <div className="px-[30px]">
            <table className="w-full text-lg font-semibold">
              <tbody className="w-full">
                <tr className=" even:bg-[#F3F9FF]">
                  <td className="py-[25px]">15.04.22</td>
                  <td className="py-[25px]">1234</td>
                  <td className="py-[25px]">15.04.22</td>
                  <td className="py-[25px]">Выполнено </td>
                  <td className="py-[25px]"> 15:00 </td>
                  <td className="py-[25px]"> Александр А.А</td>
                  <td className="py-[25px]"> Грузовик</td>
                  <td className="py-[25px]"> 1000 т </td>
                  <td className="py-[25px]"> Грузовик </td>
                  <td className="py-[25px]"> Москва Чермянская</td>
                </tr>
                <tr className=" even:bg-[#F3F9FF]">
                  <td className="py-[25px]">15.04.22</td>
                  <td className="py-[25px]">1234</td>
                  <td className="py-[25px]">15.04.22</td>
                  <td className="py-[25px]">Выполнено </td>
                  <td className="py-[25px]"> 15:00 </td>
                  <td className="py-[25px]"> Александр А.А</td>
                  <td className="py-[25px]"> Грузовик</td>
                  <td className="py-[25px]"> 1000 т </td>
                  <td className="py-[25px]"> Грузовик </td>
                  <td className="py-[25px]"> Москва Чермянская</td>
                </tr>
                <tr className=" even:bg-[#F3F9FF]">
                  <td className="py-[25px]">15.04.22</td>
                  <td className="py-[25px]">1234</td>
                  <td className="py-[25px]">15.04.22</td>
                  <td className="py-[25px]">Выполнено </td>
                  <td className="py-[25px]"> 15:00 </td>
                  <td className="py-[25px]"> Александр А.А</td>
                  <td className="py-[25px]"> Грузовик</td>
                  <td className="py-[25px]"> 1000 т </td>
                  <td className="py-[25px]"> Грузовик </td>
                  <td className="py-[25px]"> Москва Чермянская</td>
                </tr>
              </tbody>
            </table>

            <div className=" py-[50px] flex items-center justify-end gap-[100px]">
              <div className="space-x-[30px] ">
                <button className="p-[17px] bg-[#FFD200] rounded-xl text-lg font-bold">
                  ← Предыдущая страница
                </button>
                <button className="p-[17px] bg-[#FFD200] rounded-xl text-lg font-bold">
                  Следующая страница →
                </button>
              </div>
              <div className="flex items-center gap-[30px]">
                <p className="text-[22px] font-bold">Текущая страница</p>
                <div className=" border border-[#D6EAFF] py-[17px] px-[20px]  bg-white rounded-xl flex items-center gap-[10px]">
                  <LiaSearchSolid />
                  <input
                    type="text"
                    className="outline-none  placeholder:text-lg placeholder:font-bold placeholder:text-black w-[99px]"
                    placeholder="2"
                  />
                </div>
                <p className="text-[22px] font-bold">из 999 страниц</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
