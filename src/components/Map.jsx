import React from "react";
import { location } from "../Assets/images";
import { FaWeightHanging } from "react-icons/fa";
import {BiCube} from 'react-icons/bi'
import{MdOutlineSecurity} from 'react-icons/md'
import{RxCrossCircled} from 'react-icons/rx'
import {BsTelephoneFill} from 'react-icons/bs'

const Map = () => {
  return (
    <div className="mt-[30px] pb-[100px]">
      <div className="container">
        <div className="grid grid-cols-3 h-full">
          <div className="col-span-2 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11983.660102364038!2d69.2644362!3d41.3324611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b6cbd7e49a1%3A0xf23c3817c486d743!2sAmity%20University%20Tashkent!5e0!3m2!1sru!2s!4v1698486339861!5m2!1sru!2s"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="bg-white rounded-e-xl ">
            <div className="flex items-center gap-[10px] p-[30px] border-b border-[#D6EAFF]">
              <img src={location} alt="" />
              <div className="text-lg font-bold flex flex-col gap-[30px]">
                <p>
                  <span className="text-[#C7C7C7] block">Откуда</span> Москва
                </p>
                <p>
                  <span className="text-[#C7C7C7] block">Куда</span>{" "}
                  Санкт-Петербург
                </p>
              </div>
            </div>
            <div className="p-[30px]  border-b border-[#D6EAFF]">
              <div className="flex items-center justify-evenly gap-[30px]">
                <div className="flex items-center gap-[10px]  ">
                  <p className="text-lg text-darkMain font-bold rounded-full p-[13px] bg-[#D6EAFF] inline-block">
                    <FaWeightHanging />
                  </p>
                  <div className="flex items-center font-bold gap-[10px] ">
                  1000 кг
                  </div>
                </div>
                <div className="flex items-center gap-[10px] ">
                  <p className="text-lg text-darkMain font-bold rounded-full p-[13px] bg-[#D6EAFF] inline-block">
                    <BiCube />
                  </p>

                  <div className="flex items-center font-bold gap-[10px] ">
                  10 <span>м<sup>3</sup></span>
                  </div>
                </div>
                <div className="flex items-center gap-[10px]  ">
                  <p className="text-lg text-darkMain font-bold rounded-full p-[13px] bg-[#D6EAFF] inline-block">
                    <MdOutlineSecurity />
                  </p>
                  <div className=" font-bold gap-[10px] ">
                  100 тыс ₽
                  </div>
                </div>
              </div>
            </div>
            <div className="p-[30px]  border-b border-[#D6EAFF]">
                <p className="text-xl font-bold text-[#667582] text-center">Опции</p>
              <div className="flex flex-col gap-[10px] mt-[20px]">
              <div className="flex items-center justify-between bg-[#F3F9FF] rounded-[20px] p-[7px]">
                    <p className="text-[#667582] font-semibold text-lg">Название опции</p>
                    <div className="flex items-center gap-5">
                        <p className="text-black font-semibold text-lg">5 525 ₽</p>
                        <RxCrossCircled size={20} className="text-red-500"/>
                    </div>
                </div>

                <div className="flex items-center justify-between bg-[#F3F9FF] rounded-[20px] p-[7px]">
                    <p className="text-[#667582] font-semibold text-lg">Название опции</p>
                    <div className="flex items-center gap-5">
                        <p className="text-black font-semibold text-lg">500 ₽</p>
                        <RxCrossCircled size={20} className="text-red-500"/>
                    </div>
                </div>

                <div className="flex items-center justify-between bg-[#F3F9FF] rounded-[20px] p-[7px]">
                    <p className="text-[#667582] font-semibold text-lg">Название опции</p>
                    <div className="flex items-center gap-5">
                        <p className="text-black font-semibold text-lg">5 525 ₽</p>
                        <RxCrossCircled size={20} className="text-red-500"/>
                    </div>
                </div>
                <div className="flex items-center justify-between bg-[#F3F9FF] rounded-[20px] p-[7px]">
                    <p className="text-[#667582] font-semibold text-lg">Название опции</p>
                    <div className="flex items-center gap-5">
                        <p className="text-black font-semibold text-lg">500 ₽</p>
                        <RxCrossCircled size={20} className="text-red-500"/>
                    </div>
                </div>
              </div>
            </div>
            <div className="p-[30px]">
                    <p className="text-3xl font-bold ">100 525 ₽</p>
                    <div className="flex items-center justify-between bg-[#F3F9FF] rounded-[20px] py-[7px] px-[20px] my-[20px]">
                        <p className="text-[#667582] text-lg font-semibold">10 - 20 дней в пути</p>
                        <button className="text-[#006790] border font-semibold border-[#006790] rounded-[20px]  py-[7px] px-[20px]">Стандарт</button>
                    </div>
                    <div className="flex items-center justify-between gap-[30px]">
                        <button className="grow bg-[#FFD200] rounded-xl font-bold py-[17px]">Оформить заказ</button>
                        <button className="bg-[#FFD200] rounded-xl p-[20px] ">
                            <BsTelephoneFill/>
                        </button>
                    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
