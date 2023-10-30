import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import TrackCard from "./TrackCard";
import {furgon, furgon2, gurzavik, gurzavik2, miniCal} from '../Assets/images'
const CARD_DATA = [
    {name: 'Фургон', img: furgon , book:'Заказать', calImg: miniCal},
    {name: 'Грузовик', img: gurzavik , book:'Заказать', calImg: miniCal},
    {name: 'Фургон', img: furgon2 , book:'Заказать', calImg: miniCal},
    {name: 'Грузовик', img: gurzavik2 , book:'Заказать', calImg: miniCal},
]

const Track = () => {
  const [choseType, setChoseType] = useState('');

  return (
    <div className="bg-[#F3F9FF] pb-24">
      <div className="container">
        <div className=" -translate-y-5 flex items-center gap-[30px]">
          <div className="flex w-full bg-[#F3F9FF]  rounded-xl p-[10px] items-center justify-between ">
            {["Тент", "Борт", "Рефрижератор", "Фургон"].map((value, idx) => {
              return (
                <NavLink
                  to={'/'}
                  className={`${choseType === value && 'bg-[#028BC1]'} hover:text-white text-lg font-bold  text-center py-[17px] w-[319px] rounded-xl text-[#028BC1]  hover:bg-[#028BC1]`}
                  key={idx}
                  onClick={()=> setChoseType(value)}
                >
                  {value}
                </NavLink>
              );
            })}
          </div>
          <div className="bg-[#FFD200] p-[24px] rounded-xl">
            <img src={miniCal} alt="" />
          </div>
        </div>
        <div className="flex items-center justify-between gap-[30px] mt-[80px]">
            {CARD_DATA.map(({name, img, book, calImg})=> (<TrackCard cartypeImg={img} cartypeText={name} book={book} calImg={calImg}/>))}
        </div>
      </div>
    </div>
  );
};

export default Track;
