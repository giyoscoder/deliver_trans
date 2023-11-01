import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { About } from "../components";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  clientOne,
  clientTwo,
  clientThree,
  clientFour,
  clientFive,
  clientSix,
  clientSeven,
  clientEight,
  clientTree,
  sertificiate,
} from "../Assets/images";
import "swiper/css";
import {
  MdOutlineKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";

const LoadingProductsThree = () => {
  const swiperRef = useRef();
  return (
    <div>
      <div className="bg-darkMain bg-loadingProducts h-full bg-no-repeat bg-right">
        <div className="bg-loadingPageLinear h-full">
          <div className="container  pt-[60px] pb-[140px]">
            <div className="flex item-center text-white text-lg font-semibold">
              <Link to="/">Главная</Link>&nbsp;
              <Link>&#8725; Услуги</Link>
            </div>
            <h1 className="text-white text-[80px] font-semibold ">
              Разгрузка и погрузка
            </h1>
            <p className="text-xl font-semibold max-w-[800px] text-white mt-[50px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo
            </p>

            <div className="mt-[50px] flex items-center gap-[30px]">
              <input
                type="text"
                className="w-[480px] py-[16px] px-[21px] rounded-xl outline-none border-none"
                placeholder="Телефон +7 ___ ___ __ __"
              />
              <button className="text-lg font-bold  py-[16px] px-[22px] rounded-xl bg-[#FFD200]">
                Заказать звонок
              </button>
            </div>
            <p className="text-white text-base mt-[21px] font-semibold ">
              Отправляя нам свои данные, вы подтверждаете согласие с нашей
              Политикой конфиденциальности
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white pt-[60px] pb-[100px]">
        <div className="container">
          <div className="bg-[#F3F9FF] p-[30px] rounded-xl mb-[70px]">
            <p className="text-center text-[32px] font-semibold">
              Контролируем выполнение погрузки и разгрузки. Следим за правильным
              размещением груза в кузове, при необходимости крепим его стяжными
              ремнями. На машинах с рефрижератором установлены
              терморегистраторы. На маршруты ставим только технически исправные
              авто, которыми управляют водители-экспедиторы с опытом работы
              более 5 лет
            </p>
          </div>
        </div>
      </div>

      <div>
        <About />
      </div>

      <div className="pt-[60px] pb-[100px] bg-white">
        <div className="container">
          <h1 className="text-[80px] font-bold">
            Комплексные решения для корпоративных клиентов
          </h1>
          <div className="grid grid-cols-5 gap-[30px] mt-[60px]">
            <div className="bg-[#F3F9FF] rounded-xl flex flex-col">
              <div>
                <img src={clientOne} alt="" className="rounded-t-xl w-full" />
              </div>
              <p className="text-[22px] font-semibold p-[30px]">
                Договор дороже денег
              </p>
            </div>
            <div className="bg-[#F3F9FF] rounded-xl flex flex-col-reverse">
              <div>
                <img src={clientTwo} alt="" className="rounded-b-xl w-full" />
              </div>
              <p className="text-[22px] font-semibold p-[30px]">
                Доставляем бережно и аккуратно
              </p>
            </div>
            <div className="bg-[#F3F9FF] rounded-xl flex flex-col">
              <div>
                <img src={clientFour} alt="" className="rounded-t-xl w-full" />
              </div>
              <p className="text-[22px] font-semibold p-[30px]">
                Бережем репутацию заказчика
              </p>
            </div>
            <div className="bg-[#F3F9FF] rounded-xl flex flex-col-reverse">
              <div>
                <img src={clientThree} alt="" className="rounded-b-xl w-full" />
              </div>
              <p className="text-[22px] font-semibold p-[30px]">
                Контроль документации
              </p>
            </div>
            <div className="bg-[#F3F9FF] rounded-xl flex flex-col">
              <div>
                <img src={clientFive} alt="" className="rounded-t-xl w-full" />
              </div>
              <p className="text-[22px] font-semibold p-[30px]">
                Долгосрочные отношения дороже сиюминутной выгоды
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F3F9FF] pt-[60px] pb-[100px]">
        <div className="container">
          <h1 className="font-bold text-[80px]">Рекомендации наших клиентов</h1>
          <div>
            <Swiper
              spaceBetween={50}
              slidesPerView={4}
              onSlideChange={() => console.log("slide change")}
              loop={true}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              <SwiperSlide>
                {" "}
                <img src={sertificiate} alt="" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={sertificiate} alt="" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={sertificiate} alt="" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={sertificiate} alt="" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={sertificiate} alt="" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={sertificiate} alt="" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={sertificiate} alt="" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={sertificiate} alt="" />{" "}
              </SwiperSlide>
            </Swiper>

            <div className=" mt-[30px] flex items-center justify-between">
              <div className="flex items-center gap-[30px]">
                <div
                  className="rounded-xl bg-[#FFD200] p-[17px] cursor-pointer"
                  onClick={() => swiperRef.current.slidePrev()}
                >
                  <MdKeyboardArrowLeft />
                </div>
                <div
                  className="rounded-xl bg-[#FFD200] p-[17px] cursor-pointer"
                  onClick={() => swiperRef.current.slideNext()}
                >
                  <MdOutlineKeyboardArrowRight />
                </div>
              </div>
              <div>
                <button className="rounded-xl p-[17px] bg-[#FFD200] text-lg font-bold">
                  Читать все отзывы
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container">
          <h1 className="text-[80px] font-bold">Рекомендации наших клиентов</h1>
          <div className="mt-[60px]">
            <div className="space-y-[30px]">
              <div className="flex items-start bg-[#F3F9FF] rounded-xl ">
                <div className="w-full h-full">
                  <img
                    src={clientThree}
                    alt=""
                    className="bg-center bg-cover h-full w-full"
                  />
                </div>
                <div className=" p-[30px]">
                  <p className="text-3xl font-bold">Качество перевозок</p>
                  <p className="text-lg font-semibold mt-[30px]">
                    Контролируем выполнение погрузки и разгрузки. Следим за
                    правильным размещением груза в кузове, при необходимости
                    крепим его стяжными ремнями. На машинах с рефрижератором
                    установлены терморегистраторы. На маршруты ставим только
                    технически исправные авто, которыми управляют
                    водители-экспедиторы с опытом работы более 5 лет. Используем
                    систему мониторинга усталости водителей. Несем
                    ответственность за сохранность груза, поэтому для нас важно
                    не только вовремя доставить груз, но и сохранить его в
                    исходном виде
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-[#F3F9FF] rounded-xl ">
                <div className="w-full h-full">
                  <img
                    src={clientTree}
                    alt=""
                    className="bg-center bg-cover h-full w-full"
                  />
                </div>
                <div className=" p-[30px]">
                  <p className="text-3xl font-bold">Экологичность</p>
                  <p className="text-lg font-semibold mt-[30px]">
                    Понимаем, что репутация заказчика влияет на успех его
                    проекта. А финансовые показатели заказчиков напрямую влияют
                    на наши показатели. Не боимся браться за выполнение
                    нестандартных заказов. Страхуем груз на случай форс-мажора.
                    Несем полную материальную ответственность за груз во время
                    транспортировки.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default LoadingProductsThree;
