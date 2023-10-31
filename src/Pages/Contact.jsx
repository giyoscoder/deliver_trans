import React from "react";
import { Link } from "react-router-dom";
import {
  Contactimg,
  youtube,
  ok,
  wek,
  instagram,
  phone,
  email,
  locationcontact,
  address,
  data,
} from "../Assets/images";
import {
  AiFillInstagram,
  AiFillYoutube,
  FaOdnoklassnikiSquare,
} from "react-icons/ai";

const Contact = () => {
  return (
    <div className="bg-white pt-[60px] pb-[100px]">
      <div className="container">
        <div className="flex item-center text-[#667582] text-lg font-semibold">
          <Link to="/">Главная</Link>&nbsp;
          <Link>&#8725; Услуги</Link>
        </div>
        <h1 className="text-[80px] font-bold">Контакты</h1>
      </div>

      <div className="bg-contactimg bg-no-repeat bg-cover  p-[30px] mt-[50px]">
        <div className="container flex items-end justify-between">
          <div className="h-full bg-white rounded-xl p-[30px] flex  items-center  gap-[30px]">
            <img src={youtube} alt="" className="h-[68px] w-[68px]" />
            <img src={instagram} alt="" className="h-[68px] w-[68px]" />
            <img src={wek} alt="" className="h-[68px] w-[68px]" />
            <img src={ok} alt="" className="h-[68px] w-[68px]" />
          </div>
          <div className="flex flex-col gap-[30px]">
            <div className="bg-white rounded-xl flex  ">
              <img src={phone} alt="" className="rounded-l-xl" />
              <div className="p-[30px]">
                <ul className="flex flex-col justify-between h-full text-[22px] font-bold">
                  <li>7 916 470 06 92</li>
                  <li>7 123 456 78 90</li>
                  <li> 7 495 136 60 45 </li>
                  <li>7 123 456 78 90</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl flex  ">
              <img src={email} alt="" className="rounded-l-xl w-[83px]" />
              <div className="p-[30px]">
                <p className="flex flex-col justify-between h-full text-[22px] font-bold">
                  e-mailadress@mail.ru
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl flex  ">
              <img src={locationcontact} alt="" className="rounded-l-xl" />
              <div className="p-[30px]">
                <ul className="flex flex-col justify-between h-full text-[22px] font-bold">
                  <li>г. Название, ул. Название д.100, оф. 999</li>
                  <li>г. Название, ул. Название д.100, оф. 999</li>
                  <li>г. Название, ул. Название д.100, оф. 999</li>
                  <li>г. Название, ул. Название д.100, оф. 999</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl flex  ">
              <img src={data} alt="" className="rounded-l-xl" />
              <div className="p-[30px]">
                <ul className="flex flex-col justify-between h-full text-[22px] font-bold">
                  <li>График работы: </li>
                  <li>Пн-Вс 09:00 - 19:00</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl flex  ">
              <img src={address} alt="" className="rounded-l-xl" />
              <div className="p-[30px]">
                <ul className="flex flex-col justify-between h-full text-[22px] font-bold">
                  <li>Наименование компании ДеливериТранс</li>
                  <li>Руководитель: Фамилия Имя Отчество</li>
                  <li>ИНН: 1234567890987654321</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="container mt-[70px]">
          <table className="w-full">
            <tbody>
              <tr className="flex items-center py-[27px] px-[30px] odd:bg-[#F3F9FF]  rounded-t-xl justify-between text-[22px] font-semibold">
                <td>Наименование</td>
                <td>ООО "Деливеритранс"</td>
              </tr>
              <tr className="flex items-center py-[27px] px-[30px] odd:bg-[#F3F9FF]  justify-between text-[22px] font-semibold">
                <td>Почтовый адрес</td>
                <td>127081, город Москва, Чермянская ул, д. 1</td>
              </tr>
              <tr className="flex items-center py-[27px] px-[30px] odd:bg-[#F3F9FF] justify-between text-[22px] font-semibold">
                <td>ИНН</td>
                <td>9715395995</td>
              </tr>
              <tr className="flex items-center py-[27px] px-[30px] odd:bg-[#F3F9FF]  justify-between text-[22px] font-semibold">
                <td>Почтовый адрес</td>
                <td>127081, город Москва, Чермянская ул, д. 1</td>
              </tr>
              <tr className="flex items-center py-[27px] px-[30px] odd:bg-[#F3F9FF]   justify-between text-[22px] font-semibold">
                <td>ИНН</td>
                <td>9715395995</td>
              </tr>
              <tr className="flex items-center py-[27px] px-[30px] odd:bg-[#F3F9FF]   justify-between text-[22px] font-semibold">
                <td>ОГРН</td>
                <td> 1217700039974</td>
              </tr>
              <tr className="flex items-center py-[27px] px-[30px] odd:bg-[#F3F9FF]  rounded-b-xl justify-between text-[22px] font-semibold">
                <td>Наименование</td>
                <td>ООО "Деливеритранс"</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default Contact;
