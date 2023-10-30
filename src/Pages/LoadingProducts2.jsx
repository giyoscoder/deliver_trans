import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  loremImg,
  workFive,
  workFour,
  workOne,
  workSix,
  workThree,
  workTwo,
} from "../Assets/images";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiFillCheckCircle, AiOutlinePlus } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Checkbox } from "@material-tailwind/react";
import { Gruzov, Form } from "../components";

const LoadingProductsTwo = () => {
  const [list, setList] = useState(["Откуда"]);
  const [faq, setFaq] = useState("");
  const listHandler = (e) => {
    if (list.includes(e)) {
      setList((prev) => prev.filter((fil) => fil != e));
    } else {
      setList((prev) => [...prev, e]);
    }
  };

  const faqHandler = (e) => {
    console.log(e);
    console.log(faq);
    if (faq == e) {
      setFaq("");
    } else {
      setFaq(e);
    }
  };

  return (
    <div>
      <div>
        <div className="bg-darkMain bg-loadingProducts2 h-full bg-no-repeat bg-right">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo
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
        <div className="bg-white pt-[60px] pb-[100px]">
          <div className="container">
            <h1 className="text-[80px] font-bold ">Lorem ipsum</h1>
            <div className="mt-[60px] bg-[#F3F9FF] rounded-xl py-[30px]">
              <div className="px-[30px]">
                <p className="text-3xl font-bold pb-[30px]">
                  Lorem ipsum dolor sit amet
                </p>
                <p className="text-lg font-semibold p">
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse
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
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse
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
          </div>
        </div>

        <div className="container pt-[60px] pb-[100px]">
          <h1 className="text-[80px] font-bold">Стоимость доставки</h1>
          <table className="w-full ">
            <thead>
              <tr className="bg-darkMain flex items-center justify-between text-white font-semibold text-[22px] pl-[30px] rounded-t-xl py-[22px] ">
                <td>Страна</td>
                <td>Ставка за перевозку</td>
                <td>Ставка за перевозку</td>
              </tr>
            </thead>
            <tbody className="">
              <tr className="flex py-[27px] px-[30px]  even:bg-white items-center justify-between text-[22px] font-semibold ">
                <td>Китай </td>
                <td className="place-self-start">4 400 $</td>
                <td>4 400 $</td>
              </tr>
              <tr className="flex py-[27px] px-[30px]  even:bg-white items-center justify-between text-[22px] font-semibold ">
                <td>Тайвань </td>
                <td className="place-self-start">4 400 $</td>
                <td>4 400 $</td>
              </tr>
              <tr className="flex py-[27px] px-[30px]  even:bg-white items-center justify-between text-[22px] font-semibold ">
                <td>Китай </td>
                <td className="place-self-start">4 400 $</td>
                <td>4 400 $</td>
              </tr>
              <tr className="flex py-[27px] px-[30px]  even:bg-white items-center justify-between text-[22px] font-semibold ">
                <td>Тайвань </td>
                <td className="place-self-start">4 400 $</td>
                <td>4 400 $</td>
              </tr>
              <tr className="flex py-[27px] px-[30px]  even:bg-white items-center justify-between text-[22px] font-semibold ">
                <td>Китай </td>
                <td className="place-self-start">4 400 $</td>
                <td>4 400 $</td>
              </tr>
              <tr className="flex py-[27px] px-[30px]  even:bg-white items-center justify-between text-[22px] font-semibold ">
                <td>Китай </td>
                <td className="place-self-start">4 400 $</td>
                <td>4 400 $</td>
              </tr>
              <tr className="flex py-[27px] px-[30px]  even:bg-white items-center justify-between text-[22px] font-semibold ">
                <td>Тайвань </td>
                <td className="place-self-start">4 400 $</td>
                <td>4 400 $</td>
              </tr>
              <tr className="flex py-[27px] rounded-b-xl px-[30px]  even:bg-white items-center justify-between text-[22px] font-semibold ">
                <td>Китай </td>
                <td className="place-self-start">4 400 $</td>
                <td>4 400 $</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white pt-[60px] pb-[100px]">
          <div className="container">
            <h1 className="text-[80px] font-bold">Способ доставки</h1>
            <div className="mt-[60px]">
              <div className="flex items-center  gap-[30px] mt-[60px]">
                <div className="bg-[#F3F9FF] h-[220px] w-[520px] rounded-xl p-[30px] bg-one bg-no-repeat bg-contain bg-right">
                  <p className="text-3xl font-bold">Экспедирование</p>
                </div>
                <div className="bg-[#F3F9FF] h-[220px] w-[520px] rounded-xl p-[30px] bg-three bg-no-repeat bg-contain bg-right">
                  <p className="text-3xl font-bold">
                    Перевозка <br /> медикаментов
                  </p>
                </div>
                <div className="bg-[#F3F9FF] h-[220px] w-[480px] rounded-xl p-[30px] bg-two bg-no-repeat  bg-contain bg-right">
                  <p className="text-3xl font-bold">
                    Сборные <br /> рефгрузы
                  </p>
                </div>
              </div>

              <div className="flex items-center  gap-[30px] mt-[30px]">
                <div className="bg-[#F3F9FF] h-[220px] w-[480px] rounded-xl p-[30px] bg-four bg-no-repeat bg-contain bg-right">
                  <p className="text-3xl font-bold">
                    Перевозка <br />
                    стройматериалов
                  </p>
                </div>
                <div className="bg-[#F3F9FF] h-[220px] w-[520px] rounded-xl p-[30px] bg-five bg-no-repeat bg-contain bg-right">
                  <p className="text-3xl font-bold">
                    Перевозка продуктов <br />
                    питания
                  </p>
                </div>
                <div className="bg-[#F3F9FF] h-[220px] w-[520px] rounded-xl p-[30px] bg-one bg-no-repeat  bg-contain bg-right">
                  <p className="text-3xl font-bold">
                    Сборные <br /> рефгрузы
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-[60px] pb-[100px]">
          <div className="container">
            <h1 className="text-[80px] font-bold">Квиз</h1>
            <div className="flex items-center justify-between    mt-[60px]">
              <div className="bg-white rounded-xl p-[30px]">
                <p className="text-3xl font-bold">
                  1. Куда требуется перевозка?
                </p>
                <div className="flex items-center gap-[30px] mt-[30px] mb-[70px]">
                  <input
                    className="py-[16px] pl-[21px] text-[#667582] text-base font-semibold outline-none bg-[#F3F9FF] rounded-xl border border-[#D6EAFF]  w-[797px]"
                    type="text"
                    placeholder={`Куда  Москва`}
                  />

                  <button className="bg-[#FFD200] rounded-xl border-none outline-none p-[16px]">
                    <MdOutlineKeyboardArrowRight size="20" />
                  </button>
                </div>
                <div className="bg-[#F3F9FF] flex items-center gap-[30px] p-[10px] rounded-xl">
                  <div
                    className={`py-[17px] ${
                      list.includes("Откуда")
                        ? "bg-[#028BC1] text-white"
                        : "bg-white"
                    } px-[20px] rounded-xl h-[130px] w-[199px] border cursor-pointer border-[#D6EAFF] flex items-start gap-[10px] text-[#667582] font-bold text-lg`}
                    onClick={() => listHandler("Откуда")}
                  >
                    <div
                      className={`h-[20px] w-[20px] ${
                        list.includes("Откуда")
                          ? "bg-transparent"
                          : "bg-slate-50"
                      }  rounded-xl grid place-items-center`}
                    >
                      {list.includes("Откуда") && (
                        <AiFillCheckCircle size={20} className="text-white" />
                      )}
                    </div>
                    <p>1. Откуда требуется перевозка</p>
                  </div>
                  <div
                    className={`py-[17px] ${
                      list.includes("Куда")
                        ? "bg-[#028BC1] text-white"
                        : "bg-white"
                    } px-[20px] rounded-xl h-[130px] w-[199px] text-[#667582] cursor-pointer flex items-start gap-[10px] font-bold text-lg`}
                    onClick={() => listHandler("Куда")}
                  >
                    <div
                      className={`h-[20px] w-[20px] ${
                        list.includes("Куда") ? "bg-transparent" : "bg-slate-50"
                      }  rounded-xl grid place-items-center`}
                    >
                      {list.includes("Куда") && (
                        <AiFillCheckCircle size={20} className="text-white" />
                      )}
                    </div>
                    <p>2. Куда требуется перевозка</p>
                  </div>
                  <div
                    className={`py-[17px] ${
                      list.includes("Тип")
                        ? "bg-[#028BC1] text-white"
                        : "bg-white"
                    } px-[20px] rounded-xl h-[130px] w-[199px] border border-[#D6EAFF] cursor-pointer flex items-start gap-[10px] text-[#667582] font-bold text-lg`}
                    onClick={() => listHandler("Тип")}
                  >
                    <div
                      className={`h-[20px] w-[20px] ${
                        list.includes("Тип") ? "bg-transparent" : "bg-slate-50"
                      }  rounded-xl grid place-items-center`}
                    >
                      {list.includes("Тип") && (
                        <AiFillCheckCircle size={20} className="text-white" />
                      )}
                    </div>
                    <p>3. Тип доставки</p>
                  </div>
                  <div
                    className={`py-[17px] ${
                      list.includes("Контактные")
                        ? "bg-[#028BC1] text-white"
                        : "bg-white"
                    } pl-[20px] rounded-xl h-[130px] w-[199px] border border-[#D6EAFF] flex items-start gap-[10px] cursor-pointer text-[#667582] font-bold text-lg`}
                    onClick={() => listHandler("Контактные")}
                  >
                    <div
                      className={`h-[20px] w-[20px] ${
                        list.includes("Контактные")
                          ? "bg-transparent"
                          : "bg-slate-50"
                      }  rounded-xl grid place-items-center`}
                    >
                      {list.includes("Контактные") && (
                        <AiFillCheckCircle size={20} className="text-white" />
                      )}
                    </div>
                    <p>4. Контактные данные</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl py-[40px] px-[30px] ">
                <p className="text-3xl font-bold mb-[30px]">
                  Или свяжитесь с нами
                </p>
                <div className="flex flex-col gap-[30px]">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[443px] border border-[#D6EAFF] bg-[#F3F9FF] py-[16px] placeholder:text-[#667582] placeholder:text-base placeholder:font-semibold pl-[21px] outline-none rounded-xl"
                    placeholder="Представитель Имя"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[443px] border border-[#D6EAFF] bg-[#F3F9FF] py-[16px] placeholder:text-[#667582] placeholder:text-base placeholder:font-semibold pl-[21px] outline-none rounded-xl"
                    placeholder="Телефон +7 ___ ___ __ __"
                  />
                  <button className="rounded-xl text-lg font-bold text-center py-[27px] w-full bg-[#FFD200]">
                    Заказать звонок
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white pt-[60px] pb-[100px] ">
          <div className="container">
            <h1 className="title">Виды перевозимых грузов</h1>
            <div className="grid grid-cols-3 gap-[30px] mt-[60px]">
              <div className="bg-[#F3F9FF] rounded-xl p-[30px] bg-one bg-no-repeat bg-contain bg-right">
                <p className="pt-[10px] pb-[23px] text-[#667582] text-lg max-w-[300px]">
                  Принимаем, сопровождаем и сдаем груз по утвержденному
                  маршруту. Контролируем правильное оформление...
                </p>
              </div>
              <div className="bg-[#F3F9FF] rounded-xl p-[30px] bg-two bg-no-repeat bg-contain bg-right">
                <p className="pt-[10px] pb-[23px] text-[#667582] text-lg max-w-[300px]">
                  Принимаем, сопровождаем и сдаем груз по утвержденному
                  маршруту. Контролируем правильное оформление...
                </p>
              </div>
              <div className="bg-[#F3F9FF] rounded-xl p-[30px] bg-three bg-no-repeat bg-contain bg-right">
                <p className="pt-[10px] pb-[23px] text-[#667582] text-lg max-w-[300px]">
                  Принимаем, сопровождаем и сдаем груз по утвержденному
                  маршруту. Контролируем правильное оформление...
                </p>
              </div>
              <div className="bg-[#F3F9FF] rounded-xl p-[30px] bg-four bg-no-repeat bg-contain bg-right">
                <p className="pt-[10px] pb-[23px] text-[#667582] text-lg max-w-[300px]">
                  Принимаем, сопровождаем и сдаем груз по утвержденному
                  маршруту. Контролируем правильное оформление...
                </p>
              </div>
              <div className="bg-[#F3F9FF] rounded-xl p-[30px] bg-five bg-no-repeat bg-contain bg-right">
                <p className="pt-[10px] pb-[23px] text-[#667582] text-lg max-w-[300px]">
                  Принимаем, сопровождаем и сдаем груз по утвержденному
                  маршруту. Контролируем правильное оформление...
                </p>
              </div>
              <div className="bg-[#F3F9FF] rounded-xl p-[30px] bg-one bg-no-repeat bg-contain bg-right">
                <p className="pt-[10px] pb-[23px] text-[#667582] text-lg max-w-[300px]">
                  Принимаем, сопровождаем и сдаем груз по утвержденному
                  маршруту. Контролируем правильное оформление...
                </p>
              </div>
              <div className="bg-[#F3F9FF] rounded-xl p-[30px] bg-one bg-no-repeat bg-contain bg-right">
                <p className="pt-[10px] pb-[23px] text-[#667582] text-lg max-w-[300px]">
                  Принимаем, сопровождаем и сдаем груз по утвержденному
                  маршруту. Контролируем правильное оформление...
                </p>
              </div>
              <div className="bg-[#F3F9FF] rounded-xl p-[30px] bg-two bg-no-repeat bg-contain bg-right">
                <p className="pt-[10px] pb-[23px] text-[#667582] text-lg max-w-[300px]">
                  Принимаем, сопровождаем и сдаем груз по утвержденному
                  маршруту. Контролируем правильное оформление...
                </p>
              </div>
              <div className="bg-[#F3F9FF] rounded-xl p-[30px] bg-four bg-no-repeat bg-contain bg-right">
                <p className="pt-[10px] pb-[23px] text-[#667582] text-lg max-w-[300px]">
                  Принимаем, сопровождаем и сдаем груз по утвержденному
                  маршруту. Контролируем правильное оформление...
                </p>
              </div>
              <div className="bg-[#F3F9FF] rounded-xl p-[30px] bg-four bg-no-repeat bg-contain bg-right">
                <p className="pt-[10px] pb-[23px] text-[#667582] text-lg max-w-[300px]">
                  Принимаем, сопровождаем и сдаем груз по утвержденному
                  маршруту. Контролируем правильное оформление...
                </p>
              </div>
              <div className="bg-[#F3F9FF] rounded-xl p-[30px] bg-five bg-no-repeat bg-contain bg-right">
                <p className="pt-[10px] pb-[23px] text-[#667582] text-lg max-w-[300px]">
                  Принимаем, сопровождаем и сдаем груз по утвержденному
                  маршруту. Контролируем правильное оформление...
                </p>
              </div>
              <div className="bg-[#F3F9FF] rounded-xl p-[30px] bg-three bg-no-repeat bg-contain bg-right">
                <p className="pt-[10px] pb-[23px] text-[#667582] text-lg max-w-[300px]">
                  Принимаем, сопровождаем и сдаем груз по утвержденному
                  маршруту. Контролируем правильное оформление...
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-[60px] pb-[100px]">
          <div className="container">
            <h1 className="text-[80px] font-bold">Этапы работы</h1>
            <div className="grid grid-cols-3 gap-[30px] mt-[60px]">
              <div className="rounded-xl flex flex-col bg-white">
                <div>
                  <img src={workOne} alt="" className="w-full rounded-t-xl" />
                </div>
                <p className="text-[#667582] text-lg font-semibold p-[30px]">
                  Принимаем, сопровождаем и сдаем груз по утвержденному
                  маршруту. Контролируем правильное оформление
                </p>
              </div>
              <div className="rounded-xl flex flex-col bg-white">
                <div>
                  <img src={workTwo} alt="" className="w-full rounded-t-xl" />
                </div>
                <p className="text-[#667582] text-lg font-semibold p-[30px]">
                  Принимаем, сопровождаем и сдаем груз по утвержденному
                  маршруту. Контролируем правильное оформление
                </p>
              </div>
              <div className="rounded-xl flex flex-col bg-white">
                <div>
                  <img src={workThree} alt="" className="w-full rounded-t-xl" />
                </div>
                <p className="text-[#667582] text-lg font-semibold p-[30px]">
                  Принимаем, сопровождаем и сдаем груз по утвержденному
                  маршруту. Контролируем правильное оформление
                </p>
              </div>
              <div className="rounded-xl flex flex-col bg-white">
                <div>
                  <img src={workFour} alt="" className="w-full rounded-t-xl" />
                </div>
                <p className="text-[#667582] text-lg font-semibold p-[30px]">
                  Принимаем, сопровождаем и сдаем груз по утвержденному
                  маршруту. Контролируем правильное оформление
                </p>
              </div>
              <div className="rounded-xl flex flex-col bg-white">
                <div>
                  <img src={workFive} alt="" className="w-full rounded-t-xl" />
                </div>
                <p className="text-[#667582] text-lg font-semibold p-[30px]">
                  Принимаем, сопровождаем и сдаем груз по утвержденному
                  маршруту. Контролируем правильное оформление
                </p>
              </div>
              <div className="rounded-xl flex flex-col bg-white">
                <div>
                  <img src={workSix} alt="" className="w-full rounded-t-xl" />
                </div>
                <p className="text-[#667582] text-lg font-semibold p-[30px]">
                  Принимаем, сопровождаем и сдаем груз по утвержденному
                  маршруту. Контролируем правильное оформление
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Form />
        </div>

        <div className="pt-[60px] pb-[100px] bg-white">
          <div className="container">
            <h1 className="text-[80px] font-bold">FAQ</h1>
            <div className="space-y-[30px]">
            <div className="bg-[#F3F9FF]  rounded-xl">
              <div
                onClick={() => faqHandler("firstfaq")}
                className={`py-[35px] flex ${
                  faq == "firstfaq" && "bg-[#FFD200]"
                } items-center justify-between px-[30px] rounded-t-xl text-[22px] font-semibold`}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                {faq == "firstfaq" ? (
                  <RxCross1 size={34}  className="text-[#667582]"/>
                ) : (
                  <AiOutlinePlus size="34"  className="text-[#667582]"/>
                )}
              </div>
              <AnimatePresence>
                {faq == "firstfaq" && (
                  <motion.div
                    initial={{ y: -30, opacity: 0,  }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0, transition:{duration:0} }}
                    className="p-[30px]"
                  >
                    <p className="text-3xl font-bold pb-[30px]">
                      Lorem ipsum dolor sit amet
                    </p>
                    <p className="text-lg font-semibold p">
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse
                    </p>
                    <ul className="list-disc list-inside pt-[30px]">
                      <li>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditii
                      </li>
                      <li>
                        Sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia deserunt{" "}
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="bg-[#F3F9FF]  rounded-xl">
              <div
                onClick={() => faqHandler("secondFaq")}
                className={`py-[35px] flex ${
                  faq == "secondFaq" && "bg-[#FFD200]"
                } items-center justify-between px-[30px] rounded-t-xl text-[22px] font-semibold`}
              >
                <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                {faq == "secondFaq" ? (
                  <RxCross1 size={34}  className="text-[#667582]"/>
                ) : (
                  <AiOutlinePlus size="34"  className="text-[#667582]"/>
                )}
              </div>
              <AnimatePresence>
                {faq == "secondFaq" && (
                  <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 , transition:{duration:0}}}
                    className="p-[30px]"
                  >
                    <p className="text-3xl font-bold pb-[30px]">
                      Lorem ipsum dolor sit amet
                    </p>
                    <p className="text-lg font-semibold p">
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse
                    </p>
                    <ul className="list-disc list-inside pt-[30px]">
                      <li>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditii
                      </li>
                      <li>
                        Sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia deserunt{" "}
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="bg-[#F3F9FF]  rounded-xl">
              <div
                onClick={() => faqHandler("threeFaq")}
                className={`py-[35px] flex ${
                  faq == "threeFaq" && "bg-[#FFD200]"
                } items-center justify-between px-[30px] rounded-t-xl text-[22px] font-semibold`}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                {faq == "threeFaq" ? (
                  <RxCross1 size={34}  className="text-[#667582]"/>
                ) : (
                  <AiOutlinePlus size="34" className="text-[#667582]" />
                )}
              </div>
              <AnimatePresence>
                {faq == "threeFaq" && (
                  <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0, transition:{duration:0} }}
                    className="p-[30px]"
                  >
                    <p className="text-3xl font-bold pb-[30px]">
                      Lorem ipsum dolor sit amet
                    </p>
                    <p className="text-lg font-semibold p">
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse
                    </p>
                    <ul className="list-disc list-inside pt-[30px]">
                      <li>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditii
                      </li>
                      <li>
                        Sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia deserunt{" "}
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingProductsTwo;
