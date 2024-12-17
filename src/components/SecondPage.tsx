/* eslint-disable @next/next/no-img-element */
import React from "react";

const SecondPage = () => {
  return (
    <section id="diadiem" className="relative">
      <img
        className="absolute inset-0 mx-auto top-5"
        src="/assets/images/chew/divide.png"
        alt="err"
      />
      <div className="flex justify-center text-[64px] pt-20">Tiệc cưới</div>
      <div className="flex justify-center text-[28px] pt-5">
        Trân trọng kính mời bạn
      </div>
      <div className="flex justify-center text-[28px]">
        đến tham gia bữa tiệc
      </div>
      <div className="flex justify-center text-[28px]">
        chung vui cùng gia đình chúng tôi
      </div>
      <div className="flex justify-center items-center mt-2">
        <div
          className="relative rounded-lg max-sm:px-[1rem] p-2 w-full flex flex-col sm:items-center sm:flex-row gap-4 sm:max-w-[1100px] sm:justify-center shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
          id="meme"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="500"
        >
          <div>
            <div className="flex justify-center font-bold text-[40px] max-sm:mt-4">
              Nhà trai
            </div>
            <div className="flex justify-center text-[26px] mt-3 text-font-base">
              17h thứ Sáu - 20/12/2024
            </div>
            <div className="flex justify-center text-[28px] mt-2 font-medium text-font-base">
              Khu đô thị Bãi Dé
            </div>
            <div className="flex justify-center text-[20px] text-font-base font-light mt-2">
              Thôn Đình Cả - Xã Nội Duệ
            </div>
            <div className="flex justify-center text-[20px] mb-5 text-font-base font-light">
              H. Tiên Du - Bắc Ninh
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d232.59096393401435!2d105.99963819001948!3d21.1342667137743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1734405809264!5m2!1sen!2s"
                width="550"
                height="250"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="mb-4 rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-[28px] mt-5">
        Sự hiện diện của bạn
      </div>
      <div className="flex justify-center text-[28px] mb-8">
        là niềm vinh hạnh cho gia đình chúng tôi
      </div>
    </section>
  );
};

export default SecondPage;
