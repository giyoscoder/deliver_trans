import React, { useState } from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Link } from "react-router-dom";
import { loremImg } from "../Assets/images";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {AiFillCheckCircle} from 'react-icons/ai'
import { Checkbox } from "@material-tailwind/react";

const LoadingProductsTwo = () => {
  const [list, setList] = useState([]);
  const listHandler = (e) => {
    if (list.includes(e)) {
      setList((prev) => prev.filter((fil) => fil != e));
    } else {
      setList((prev) => [...prev, e]);
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
            <div className="flex items-center justify-between gap-[30px]">
              <div className="bg-white rounded-xl p-[30px]">
                <p className="text-3xl font-bold">
                    <Checkbox icon={RadioButtonUncheckedIcon} checkedIcon={CheckCircleIcon}/>
                  1. Куда требуется перевозка?
                </p>
                <div className="flex items-center gap-[30px] mt-[30px] mb-[80px]">
                  <input
                    className="py-[16px] pl-[21px] text-[#667582] text-base font-semibold outline-none rounded-xl border border-[#D6EAFF] bg-white w-full"
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
                      list.includes("Откуда") ? "bg-[#028BC1] text-white" : "bg-white"
                    } px-[50px] rounded-xl border border-[#D6EAFF] flex items-start gap-[10px] text-[#667582] font-bold text-lg`}
                    onClick={()=> listHandler('Откуда')}
                  > 
                   
                    <p>1. Откуда требуется перевозка</p>
                  </div>
                  <div
                    className={`py-[17px] ${
                      list.includes("Куда") ? "bg-[#028BC1] text-white" : "bg-white"
                    } px-[50px] rounded-xl text-[#667582] font-bold text-lg`}
                    onClick={()=>listHandler('Куда')}
                  >
                    <p>2. Куда требуется перевозка</p>
                  </div>
                  <div
                    className={`py-[17px] ${
                      list.includes("Тип") ? "bg-[#028BC1] text-white" : "bg-white"
                    } px-[50px] rounded-xl border border-[#D6EAFF] text-[#667582] font-bold text-lg`}
                    onClick={()=> listHandler('Тип')}
                  >
                    <p>3. Тип доставки</p>
                  </div>
                  <div
                    className={`py-[17px] ${
                      list.includes("Контактные") ? "bg-[#028BC1] text-white" : "bg-white"
                    } px-[50px] rounded-xl border border-[#D6EAFF] text-[#667582] font-bold text-lg`}
                    onClick={()=> listHandler('Контактные')}
                  >
                    <p>3. Контактные данные</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingProductsTwo;
