import React from "react";
import { clock, price, scure, map, cart, translater } from "../Assets/images";
const DATA = [
  {
    title: "Экономия времени",
    paragh: "Не надо звонить и вести долгие переговоры",
    img: clock,
  },
  {
    title: "Гарантия цены",
    paragh: "Исполнитель не изменит цену и условия в последний момент",
    img: price,
  },
  {
    title: "Страхование грузов",
    paragh: "Перевозчики торгуются  за ваш заказ,   снижая цены",
    img: scure,
  },
  {
    title: "Отслеживание груза",
    paragh: "НСхема отслеживая   покажет     где ваш груз",
    img: map,
  },
  {
    title: "Оплата картой",
    paragh:
      "Оплата картой и Яндекс.Деньги,   а так же    большой выбор    других способов оплаты",
    img: cart,
  },
  {
    title: "Надёжные перевозчики",
    paragh:
      "Все перевозчики проходят  у нас проверку  документов   и подтверждение транспорта",
    img: translater,
  },
];

const Приемущества = () => {
  return (
    <div className="bg-white pt-[60px] pb-[200px]">
      <div className="container">
        <h1 className="title">Приемущества</h1>
        <div className="grid grid-cols-3 gap-[30px]">
          {DATA.map((value, idx) => {
            return (
              <div key={idx} className="rounded-xl bg-[#F3F9FF] p-[30px] ">
                <p className="text-3xl font-bold">{value.title}</p>
                <div className=" flex items-center justify-between">
                  <p className="text-lg text-[#667582] max-w-[300px]">
                    {value.paragh}
                  </p>
                  <img src={value.img} alt="" className="h-[100px] w-[100px]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Приемущества;
