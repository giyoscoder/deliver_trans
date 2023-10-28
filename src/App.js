import React, { useContext } from "react";
import { Navbar, Footer, Main, Modal } from "./components";
import {Service} from './Pages'
import { Route, Routes } from "react-router-dom";
import { Context } from "./Context/ModalContext";

const App = () => {
  const { modalShow, setModalShow } = useContext(Context);
  return (
    <div className="nunito">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer />
      {modalShow && <Modal />}
    </div>
  );
};

export default App;
