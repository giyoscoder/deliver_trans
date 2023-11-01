import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFileSignature, FaWeightHanging } from "react-icons/fa";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { BiCube, BiRuble } from "react-icons/bi";
import { CgController } from "react-icons/cg";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { PiArmchairLight } from "react-icons/pi";
import { BsCheckCircleFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { furgon } from "../Assets/images";

const CalculatorTwo = () => {
  const [volume, setVolume] = useState(10);
  const [size, setSize] = useState(10);
  const [place, setPlace] = useState(10);
  const [drop, setDrop] = useState(false);
  const [insurance, setInsurance] = useState("insurance");
  const [rubl, setRubl] = useState(1000);
  const [тепле, setTепле] = useState("тепле");
  const [properties, setProperties] = useState([]);

  const [options, setOptions] = useState(false);

  const propertiesHandler = (event) => {
    if (properties.includes(event)) {
      setProperties((prev) => prev.filter((value) => value != event));
    } else {
      setProperties((prev) => [...prev, event]);
    }
  };
  return (
    <>
      <motion.div
        initial={{
          x: "100%",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        exit={{ x: "100%" }}
        className=""
      >
        <div className="">
          {/* input */}
          <div className="flex items-center gap-[30px] mt-[30px] ">
            <input
              className="py-[16px] pl-[21px] text-[#667582] text-base font-semibold outline-none rounded-xl border border-[#D6EAFF] bg-white w-full"
              type="text"
              placeholder="Представитель Имя"
            />
            <input
              className="py-[16px] pl-[21px] text-[#667582] text-base font-semibold outline-none rounded-xl border border-[#D6EAFF] bg-white w-full"
              type="text"
              placeholder="Телефон +7 ___ ___ __ __"
            />
          </div>

          {/* middle */}
          <div className="mt-[30px]">
            <p className="text-[#667582] text-xl font-bold ">
              Информация о грузе
            </p>
            <div className="border mt-[10px] flex items-center justify-between border-[#D6EAFF] rounded-xl">
              <div className="flex items-center gap-[10px] pl-[30px]   py-[30px]">
                <p className="text-lg text-darkMain font-bold rounded-full py-[8px] px-[15px] bg-[#D6EAFF] inline-block">
                  A
                </p>
                <p className="text-lg font-semibold text-[#000]">
                  <span className="text-[#C7C7C7] block">Откуда</span>Москва
                </p>
              </div>
              <div className="flex items-center gap-[10px] pl-[30px]  py-[30px] border-l border-[#D6EAFF]">
                <p className="text-lg text-darkMain font-bold rounded-full py-[8px] px-[15px] bg-[#D6EAFF] inline-block">
                  B
                </p>
                <p className="text-lg font-semibold text-[#000]">
                  <span className="text-[#C7C7C7] block">Куда</span>
                  Санкт-Петербург
                </p>
              </div>
              <div></div>
            </div>
          </div>

          {/* bottom */}
          <div className="mt-[30px]">
            <p className="text-xl text-[#667582] font-bold">
              Дополнительные опции
            </p>
            <div className="grid grid-cols-2 gap-[30px] mt-[10px]">
              <div className="grid grid-cols-2 border border-[#D6EAFF] rounded-xl">
                <div className="flex items-center gap-[10px] pl-[30px]  py-[30px]">
                  <p className="text-lg text-darkMain font-bold rounded-full p-[13px] bg-[#D6EAFF] inline-block">
                    <CgController />
                  </p>
                  <div className="">
                    <p className="text-lg font-semibold text-[#C7C7C7]">
                      Максимальные габариты
                    </p>
                    <div className="flex items-center font-bold gap-[10px] ">
                      <AiFillMinusCircle
                        size="20"
                        className="text-darkMain cursor-pointer"
                        onClick={() => [
                          size != 0 && setSize((prev) => prev - 1),
                        ]}
                      />
                      {size}м
                      <AiFillPlusCircle
                        size="20"
                        className="text-darkMain cursor-pointer"
                        onClick={() => setSize((prev) => prev + 1)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-[10px] pl-[30px]  border-l border-[#D6EAFF] py-[30px] ">
                  <p className="text-lg text-darkMain font-bold rounded-full p-[13px] bg-[#D6EAFF] inline-block">
                    <PiArmchairLight />
                  </p>
                  <div className="">
                    <p className="text-lg font-semibold text-[#C7C7C7]">
                      Количество мест
                    </p>
                    <div className="flex items-center font-bold gap-[10px] ">
                      <AiFillMinusCircle
                        size="20"
                        className="text-darkMain cursor-pointer"
                        onClick={() => [
                          place != 0 && setPlace((prev) => prev - 1),
                        ]}
                      />
                      {place} шт
                      <AiFillPlusCircle
                        size="20"
                        className="text-darkMain cursor-pointer"
                        onClick={() => setPlace((prev) => prev + 1)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`border relative flex items-center justify-between border-[#D6EAFF] cursor-pointer p-[30px] ${
                  drop ? "rounded-t-xl" : "rounded-xl"
                } bg-[#F3F9FF]`}
              >
                <p className="text-lg font-semibold text-[#000]">
                  <span className="text-[#C7C7C7] block">Габариты груза</span>
                  Негабартиное отправление
                </p>
                <div
                  className="flex items-center gap-[30px]"
                  onClick={() => setDrop((prev) => !prev)}
                >
                  <button className="bg-[#FFD200] py-[8px] px-[10px] rounded-[20px] font-bold text-lg">
                    +30%
                  </button>
                  <div>{drop ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
                </div>

                {/* Drop */}
                <AnimatePresence>
                  {drop && (
                    <motion.div
                      initial={{ y: -30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -30, opacity: 0 }}
                      className="grid grid-cols-2 border border-[#D6EAFF] rounded-b-xl absolute bg-white w-full top-full left-0"
                    >
                      <div className="flex items-center gap-[10px] pl-[30px]  py-[30px]">
                        <p className="text-lg text-darkMain font-bold rounded-full p-[13px] bg-[#D6EAFF] inline-block">
                          <CgController />
                        </p>
                        <div className="">
                          <p className="text-lg font-semibold text-[#C7C7C7]">
                            Максимальные габариты
                          </p>
                          <div className="flex items-center font-bold gap-[10px] ">
                            <AiFillMinusCircle
                              size="20"
                              className="text-darkMain cursor-pointer"
                              onClick={() => [
                                size != 0 && setSize((prev) => prev - 1),
                              ]}
                            />
                            {size}м
                            <AiFillPlusCircle
                              size="20"
                              className="text-darkMain cursor-pointer"
                              onClick={() => setSize((prev) => prev + 1)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-[10px] pl-[30px]  border-l border-[#D6EAFF] py-[30px] ">
                        <p className="text-lg text-darkMain font-bold rounded-full p-[13px] bg-[#D6EAFF] inline-block">
                          <PiArmchairLight />
                        </p>
                        <div className="">
                          <p className="text-lg font-semibold text-[#C7C7C7]">
                            Объем
                          </p>
                          <div className="flex items-center font-bold gap-[10px] ">
                            <AiFillMinusCircle
                              size="20"
                              className="text-darkMain cursor-pointer"
                              onClick={() => [
                                volume != 0 && setVolume((prev) => prev - 1),
                              ]}
                            />
                            {volume}{" "}
                            <span>
                              м<sup>3</sup>{" "}
                            </span>
                            <AiFillPlusCircle
                              size="20"
                              className="text-darkMain cursor-pointer"
                              onClick={() => setVolume((prev) => prev + 1)}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="mt-[30px]">
            <p className="text-xl font-bold text-[#667582]">Выбор машины</p>
            <div className="border mt-[10px]  border-[D6EAFF] rounded-xl bg-white p-[60px] flex items-center gap-[80px] justify-between">
              <div>
                <img src={furgon} alt="" className="w-[200px] h-[100px]" />
              </div>
              <div className="grow">
                <div className="flex items-center gap-[10px] pl-[30px]  py-[30px] border rounded-xl border-[#D6EAFF]">
                  <p className="text-lg text-darkMain font-bold rounded-full p-[13px] bg-[#D6EAFF] inline-block">
                    <FaWeightHanging />
                  </p>
                  <p className="text-lg font-semibold text-[#000]">
                    <span className="text-[#C7C7C7] block">Вес</span>
                    <div className="flex items-center gap-[10px] ">1000 т</div>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[30px]">
            <div className="flex items-center justify-between text-xl font-bold text-darkMain">
              <p>Страхование груза</p>
              <p>Доставка груза в тепле</p>
            </div>

            <div className="mt-[10px] flex justify-between gap-[30px]">
              <div className="bg-[#F3F9FF] rounded-xl border border-[#D6EAFF] p-[10px]">
                <button
                  onClick={() => setInsurance("insurance")}
                  className={`py-[27px] px-[30px] rounded-xl text-[#667582] font-bold ${
                    insurance == "insurance" ? "bg-darkMain text-white" : null
                  }`}
                >
                  Застраховать
                </button>
                <button
                  onClick={() => setInsurance("")}
                  className={`py-[27px] px-[30px] rounded-xl text-[#667582] font-bold ${
                    insurance == "" ? "bg-darkMain text-white" : null
                  }`}
                >
                  Нет
                </button>
              </div>

              <div className="grow rounded-xl border p-[20px] border-[#D6EAFF] bg-white ">
                <div className="flex items-center gap-[10px]">
                  <p className="text-lg text-darkMain font-bold rounded-full p-[13px] bg-[#D6EAFF] inline-block">
                    <BiRuble />
                  </p>
                  <div className="">
                    <p className="text-lg font-semibold text-[#C7C7C7]">
                      Заявленная стоймость
                    </p>
                    <div className="flex items-center font-bold gap-[10px] ">
                      <AiFillMinusCircle
                        size="20"
                        className="text-darkMain cursor-pointer"
                        onClick={() => [
                          rubl != 0 && setRubl((prev) => prev - 1),
                        ]}
                      />
                      {rubl}руб
                      <AiFillPlusCircle
                        size="20"
                        className="text-darkMain cursor-pointer"
                        onClick={() => setRubl((prev) => prev + 1)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F3F9FF] rounded-xl border border-[#D6EAFF] p-[10px]">
                <button
                  onClick={() => setTепле("тепле")}
                  className={`py-[27px] px-[30px] rounded-xl text-[#667582] font-bold ${
                    тепле == "тепле" ? "bg-darkMain text-white" : null
                  }`}
                >
                  В тепле
                </button>
                <button
                  onClick={() => setTепле("")}
                  className={`py-[27px] px-[30px] rounded-xl text-[#667582] font-bold ${
                    тепле == "" ? "bg-darkMain text-white" : null
                  }`}
                >
                  Нет
                </button>
              </div>
            </div>
          </div>
        </div>
      
           <div className=" mt-[30px] border-y border-[#D6EAFF] ">
        <div  className="  cursor-pointer border-b border-[#D6EAFF] px-[60px]">
          <div
            className="flex py-[30px] justify-between items-center "
            onClick={() => setOptions((prev) => !prev)}
          >
            <p className="text-xl text-[#667582] font-bold">Приоритетные</p>
            {options ? (
              <IoIosArrowUp className="cursor-pointer" />
            ) : (
              <IoIosArrowDown className="cursor-pointer" />
            )}
          </div>
          <AnimatePresence>
            {options && (
              <motion.div
                initial={{
                  y: -20,
                  opacity: 0,
                }}
                animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                exit={{ y: -20, opacity: 0 }}
                className="mb-[30px] flex items-center gap-[10px]"
              >
                <button
                  onClick={() => propertiesHandler("Названиеe опции")}
                  className={` ${
                    properties.includes("Названиеe опции") &&
                    "bg-darkMain text-white"
                  } py-[7px] flex items-center gap-[10px] px-[20px] rounded-3xl bg-[#F3F9FF] text-lg font-semibold text-[#667582] outline-none`}
                >
                  Названиеe опции
                  {properties.includes("Названиеe опции") && (
                    <BsCheckCircleFill className="text-white" />
                  )}
                </button>

                <button
                  onClick={() => propertiesHandler("Название опцииi")}
                  className={` ${
                    properties.includes("Название опцииi") &&
                    "bg-darkMain text-white"
                  } py-[7px] flex items-center gap-[10px] px-[20px] rounded-3xl bg-[#F3F9FF] text-lg font-semibold text-[#667582] outline-none`}
                >
                  Название опцииi{" "}
                  {properties.includes("Название опцииi") && (
                    <BsCheckCircleFill className="text-white" />
                  )}{" "}
                </button>

                <button
                  onClick={() => propertiesHandler("Название опции")}
                  className={` ${
                    properties.includes("Название опции") &&
                    "bg-darkMain text-white"
                  } py-[7px] flex items-center gap-[10px] px-[20px] rounded-3xl bg-[#F3F9FF] text-lg font-semibold text-[#667582] outline-none`}
                >
                  Название опции{" "}
                  {properties.includes("Название опции") && (
                    <BsCheckCircleFill className="text-white" />
                  )}{" "}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="py-[30px]  border-b border-[#D6EAFF] px-[60px]">
          <div className="flex justify-between items-center">
            <p className="text-xl text-[#667582] font-bold">
              Услуги при заборе груза
            </p>
            <IoIosArrowDown />
          </div>
        </div>

        <div className="py-[30px] px-[60px]">
          <div className="flex justify-between items-center">
            <p className="text-xl text-[#667582] font-bold">
              Услуги при заборе груза
            </p>
            <IoIosArrowDown />
          </div>
        </div>

      </div>
        <div className="text-center mt-[30px]">
          <button className="text-lg py-[18px] px-[21px] font-bold rounded-xl bg-[#FFD200] mx-auto">
            Показать еще
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default CalculatorTwo;
