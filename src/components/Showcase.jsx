import React, { useContext } from "react";
import { miniCal, maneger } from "../Assets/images";
import { Context } from "../Context/ModalContext";

const Showcase = () => {
  const { modalShow, setModalShow } = useContext(Context);

  return (
    <div className="bg-darkMain relative">
      <div className=" bg-showcaseImg h-full bg-no-repeat bg-right">
        <div className="bg-showcaseLinear h-full">
          <div className="container  pt-[60px] pb-[140px]">
            <h1 className="text-white text-[80px] font-semibold ">
              Доставим ваш <br />
              груз в любую <br /> точку России
            </h1>
            <p className="text-xl font-semibold text-white mt-[50px]">
              Доставляем сборный груз от 1кг по всей стране <br /> узнай
              стоймость перевозки прямо сейчас
            </p>
          </div>
        </div>
      </div>
      <div className="w-[150px] bg-darkMain absolute -translate-y-[50%] top-[50%] right-0 p-[30px] rounded-s-xl border border-navInput flex flex-col gap-[22px]">
        <div onClick={() => setModalShow((prev) => !prev)}>
          <div className="bg-[#FFD200] rounded-xl py-[25px] grid place-items-center">
            <img src={miniCal} alt="calculator" />
          </div>
          <p className="text-white text-lg mt-[15px] font-semibold text-center">
            расчитать стоймость
          </p>
        </div>
        <div>
          <div className="bg-[#FFD200] pt-[25px] rounded-xl grid place-items-center">
            <img src={maneger} alt="calculator" />
          </div>
          <p className="mt-[15px] text-white text-lg font-semibold text-center">
            расчитать стоймость
          </p>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
