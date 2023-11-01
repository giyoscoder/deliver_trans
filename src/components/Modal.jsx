import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Context } from "../Context/ModalContext";

const Modal = () => {
  const { modalShow, setModalShow } = useContext(Context);
  return (
    <>
      <div className="rounded-xl w-[1500px] z-50 p-[60px] bg-white bg-modalBg bg-no-repeat bg-right-top absolute left-[50%]  top-[50%] -translate-x-[50%] -translate-y-[50%]">
        <AiOutlineClose
          size="34"
          className="absolute top-3 right-3 text-white cursor-pointer"
          onClick={() => setModalShow((prev) => !prev)}
        />
        <div>
          <p className="text-[80px] font-bold ">
            Рассчитаите <br /> стоимость
          </p>
          <p className="text-3xl font-bold mt-[35px] mb-[60px]">
            Вы можете <span className="text-[#006790]">Зарегистрироваться</span>
          </p>
        </div>

        <form action="" className=" space-y-[30px]">
          <input
            type="text"
            className="py-[16px] pl-[21px]  outline-none rounded-xl w-[480px] border border-[#D6EAFF] bg-[#F3F9FF]"
            placeholder="Имя Ваше имя"
          />
          <input
            type="text"
            className="py-[16px] pl-[21px]  outline-none rounded-xl w-[480px] border border-[#D6EAFF] bg-[#F3F9FF] ml-[30px]"
            placeholder="Телефон  +7 ___ ___ __ __"
          />
          <input
            type="text"
            className="py-[16px] pl-[21px]  outline-none rounded-xl w-[480px] border border-[#D6EAFF] bg-[#F3F9FF]"
            placeholder="Почта  mail@mail.ru"
          />
          <input
            type="text"
            className="py-[16px] pl-[21px]  outline-none rounded-xl w-[480px] border border-[#D6EAFF] bg-[#F3F9FF] ml-[30px]"
            placeholder="Куда
            Например: Владивосток
            "
          />
          <input
            type="text"
            className="py-[16px] pl-[21px]  outline-none rounded-xl w-[480px] border border-[#D6EAFF] bg-[#F3F9FF]"
            placeholder="Почта
            mail@mail.ru"
          />
          <input
            type="text"
            className="py-[16px] pl-[21px]  outline-none rounded-xl w-[480px] border border-[#D6EAFF] bg-[#F3F9FF] ml-[30px]"
            placeholder="Комментарий к заказу
            Ваш комментарий"
          />
        </form>

        <div className="flex items-center gap-[30px] mt-[70px]">
          <button className="bg-[#FFD200] rounded-xl border-none outline-none py-[18px] w-[1115px] text-lg font-bold">
            Заказать
          </button>
          <button className="bg-[#FFD200] rounded-xl border-none outline-none py-[18px] w-[235px] text-lg font-bold">
            Рассчитать перевозку
          </button>
        </div>
      </div>
      <div
        className="bg-modal h-screen w-screen fixed top-0 left-0"
        onClick={() => setModalShow((prev) => !prev)}
      ></div>
    </>
  );
};

export default Modal;
