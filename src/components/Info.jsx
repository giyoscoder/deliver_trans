import React from 'react'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io';

const Info = () => {
  return (
    <div>
        <div className='flex items-center justify-center gap-[30px] w-full text-center cursor-pointer py-[60px] bg-[#F3F9FF] hover:bg-white'>
            <p className='title '>Рекомендации наших клиентов</p>
            <IoIosArrowDown size='50' className='text-[#C7C7C7]'/>
        </div>
        <div className='flex items-center justify-center  gap-[30px] py-[60px] cursor-pointer bg-[#F3F9FF] hover:bg-white'>
            <p className='title'>Новости и акции</p>
            <IoIosArrowDown size='50' className='text-[#C7C7C7]'/>
        </div>
        <div className='flex items-center justify-center gap-[30px] py-[60px] cursor-pointer bg-[#F3F9FF] hover:bg-white'>
            <p className='title '>Наши партнеры</p>
            <IoIosArrowDown size='50' className='text-[#C7C7C7]'/>
        </div>
    </div>
  )
}

export default Info