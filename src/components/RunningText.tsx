import Image from "next/image";
import React, { lazy } from "react";
/* const Marquee = lazy(() => import("react-fast-marquee")); */

const RunningText = () => {
  return (
    <section
      id="daure"
      className="px-5 sm:px-20 py-10 pt-20 max-sm:flex-col relative"
    >
      <img
        className="absolute inset-0 mx-auto top-5"
        src="/assets/images/chew/divide.png"
        alt="err"
      />
      <div className="flex justify-center">
        <p className="text-[50px] text-black max-w-[1000px] py-5">
          Chú rể & Cô dâu
        </p>
      </div>
      <div className="flex sm:justify-evenly max-sm:flex-col gap-2">
        <div className="flex flex-col gap-3">
          <img
            className="max-lg:max-w-full max-w-[500px] max-h-[700px]"
            src="/assets/images/chew/re.jpg"
            alt="err"
          />
          <div className="flex flex-col justify-center items-center text-[20px]">
            <div className="text-[40px]">Hữu Thao</div>
          </div>
        </div>
        <div className="flex flex-col gap-3 max-sm:mt-10">
          <img
            className="max-lg:max-w-full max-w-[500px] max-h-[700px]"
            src="/assets/images/chew/dau.jpg"
            alt="err"
          />
          <div className="flex flex-col justify-center items-center text-[20px]">
            <div className="text-[40px]">Thu Hằng</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RunningText;
