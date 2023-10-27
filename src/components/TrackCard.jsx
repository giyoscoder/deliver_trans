import React from "react";

const TrackCard = ({ cartypeImg, cartypeText, calImg, book }) => {
  return (
    <div className="bg-white rounded-xl p-[10px] hover:scale-95 transition-all duration-300 cursor-pointer">
      <p className="text-3xl font-bold p-5">{cartypeText}</p>
      <img
        src={cartypeImg}
        alt="carImgType"
        className="mb-[65px] mt-[50px] mx-auto"
      />
      <div className="flex justify-between items-center gap-[10px] ">
        <button className="bg-[#FFD200] rounded-xl text-lg font-bold text-center px-[90px] py-[18px]">
          {book}
        </button>
        <div className="bg-[#FFD200] rounded-xl h-[60px] w-[60px] grid place-items-center">
          <img src={calImg} alt="calImages" />
        </div>
      </div>
    </div>
  );
};

export default TrackCard;
