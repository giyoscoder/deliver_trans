import React, { useContext } from "react";
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

const App = () => {
  const { modalShow, setModalShow } = useContext(Context);
  modalShow
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "");
  return (
    <div className="nunito bg-[#F3F9FF]">
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/service" element={<Service />} />
        <Route path="/loadingProducts" element={<LoadingProducts />} />
        <Route path="/loadingProducts2" element={<LoadingProductsTwo />} />
        <Route path="/loadingProducts3" element={<LoadingProductsThree />} />
        <Route path="/loadingProducts4" element={<LoadingProductsFour />} />
        <Route path="/cargo" element={<Cargo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> */}
      <Dashboard />
      {modalShow && <Modal />}
    </div>
  );
};

export default App;
