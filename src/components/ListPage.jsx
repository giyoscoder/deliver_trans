import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineMail} from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ListPage = () => {
  return (
    <div className="bg-lightMain py-[18px]">
      <div className="container">
        <ul className="flex items-center justify-between text-white font-bold text-lg">
          <Link to="/service" className="flex items-center gap-2">Услуги <IoIosArrowDown size='10' className="text-[#0098D4]"/> </Link>
          <Link to="#" className="flex items-center gap-2">Международные перевозки  <IoIosArrowDown size='10' className="text-[#0098D4]"/> </Link>
          <Link to="#" className="flex items-center gap-2">Для бизнеса  <IoIosArrowDown size='10' className="text-[#0098D4]"/> </Link>
          <Link to="#" className="flex items-center gap-2">Частным лицам  <IoIosArrowDown size='10' className="text-[#0098D4]"/> </Link>
          <Link to="#" className="flex items-center gap-2">О компании  <IoIosArrowDown size='10' className="text-[#0098D4]"/> </Link>
          <Link to="#" className="flex items-center gap-2">Блог  <IoIosArrowDown size='10' className="text-[#0098D4]"/> </Link>
          <Link to="#" className="flex items-center gap-2">Контакты  <IoIosArrowDown size='10' className="text-[#0098D4]"/> </Link>
          <Link to="#" className="flex items-center gap-2"> <AiOutlineMail size='10' className="text-[#0098D4]"/> deliverytrans@gmail.com </Link>
        </ul>
      </div>
    </div>
  );
};

export default ListPage;
