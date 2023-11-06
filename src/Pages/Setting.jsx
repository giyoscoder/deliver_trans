import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Setting = () => {
  const [setting, setSetting] = useState("info");
  return (
    <div className="bg-white">
      <ul className="flex items-center justify-center gap-[30px] font-bold text-lg  border-b border-[#F3F9FF] px-[30px]">
        <li
          onClick={() => setSetting("info")}
          className={` py-[36px] ${
            setting == "info" && " border-[#028BC1] border-b text-[#028BC1]"
          } cursor-pointer hover:text-[#028bC1]`}
        >
          Изменить ФИО
        </li>
        <li
          onClick={() => setSetting("email")}
          className={` py-[36px] ${
            setting == "email" && " border-[#028BC1] border-b text-[#028BC1]"
          } cursor-pointer hover:text-[#028bC1]`}
        >
          Изменить почту
        </li>
        <li
          onClick={() => setSetting("password")}
          className={` py-[36px] ${
            setting == "password" && " border-[#028BC1] border-b text-[#028BC1]"
          } cursor-pointer hover:text-[#028bC1]`}
        >
          {" "}
          Изменить пароль
        </li>
      </ul>

      <div>
        <AnimatePresence>
          {setting == "info" && (
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="bg-white rounded-xl w-[496px] border border-[#D6EAFF] mx-auto mt-[30px]"
            >
              <p className=" text-center p-[30px] border-b border-[#D6EAFF] text-3xl font-bold">
                Изменить ФИО
              </p>
              <div className="p-[30px] ">
                <form
                  action=""
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-[30px]"
                >
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="border-[#D6EAFF] border rounded-xl p-[16px] placeholder:text-base placeholder:text-[#667582] w-full block outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="border-[#D6EAFF] border rounded-xl p-[16px] placeholder:text-base placeholder:text-[#667582] w-full block outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="border-[#D6EAFF] border rounded-xl p-[16px] placeholder:text-base placeholder:text-[#667582] w-full block outline-none"
                  />
                  <button
                    className="w-full rounded-xl py-[17px] bg-[#FFD200] text-lg font-bold"
                    type="submit"
                  >
                    Изменить
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {setting == "email" && (
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="bg-white rounded-xl w-[496px] border border-[#D6EAFF] mx-auto mt-[30px]"
            >
              <p className=" text-center p-[30px] border-b border-[#D6EAFF] text-3xl font-bold">
                Изменить почту
              </p>
              <div className="p-[30px] ">
                <form
                  action=""
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-[30px]"
                >
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="border-[#D6EAFF] border rounded-xl p-[16px] placeholder:text-base placeholder:text-[#667582] w-full block outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="border-[#D6EAFF] border rounded-xl p-[16px] placeholder:text-base placeholder:text-[#667582] w-full block outline-none"
                  />

                  <button
                    className="w-full rounded-xl py-[17px] bg-[#FFD200] text-lg font-bold"
                    type="submit"
                  >
                    Изменить
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {setting == "password" && (
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="bg-white rounded-xl w-[496px] border border-[#D6EAFF] mx-auto mt-[30px]"
            >
              <p className=" text-center p-[30px] border-b border-[#D6EAFF] text-3xl font-bold">
                Изменить пароль
              </p>
              <div className="p-[30px] ">
                <form
                  action=""
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-[30px]"
                >
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="border-[#D6EAFF] border rounded-xl p-[16px] placeholder:text-base placeholder:text-[#667582] w-full block outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="border-[#D6EAFF] border rounded-xl p-[16px] placeholder:text-base placeholder:text-[#667582] w-full block outline-none"
                  />

                  <button
                    className="w-full rounded-xl py-[17px] bg-[#FFD200] text-lg font-bold"
                    type="submit"
                  >
                    Изменить
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Setting;
