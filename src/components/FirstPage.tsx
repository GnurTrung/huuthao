"use client";
import React from "react";

const FirstPage = () => {
  return (
    <section
      id="home"
      className="sm:bg-page1 max-sm:bg-page1-mobile flex justify-center relative"
    >
      <div
        className="absolute h-full w-full flex justify-center items-center top-0 left-0 rounded-[8px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.6) 100%)",
        }}
      ></div>
      <div className="relative w-full">
        <div className="xl:mt-[22rem] lg:mt-[18rem] max-md:mt-[12rem] flex flex-col items-center max-sm:px-[1rem] text-base">
          <p className="text-[80px] font-[500] text-white max-w-[1000px] py-16 max-md:hidden">
            Hữu Thao & Thu Hằng
          </p>
          <div className="absolute bottom-40 m-auto">
            <div className="flex flex-col items-center">
              <p className="text-[100px] max-sm:text-[40px] font-[500] text-white max-w-[1000px] -rotate-12 py-4 md:hidden mr-32">
                Hữu Thao
              </p>
              <p className="text-[100px] max-sm:text-[40px] font-[500] text-white max-w-[1000px] -rotate-12 md:hidden">
                &
              </p>
              <p className="text-[100px] max-sm:text-[40px] font-[500] text-white max-w-[1000px] -rotate-12 py-4 md:hidden ml-32">
                Thu Hằng
              </p>
            </div>
          </div>
          <h2 className="text-[22px] text-font-base font-[600] text-white p-8 absolute m-auto bottom-14 uppercase max-sm:hidden">
            | We are getting married |
          </h2>
          <h2 className="text-[28px] text-white py-[24px] absolute m-auto bottom-4">
            Thứ Sáu, 20/12/2024
          </h2>
        </div>
      </div>
    </section>
  );
};

export default FirstPage;
