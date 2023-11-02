import React from "react";
import { logo2 } from "../Assets/images";
import {
  AiFillSetting,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsArrowDown } from "react-icons/bs";
import { LiaSearchSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import { FaWeightHanging } from "react-icons/fa";
import { BiCube } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import {MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown  } from 'react-icons/md'

import { workOne, workTwo } from "../Assets/images";



const Dashboard = () => {
  return (
    <div>
      <nav className="py-[20px] bg-white border-b border-[#F3F9FF]">
        <div className="px-[30px]">
          <div className="flex items-center justify-between">
            <div>
              <img src={logo2} alt="" />
            </div>
            <div className="flex items-center gap-[30px]">
              <p className="text-lg font-bold cursor-pointer">Заявки</p>
              <p className="text-lg font-bold cursor-pointer">Настройки</p>
            </div>
            <div>
              <button className="text-lg font-bold text-[#FF6969]">
                Выйти
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* <div>
      <div className="py-[30px] border-b bg-white border-[#F3F9FF]">
        <div className="px-[30px]">
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-[30px]">
              <button className="bg-[#FFD200] rounded-xl p-[17px] text-lg font-bold">
                Добавить заявку
              </button>
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
     </div> */}

      <div className="px-[30px] bg-white pt-[30px] pb-[100px]">
        <div>
          <p className="text-3xl font-bold">
            <span>Заявка на перевозку #628</span>{" "}
            <span className="ml-[60px]">12 500 ₽</span>
          </p>
          <button className="font-bold font-lg p-[17px] rounded-xl bg-[#F3F9FF] text-[#667582] my-[30px] block">
            Отправить запрос
          </button>
          <div className="rounded-xl p-[10px] bg-darkMain inline-flex items-center">
            <button className="py-[8px] px-[60px] rounded-md bg-lightMain font-lg font-bold text-white text-center">
              На палетах
            </button>
            <button className="py-[8px] px-[60px] rounded-md  font-lg font-bold text-white text-center">
              На палетах
            </button>
          </div>
          <div className="my-[30px]">
            <p className="text-2xl font-bold text-[#667582]">Груз</p>
            <div className="flex items-center justify-between gap-[30px] mt-[10px]">
              <div className="w-[348px] rounded-xl border border-[#D6EAFF] bg-[#F3F9FF] py-[25px] px-[30px] flex items-center justify-between">
                <p className="text-lg font-semibold ">
                  <span className="text-[#C7C7C7] block">Тип груза</span>Выбрать
                  тип груза
                </p>
                <IoIosArrowDown />
              </div>

              <div className="w-[348px] rounded-xl border border-[#D6EAFF] bg-white py-[25px] px-[30px] flex items-center gap-[10px]">
                <div className="p-[13px] bg-[#D6EAFF] rounded-full text-darkMain">
                  <FaWeightHanging />
                </div>

                <div>
                  <p className="text-lg font-semibold text-[#C7C7C7]">
                    Объем груза
                  </p>
                  <div className="flex items-center gap-[12px]">
                    <AiFillPlusCircle className="text-darkMain" size="20" />
                    <p className="text-lg font-semibold">
                      1{" "}
                      <span>
                        м<sup>3</sup>
                      </span>
                    </p>
                    <AiFillMinusCircle className="text-darkMain" size="20" />
                  </div>
                </div>
              </div>

              <div className="w-[348px] rounded-xl border border-[#D6EAFF] bg-white py-[25px] px-[30px] flex items-center gap-[10px]">
                <div className="p-[13px] bg-[#D6EAFF] rounded-full text-darkMain">
                  <BiCube />
                </div>

                <div>
                  <p className="text-lg font-semibold text-[#C7C7C7]">
                    Вес груза
                  </p>
                  <div className="flex items-center gap-[12px]">
                    <AiFillPlusCircle className="text-darkMain" size="20" />
                    <p className="text-lg font-semibold">10 кг</p>
                    <AiFillMinusCircle className="text-darkMain" size="20" />
                  </div>
                </div>
              </div>

              <div className="w-[348px] rounded-xl border border-[#D6EAFF] bg-[#F3F9FF] py-[25px] px-[30px] flex items-center justify-between">
                <p className="text-lg font-semibold ">
                  <span className="text-[#C7C7C7] block">t° режим</span>Выбрать
                  t° режим
                </p>
                <IoIosArrowDown />
              </div>
            </div>

            <div className="my-[30px]">
              <div className="flex items-center gap-[30px]">
                <input
                  type="file"
                  className="outline-none  border boder-[#D6EAFF] bg-[#F3F9FF] py-[38px] px-[20px] rounded-xl"
                />
                <div className="h-[110px] w-[110px]  rounded-xl relative">
                  <img
                    src={workTwo}
                    alt=""
                    className="w-full h-full object-scale-fill object-right rounded-xl"
                  />
                  <div className="bg-red-500 rounded-full text-white absolute top-0 right-0 p-[2px] cursor-pointer">
                    <RxCross2 />
                  </div>
                </div>
                <div className="h-[110px] w-[110px]  rounded-xl relative">
                  <img
                    src={workOne}
                    alt=""
                    className="w-full h-full object-scale-fill object-right rounded-xl"
                  />
                  <div className="bg-red-500 rounded-full text-white absolute top-0 right-0 p-[2px] cursor-pointer">
                    <RxCross2 />
                  </div>
                </div>
                <div className="h-[110px] w-[110px]  rounded-xl relative">
                  <img
                    src={workTwo}
                    alt=""
                    className="w-full h-full object-scale-fill object-right rounded-xl"
                  />
                  <div className="bg-red-500 rounded-full text-white absolute top-0 right-0 p-[2px] cursor-pointer">
                    <RxCross2 />
                  </div>
                </div>
                <div className="h-[110px] w-[110px]  rounded-xl relative">
                  <img
                    src={workOne}
                    alt=""
                    className="w-full h-full object-scale-fill object-right rounded-xl"
                  />
                  <div className="bg-red-500 rounded-full text-white absolute top-0 right-0 p-[2px] cursor-pointer">
                    <RxCross2 />
                  </div>
                </div>
                <div className="h-[110px] w-[110px]  rounded-xl relative">
                  <img
                    src={workTwo}
                    alt=""
                    className="w-full h-full object-scale-fill object-right rounded-xl"
                  />
                  <div className="bg-red-500 rounded-full text-white absolute top-0 right-0 p-[2px] cursor-pointer">
                    <RxCross2 />
                  </div>
                </div>
                <div className="py-[40px] px-[20px] bg-[#F3F9FF] rounded-xl inline-block">
                  <p className="text-[#006790] font-bold text-lg">
                    Написать комментарии к грузу
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-2xl font-bold text-[#667582]">Авто</p>
              <div className="flex items-center gap-[30px] mt-[10px]">
                <div className="w-[348px] rounded-xl border border-[#D6EAFF] bg-[#F3F9FF] py-[25px] px-[30px] flex items-center justify-between">
                  <p className="text-lg font-semibold ">
                    <span className="text-[#C7C7C7] block">Тип груза</span>
                    Выбрать тип груза
                  </p>
                  <IoIosArrowDown />
                </div>
                <div className="w-[348px] rounded-xl border border-[#D6EAFF] bg-[#F3F9FF] py-[25px] px-[30px] flex items-center justify-between">
                  <p className="text-lg font-semibold ">
                    <span className="text-[#C7C7C7] block">Загрузка</span>
                    Выбрать тип груза
                  </p>
                  <IoIosArrowDown />
                </div>
              </div>
            </div>

            <div className="my-[30px]">
              <div>
                <p className="text-2xl font-bold text-[#667582]">Откуда</p>
                <div className="rounded-xl border mt-[10px] border-[#D6EAFF] p-[30px] flex items-start gap-[30px]">
                  <div className="w-full space-y-[30px]">
                    <input
                      type="text"
                      className="py-[16px] pl-[21px] outline-none rounded-xl w-full border border-[#D6EAFF] placeholder:text-base placeholder:font-semibold"
                      placeholder="Адрес Откуда"
                    />
                    <div className="flex items-center gap-[30px]">
                      <input
                        type="text"
                        className="py-[16px] pl-[21px] outline-none rounded-xl w-full border border-[#D6EAFF] placeholder:text-base placeholder:font-semibold"
                        placeholder="Контактное лицо Контактное лицо"
                      />
                      <input
                        type="text"
                        className="py-[16px] pl-[21px] outline-none rounded-xl w-full border border-[#D6EAFF] placeholder:text-base placeholder:font-semibold"
                        placeholder="Телефон +7 ___ ___ __ __"
                      />
                    </div>

                    <div className="flex items-center gap-[30px]">
                      <div className="w-[348px] rounded-xl border-b border-[#D6EAFF] bg-white cursor-pointer py-[25px] px-[30px] flex items-center justify-between">
                        <p className="text-xl text-[#667582] font-bold ">
                          Дата и время
                        </p>
                        <IoIosArrowDown />
                      </div>{" "}
                      <div className="w-[348px] rounded-xl border-b border-[#D6EAFF] cursor-pointer bg-white py-[25px] px-[30px] flex items-center justify-between">
                        <p className="text-xl text-[#667582]  font-bold ">
                          Комментарии
                        </p>
                        <IoIosArrowDown />
                      </div>
                    </div>

                  </div>
                  <div>
                      <RxCross2 size='34' className="text-darkMain"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Dashboard;
