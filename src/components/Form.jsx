import React from "react";

const Form = () => {
  return (
    <div className="form pt-[60px] pb-[100px] ">
      <div className="container">
        <h1 className="title text-white">
          Нет времени разбираться? Подскажем!
        </h1>
        <form action="" className="pt-[50px] pb-[30px]">
          <div className="flex items-center justify-between gap-[30px]">
            <input
              type="text"
              className="w-full py-[16px] px-[21px] rounded-xl outline-none border-none"
              placeholder="Я хочу перевезти апример: Кухонный уголок"
            />
            <input
              type="text"
              className="w-full py-[16px] px-[21px] rounded-xl outline-none border-none"
              placeholder=" Откуда - Куда Например: Москва - Владивосток"
            />
            <input
              type="text"
              className="w-full py-[16px] px-[21px] rounded-xl outline-none border-none"
              placeholder="Телефон +7 ___ ___ __ _"
            />
          </div>
        </form>
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-5">
           <input type="checkbox" id='checked' />
           <label for='checked' className="text-lg font-semibold text-white">Согласие на обработку персональных данных</label>
           </div>
           <button className="text-lg font-bold  py-[18px] px-[22px] rounded-xl bg-[#FFD200]">Оставить заявку</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
