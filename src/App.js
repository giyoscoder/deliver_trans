import React, { useContext, useState } from "react";
import { logo2 } from "./Assets/images";
import { Navbar, Footer, Main, Modal } from "./components";
import {
  Service,
  LoadingProducts,
  LoadingProductsTwo,
  LoadingProductsThree,
  LoadingProductsFour,
  Cargo,
  Contact,
  Dashboard,
  Login,
  Setting
} from "./Pages";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { Context } from "./Context/ModalContext";
import Addrequest from "./Pages/Addrequest";
import ProtectRoute from "./utils/ProtectRoute";

const App = () => {
  const { modalShow, setModalShow } = useContext(Context);
  const logIn = JSON.parse(localStorage.getItem("token"));
  const nav = useNavigate()
  const  [book, setBook] = useState('book')

  modalShow
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "");

    // localStorage.setItem("token", JSON.stringify({ name: "", password: "" }));

  return (
    <div className="nunito bg-[#F3F9FF]">
      {/* <Navbar />
      <Routes>
        <Route path="/" index element={<Main />} />
        <Route path="/service" element={<Service />} />
        <Route path="/loadingProducts" element={<LoadingProducts />} />
        <Route path="/loadingProducts2" element={<LoadingProductsTwo />} />
        <Route path="/loadingProducts3" element={<LoadingProductsThree />} />
        <Route path="/loadingProducts4" element={<LoadingProductsFour />} />
        <Route path="/cargo" element={<Cargo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> */}

      <nav className="bg-white">
        <div className="px-[30px]">
          <div className="flex items-center justify-between">
            <div className="py-[20px]">
              <img src={logo2} alt="" />
            </div>
            {logIn !== null  && (
              <div className="flex items-center gap-[30px]">
                <Link to='/' className={`text-lg font-bold border-b py-[20px] cursor-pointer ${book == 'book' &&  'text-[#006790] border-[#006790]'}`} onClick={(e)=> setBook('book')}>Заявки</Link>
                <Link to='/setting ' className={`text-lg font-bold border-b py-[20px] cursor-pointer ${book == 'setting' &&  'text-[#006790] border-[#006790]'}`}onClick={e => setBook('setting')}>Настройки</Link>
              </div>
            )}
            {logIn !== null && (
              <div>
                <button className="text-lg font-bold text-[#FF6969]" onClick={() => {
                  localStorage.removeItem('token')
                  nav('/')
                }}>
                  Выйти
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
      <Routes>
        <Route
          path="/"
          index
          element={
            <ProtectRoute>
              <Dashboard />
            </ProtectRoute>
          }
        />
        <Route path="/login" index element={<Login />} />
        <Route path="/add" index element={<Addrequest />} />
        <Route path="/setting" index element={<Setting />} />
      </Routes>

      {modalShow && <Modal />}
    </div>
  );
};

export default App;
