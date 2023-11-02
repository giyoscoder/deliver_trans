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

const Addrequest = () => {
  const [addReq, setAddReq] = useState(false);
  const [data, setData] = useState(false);
  const [finish, setFinish] = useState(false);
  const [comment, setComment] = useState(false);
  const [finishComment, setFinishComment] = useState(false);
  const [services, setServices] = useState([]);
  const [size, setSize] = useState(1);
  const [weight, setWeight] = useState(10);
  const [driver, setDriver] = useState('палетах')

  const servicesHandler = (e) => {
    if (services.includes(e)) {
      setServices((fil) => fil.filter((value) => value != e));
    } else {
      setServices((prev) => [...prev, e]);
    }
  };


  return (
    <div className="px-[30px] bg-white pt-[30px] pb-[100px] flex items-start gap-[30px]">
      {/* left side dashboard size */}
      <div className="">
        <p className="text-3xl font-bold">
          <span>Заявка на перевозку #628</span>{" "}
          <span className="ml-[60px]">12 500 ₽</span>
        </p>
       <div>
       <Link to='/' className="font-bold inline-block font-lg p-[17px] rounded-xl bg-[#F3F9FF] text-[#667582] my-[30px] ">
          Отправить запрос
        </Link>
       </div>
        <div className="rounded-xl p-[10px] bg-darkMain inline-flex items-center">
          <button
            className={`py-[8px] px-[60px] rounded-md ${
              driver == "палетах" && "bg-lightMain"
            }  font-lg font-bold text-white text-center `}
            onClick={() => setDriver("палетах")}
          >
            На палетах
          </button>
          <button
            className={`py-[8px] px-[60px] rounded-md  ${
              driver == "палет" && "bg-lightMain"
            } font-lg font-bold text-white text-center`}
            onClick={() => setDriver("палет")}
          >
            Без палет
          </button>
        </div>
        <div className="my-[30px]">
          <p className="text-2xl font-bold text-[#667582]">Груз</p>
          <div className="flex items-center  gap-[30px] mt-[10px]">
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
                  <AiFillMinusCircle
                    className="text-darkMain"
                    size="20"
                    onClick={() => [size != 0 && setSize((prev) => prev - 1)]}
                  />
                  <p className="text-lg font-semibold">
                    {size}
                    <span>
                      м<sup>3</sup>
                    </span>
                  </p>
                  <AiFillPlusCircle
                    className="text-darkMain"
                    size="20"
                    onClick={() => setSize((prev) => prev + 1)}
                  />
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
                  <AiFillMinusCircle
                    className="text-darkMain"
                    size="20"
                    onClick={() => [
                      weight != 0 && setWeight((prev) => prev - 1),
                    ]}
                  />
                  <p className="text-lg font-semibold">{weight} кг</p>
                  <AiFillPlusCircle
                    className="text-darkMain"
                    size="20"
                    onClick={() => setWeight((prev) => prev + 1)}
                  />
                </div>
              </div>
            </div>

            <div className="w-[348px] rounded-xl border border-[#D6EAFF] bg-[#F3F9FF] py-[25px] px-[30px] flex items-center justify-between">
              <p className="text-lg font-semibold ">
                <span className="text-[#C7C7C7] block">t° режим</span>Выбрать t°
                режим
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
            <div className="flex items-start gap-[30px] pb-[30px] border-b border-[#D6EAFF]">
              {/* Откуда section */}
              <div className="  box-border">
                <p className="text-2xl font-bold text-[#667582]">Откуда</p>
                {/* first  */}
                <div className="box-border w-[726px]">
                  <div className="rounded-xl border mt-[10px] border-[#D6EAFF] p-[30px] flex items-start gap-[30px]">
                    <div className="w-full space-y-[30px]">
                      <input
                        type="text"
                        className="py-[16px] w-full pl-[21px] outline-none rounded-xl border border-[#D6EAFF] placeholder:text-base placeholder:font-semibold"
                        placeholder="Адрес Откуда"
                      />
                      <div className="flex items-center gap-[30px]">
                        <input
                          type="text"
                          className="py-[16px] w-full pl-[21px] outline-none rounded-xl  border border-[#D6EAFF] placeholder:text-base placeholder:font-semibold"
                          placeholder="Контактное лицо Контактное лицо"
                        />
                        <input
                          type="text"
                          className="py-[16px] w-full pl-[21px] outline-none rounded-xl  border border-[#D6EAFF] placeholder:text-base placeholder:font-semibold"
                          placeholder="Телефон +7 ___ ___ __ __"
                        />
                      </div>
                      <div className="flex items-start gap-[30px] ">
                        <div className="border-b border-[#D6EAFF] bg-white py-[25px]  space-y-[30px]">
                          <div
                            onClick={() => setData((prev) => !prev)}
                            className="w-[291px] cursor-pointer flex items-center justify-between overflow-hidden"
                          >
                            <p className="text-xl text-[#667582] font-bold ">
                              Дата и время
                            </p>
                            {data ? <IoIosArrowUp /> : <IoIosArrowDown />}
                          </div>
                          {/* Drop time */}
                          <AnimatePresence>
                            {data && (
                              <motion.div
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{
                                  y: -50,
                                  opacity: 0,
                                  transition: { duration: 0.1 },
                                }}
                                className="space-y-[30px]  overflow-hidden"
                              >
                                <div className="flex items-center justify-between ">
                                  <input
                                    type="date"
                                    name=""
                                    id=""
                                    className="border border-[#D6EAFF] bg-white outline-none p-[20px] rounded-xl "
                                  />
                                  <div className="flex items-center gap-[10px]">
                                    <AiFillCheckCircle
                                      size="30"
                                      className="text-darkMain"
                                    />
                                    <p className="text-[22px] font-semibold">
                                      Время
                                    </p>
                                  </div>
                                </div>
                                <div className="rounded-xl bg-[#F3F9FF] border border-[#D6EAFF] p-[10px] flex items-center justify-between">
                                  <button className="text-white font-bold text-lg py-[7px] px-[34px] rounded-lg bg-[#006790]">
                                    Строго
                                  </button>
                                  <button className="text-darkMain font-bold text-lg py-[7px] px-[34px] rounded-lg ">
                                    Интервал
                                  </button>
                                </div>
                                <div className="flex items-center justify-between">
                                  <input
                                    type="time"
                                    required
                                    className="border border-[#D6EAFF] bg-white outline-none p-[20px] rounded-xl "
                                  />
                                  <input
                                    type="time"
                                    required
                                    className="border border-[#D6EAFF] bg-white outline-none p-[20px] rounded-xl "
                                  />
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        {/* comment drop */}
                        <div className="w-[291px]  border-b border-[#D6EAFF] cursor-pointer bg-white py-[25px] ">
                          <div
                            onClick={() => setComment((prev) => !prev)}
                            className="flex items-center justify-between"
                          >
                            <p className="text-xl text-[#667582]  font-bold ">
                              Комментарии
                            </p>
                            {comment ? <IoIosArrowUp /> : <IoIosArrowDown />}
                          </div>
                          {/* Drop time */}
                          <AnimatePresence>
                            {comment && (
                              <motion.div
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{
                                  y: -50,
                                  opacity: 0,
                                  transition: { duration: 0.1 },
                                }}
                                className="space-y-[30px]  overflow-hidden mt-[30px]"
                              >
                                <textarea
                                  type="date"
                                  name=""
                                  id=""
                                  className="border w-full border-[#D6EAFF] h-[252px] placeholder:text-lg placeholder:text-black placeholder:font-semibold bg-white outline-none p-[20px] rounded-xl "
                                  placeholder="Добавить комметнтарии
                                      Ваш комментарии"
                                ></textarea>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                    <div>
                      <RxCross2 size="34" className="text-darkMain" />
                      <p className="text-darkMain font-bold text-center">
                        <MdOutlineKeyboardArrowUp
                          size={34}
                          className="text-darkMain"
                        />
                        |
                        <MdOutlineKeyboardArrowDown
                          size={34}
                          className="text-darkMain"
                        />
                      </p>
                    </div>
                  </div>
                  <button className="rounded-xl p-[17px] text-lg font-bold text-center bg-[#FFD200] mt-[30px]">
                    Добавить адрес загрузки
                  </button>
                </div>
              </div>

              {/* Куда section */}
              <div>
                <p className="text-2xl font-bold text-[#667582]">Откуда</p>
                {/* first  */}
                <div>
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
                      <div className="flex items-start gap-[30px] ">
                        <div className="border-b border-[#D6EAFF] bg-white py-[25px]  space-y-[30px]">
                          <div
                            onClick={() => setFinish((prev) => !prev)}
                            className="w-[291px] cursor-pointer flex items-center justify-between overflow-hidden"
                          >
                            <p className="text-xl text-[#667582] font-bold ">
                              Дата и время
                            </p>
                            {finish ? <IoIosArrowUp /> : <IoIosArrowDown />}
                          </div>
                          {/* Drop time */}
                          <AnimatePresence>
                            {finish && (
                              <motion.div
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{
                                  y: -50,
                                  opacity: 0,
                                  transition: { duration: 0.1 },
                                }}
                                className="space-y-[30px]  overflow-hidden"
                              >
                                <div className="flex items-center justify-between ">
                                  <input
                                    type="date"
                                    name=""
                                    id=""
                                    className="border border-[#D6EAFF] bg-white outline-none p-[20px] rounded-xl "
                                  />
                                  <div className="flex items-center gap-[10px]">
                                    <AiFillCheckCircle
                                      size="30"
                                      className="text-darkMain"
                                    />
                                    <p className="text-[22px] font-semibold">
                                      Время
                                    </p>
                                  </div>
                                </div>
                                <div className="rounded-xl bg-[#F3F9FF] border border-[#D6EAFF] p-[10px] flex items-center justify-between">
                                  <button className="text-white font-bold text-lg py-[7px] px-[34px] rounded-lg bg-[#006790]">
                                    Строго
                                  </button>
                                  <button className="text-darkMain font-bold text-lg py-[7px] px-[34px] rounded-lg ">
                                    Интервал
                                  </button>
                                </div>
                                <div className="flex items-center justify-between">
                                  <input
                                    type="time"
                                    required
                                    className="border border-[#D6EAFF] bg-white outline-none p-[20px] rounded-xl "
                                  />
                                  <input
                                    type="time"
                                    required
                                    className="border border-[#D6EAFF] bg-white outline-none p-[20px] rounded-xl "
                                  />
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        {/* comment drop */}
                        <div className="w-[291px]  border-b border-[#D6EAFF] cursor-pointer bg-white py-[25px] ">
                          <div
                            onClick={() => setFinishComment((prev) => !prev)}
                            className="flex items-center justify-between"
                          >
                            <p className="text-xl text-[#667582]  font-bold ">
                              Комментарии
                            </p>
                            {finishComment ? (
                              <IoIosArrowUp />
                            ) : (
                              <IoIosArrowDown />
                            )}
                          </div>
                          {/* Drop time */}
                          <AnimatePresence>
                            {finishComment && (
                              <motion.div
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{
                                  y: -50,
                                  opacity: 0,
                                  transition: { duration: 0.1 },
                                }}
                                className="space-y-[30px]  overflow-hidden mt-[30px]"
                              >
                                <textarea
                                  type="date"
                                  name=""
                                  id=""
                                  className="border w-full border-[#D6EAFF] h-[252px] placeholder:text-lg placeholder:text-black placeholder:font-semibold bg-white outline-none p-[20px] rounded-xl "
                                  placeholder="Добавить комметнтарии
                                      Ваш комментарии"
                                ></textarea>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="rounded-xl p-[17px] text-lg font-bold text-center bg-[#FFD200] mt-[30px]">
                    Добавить адрес загрузки
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#667582] my-[30px]">
                Дополнительные услуги
              </p>
              <div className="flex items-center gap-[10px]">
                {["Название опции", "lorem", "epsum", "simply ", "dummy "].map(
                  (data) => {
                    return (
                      <button
                        onClick={() => servicesHandler(data)}
                        className={`py-[7px] px-[20px] rounded-3xl bg-[#F3F9FF] text-lg flex items-center gap-[10px] font-semibold text-[#667582] ${
                          services.includes(data) && "bg-darkMain text-white"
                        } `}
                      >
                        {data}{" "}
                        {services.includes(data) && (
                          <AiFillCheckCircle size="20" className="text-white" />
                        )}
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side document, letter parts */}
      <div className="w-full space-y-[30px]">
        <div className="border border-[#D6EAFF] rounded-xl ">
          <p className="text-[22px] font-semibold p-[30px] border-b border-[#D6EAFF] w-full">
            Документы
          </p>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="w-full outline-none border-none p-[30px]"
          ></textarea>
        </div>
        <div className="border border-[#D6EAFF] rounded-xl ">
          <p className="text-[22px] font-semibold p-[30px] border-b border-[#D6EAFF] w-full">
            Журнал
          </p>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="w-full outline-none border-none p-[30px]"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Addrequest;
