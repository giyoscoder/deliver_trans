import React, { useContext } from "react";
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
} from "./Pages";
import { Route, Routes } from "react-router-dom";
import { Context } from "./Context/ModalContext";
import Addrequest from "./Pages/Addrequest";

const App = () => {
  const { modalShow, setModalShow } = useContext(Context);
  modalShow
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "");
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

       <nav className="py-[20px] bg-white border-b border-[#F3F9FF]">
        <div className="px-[30px]">
          <div className="flex items-center justify-between">
            <div>
              <img src={logo2} alt="" />
            </div>
            <div className="flex items-center gap-[30px]">
              <p className="text-lg font-bold cursor-pointer">Заявки</p>
              <p className="text-lg font-bold cursor-pointer">Настройки</p>
            </div>
            <div>
              <button className="text-lg font-bold text-[#FF6969]">
                Выйти
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' index element={<Dashboard />}/>
        <Route path='/add' index element={< Addrequest/>}/>
      </Routes>
      
      {modalShow && <Modal />}
    </div>
  );
};

export default App;
