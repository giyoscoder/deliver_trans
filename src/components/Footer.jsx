import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BiBasketball } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-[#000] py-[40px]">
      <div className="container">
        <div className="grid grid-cols-4 text-white">
          <div>
            <div>
              <p className="text-3xl pb-5 font-bold">О компании</p>
              <ul className="text-[##F3F9FF] text-lg">
                <li>Филиалы</li>
                <li>Новости</li>
                <li>Блог</li>
                <li>Горячая линия</li>
              </ul>
            </div>
            <div className="mt-[50px]">
              <p className="text-3xl pb-5 font-bold">Контакты</p>
              <ul className="text-[##F3F9FF] text-lg leading-[50px]">
                <li className="flex items-center gap-[10px]">
                  {" "}
                  <span className="p-[7px] bg-[#2D2D2D] text-black rounded-full">
                    <BsTelephoneFill size={20} />
                  </span>{" "}
                  Филиалы
                </li>
                <li className="flex items-center gap-[10px]">
                  {" "}
                  <span className="p-[7px] bg-[#2D2D2D] text-black rounded-full">
                    <AiOutlineMail size={20} />
                  </span>
                  Новости
                </li>
                <li className="flex items-center gap-[10px]">
                  {" "}
                  <span className="p-[7px] bg-[#2D2D2D] text-black rounded-full">
                    <AiOutlineWhatsApp size={20} />
                  </span>
                  Блог
                </li>
                <li className="flex items-center gap-[10px]">
                  {" "}
                  <span className="p-[7px] bg-[#2D2D2D] text-black rounded-full">
                    <BiBasketball size={20} />
                  </span>
                  Горячая линия
                </li>
              </ul>
            </div>
            <div className="mt-[50px]">
              <p className="text-3xl pb-5">Соц сети</p>
              <div className="flex items-center gap-[50px]">
                <div className="p-[20px] rounded-2xl bg-[#2D2D2D] text-black">
                  <AiFillYoutube size="30" />
                </div>
                <div className="p-[20px] rounded-2xl bg-[#2D2D2D] text-black">
                  <AiOutlineInstagram size="30" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p className="text-3xl pb-5 font-bold">Направления</p>
              <ul className="text-[##F3F9FF] text-lg">
                <li>Тарифы</li>
                <li>Требования к грузу</li>
                <li>Требования к упаковке</li>
              </ul>
            </div>
            <div>
              <p className="text-3xl pb-5 mt-[50px] font-bold">Услуги</p>
              <ul className="text-[##F3F9FF] text-lg">
                <li>Тарифы</li>
                <li>Проверка груза по ттн</li>
                <li>Сотрудничество</li>
                <li>Электронный</li>
              </ul>
            </div>
            <div>
              <p className="text-3xl pb-5 font-bold">Акции</p>
              <p className="text-3xl pb-5 font-bold">Блог</p>
            </div>
          </div>
          <div>
            <div>
              <p className="text-3xl pb-5 font-bold">Международные перевозки</p>
              <ul className="text-[##F3F9FF] text-lg">
                <li>Грузоперевозки Москва–Омск</li>
                <li>Грузоперевозки Москва–Красноярск</li>
                <li>Грузоперевозки Москва-Ростов-на-Дону</li>
                <li>Грузоперевозки Москва-Челябинск</li>
                <li>Грузоперевозки Москва–Барнаул</li>
                <li>Грузоперевозки Москва–Самара</li>
                <li>Грузоперевозки Москва-Челябинск</li>
              </ul>
            </div>
            <div>
              <p className="text-3xl pb-5 mt-[50px] font-bold">
                Условия перевозок
              </p>
              <ul className="text-[##F3F9FF] text-lg">
                <li>Грузоперевозки Москва–Омск</li>
                <li>Грузоперевозки Москва–Красноярск</li>
                <li>Грузоперевозки Москва-Ростов-на-Дону</li>
              </ul>
            </div>
            <div>
              <p className="text-3xl pb-5 mt-[50px] font-bold">Автопарк</p>
            </div>
          </div>
          <div>
            <div>
              <p className="text-3xl pb-5 font-bold">Для бизнеса</p>
              <ul className="text-[##F3F9FF] text-lg">
                <li>Филиалы</li>
                <li>Новости</li>
                <li>Блог</li>
                <li>Горячая линия</li>
                <li>Вакансии</li>
              </ul>
            </div>
            <div>
              <p className="text-3xl pb-5 font-bold">Водителям</p>
              <ul className="text-[##F3F9FF] text-lg">
                <li>Филиалы</li>
                <li>Новости</li>
                <li>Блог</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <p className="py-[30px] border-t border-[#2D2D2D] mt-[30px] text-white font-semibold text-lg text-center">
        Политика конфиденциальности &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; Реквизиты
      </p>
    </div>
  );
};

export default Footer;
