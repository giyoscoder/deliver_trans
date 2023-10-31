import React, { useContext } from "react";
import { Navbar, Footer, Main, Modal } from "./components";
import {
  Service,
  LoadingProducts,
  LoadingProductsTwo,
  Cargo,
  Contact,
} from "./Pages";
import { Route, Routes } from "react-router-dom";
import { Context } from "./Context/ModalContext";

const App = () => {
  const { modalShow, setModalShow } = useContext(Context);
  return (
    <div className="nunito bg-[#F3F9FF]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/service" element={<Service />} />
        <Route path="/loadingProducts" element={<LoadingProducts />} />
        <Route path="/loadingProducts2" element={<LoadingProductsTwo />} />
        <Route path="/cargo" element={<Cargo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      {modalShow && <Modal />}
    </div>
  );
};

export default App;
