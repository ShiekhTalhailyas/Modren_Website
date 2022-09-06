import React from "react";
import styles from "../style";
import { clients } from "../constants";

const CTA = () => {
  return (
    <section
      className={`flex  justify-center flex-1 items-center flex-wrap mb-10`}
    >
      <div className="flex justify-between items-center flex-row flex-wrap">
        {clients.map((client) => (
          <img
            key={client.id}
            src={client.logo}
            alt="logo"
            className="md:w-[190px] md:h-[40px] w-[90px] h-[25px] md:mx-10 md:my-0 my-2 mx-2"
          />
        ))}
      </div>
      <div className=" bg-gradient-to-br from-slate-700 rounded-[20px] to-gray-900 my-20">
        <div
          className={`${styles.flexCenter} flex-1 flex-col md:flex-row p-10`}
        >
          <div>
            <h1 className="text-white font-semibold font-poppins md:text-[48px] md:leading-[76.8px] text-[20px] leading-[30px]">
              Let’s try our service now!
            </h1>
            <p className="md:w-[600px] w-auto text-dimWhite font-base font-poppins md:text-[16px] md:my-3 md:leading-[30px] text-[12px] leading-[18px]">
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>
          <div className="ml-5">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[10px] md:p-4 p-2 my-3 md:my:0 md:text-[20px] text-[12px] text-white font-normal font-poppins ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CTA;
