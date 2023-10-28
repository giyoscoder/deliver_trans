import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { logo, miniCal } from "../Assets/images";
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BiSolidUser } from "react-icons/bi";
import ListPage from "./ListPage";
import { Context } from "../Context/ModalContext";

const Navbar = () => {
  const { modalShow, setModalShow } = useContext(Context);
  const [country, setCountry] = useState("Выбор города");
  const [countryShow, setCountryShow] = useState(false);

  const selectCountry = (e) => {
    setCountryShow((prev) => !prev);
  };

  return (
    <div>
      <nav className=" bg-darkMain py-5">
        <div className="container flex items-center justify-between">
          <Link to="/" className="cursor-pointer">
            <img src={logo} alt="transLogo" />
          </Link>
          <Link
            to="tel:7 123 456 78 90"
            className="flex items-center gap-[11px] hover:scale-95 transition-all duration-200 bg-[#FFD200] rounded-xl p-[18px] font-bold text-[18px]"
          >
            <BsTelephoneFill />
            <p>7 123 456 78 90</p>
          </Link>
          <div className="w-[528px] border rounded-xl hover:border-white focus:border-white active:border-white border-navInput">
            <input
              type="text"
              placeholder="Поиск"
              className="outline-none border-none py-4 pl-4 text-white  bg-transparent w-full placeholder:text-white placeholder:text-lg placeholder:font-semibold"
            />
          </div>
          <div className="relative w-[189px] z-30" onClick={selectCountry}>
            <div
              className={`cursor-pointer border border-[#D6EAFF] ${
                !countryShow ? "rounded-xl" : "rounded-t-xl"
              } py-[18px] px-[20px]  bg-[#D6EAFF] flex items-center justify-between`}
            >
              <p className="text-lg font-bold text-[#007EB0] whitespace-nowrap">
                {country}
              </p>
              {countryShow ? (
                <IoIosArrowUp size="10" className="text-[#007EB0]" />
              ) : (
                <IoIosArrowDown size="10" className="text-[#007EB0]" />
              )}
            </div>
            {countryShow && (
              <div
                className={`absolute cursor-pointer py-[18px] border border-[#D6EAFF] px-[21px] rounded-b-xl top-full w-full  bg-white text-lg font-bold`}
              >
                <p
                  className="cursor-pointer"
                  onClick={() => setCountry("Москва")}
                >
                  Москва
                </p>
                <p
                  className="mt-5"
                  onClick={() => setCountry("Санкт петербург")}
                >
                  Санкт петербург
                </p>
                <p className="mt-5" onClick={() => setCountry("Новосибирск")}>
                  Новосибирск
                </p>
              </div>
            )}
          </div>
          <div
            className="flex items-center gap-[10px] py-[18px] px-5 hover:scale-95 transition-all duration-200 bg-[#FFD200] rounded-xl"
            onClick={() => setModalShow((prev) => !prev)}
          >
            <img src={miniCal} alt="calculator" className="w-[12px] h-[16px]" />
            <button className="font-bold text-[18px]">Калькулятор</button>
          </div>
          <div className="flex items-center gap-[10px] hover:scale-95 transition-all duration-200 cursor-pointer hover: text-bold text-[18px] text-white p-[18px] border border-white rounded-xl">
            <BiSolidUser size="15" />
            <p>Вход</p>
          </div>
        </div>
      </nav>
      <ListPage />
    </div>
  );
};

export default Navbar;
