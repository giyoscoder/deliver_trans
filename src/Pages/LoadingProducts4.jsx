import React from "react";
import { Link } from "react-router-dom";
import {Приемущества, Form} from '../components'

const LoadingProductsFour = () => {
  return (
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
      <div className="pt-[60px] pb-[100px]">
        <div className="container">
          {[1, 2, 3, 4].map((a) => {
            return (
              <div>
                <p className="text-3xl font-bold mt-[60px]">Lorem ipsum dolor sit amet</p>
                <p className="text-lg font-semibold py-[30px]">
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse
                </p>
                <ul className="text-lg font-semibold list-inside">
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
            );
          })}
        </div>
      </div>

      <div>
         <Приемущества />
      </div>
      <div>
        <Form/>
      </div>
    </div>
  );
};

export default LoadingProductsFour;
