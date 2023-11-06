import React , {useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const nav = useNavigate()
    const userName = useRef('')
    const userLogin = useRef('')

    const submitHandler = e=> {
        e.preventDefault()
        if(userName.current.value != '' && userLogin.current.value != ''){
            const  info = {nmae: userName.current.value, password: userLogin.current.value}
            localStorage.setItem('token', JSON.stringify(info))
            nav('/')
        }
        
    }

  return (
    <div className='h-[89vh] '>
        <div className='pt-[32px] h-[504px]  flex justify-center'>
        <div className='bg-white rounded-xl w-[496px] '>
            <p className=' text-center p-[30px] border-b border-[#D6EAFF] text-3xl font-bold'>Личный кабинет</p>
            <div className='p-[30px] '>
                <form action="" onSubmit={submitHandler} className='space-y-[30px]'>
                    <input type="text" placeholder='Username' className='border-[#D6EAFF] border rounded-xl p-[16px] placeholder:text-base placeholder:text-[#667582] w-full block outline-none' ref={userName}/>
                    <input type="text" placeholder='password' className='border-[#D6EAFF] border rounded-xl p-[16px] placeholder:text-base placeholder:text-[#667582] w-full block outline-none' ref={userLogin}/>
                    <button className='w-full rounded-xl py-[17px] bg-[#FFD200] text-lg font-bold' type='submit'>Войти</button>
                </form>
                <Link to='#' className='font-semibold text-[22px] text-[#006790] text-center block mt-[30px]'>Восстановление пароля</Link>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login