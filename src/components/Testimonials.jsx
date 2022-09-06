import React from "react";
import { feedback } from "../constants";
import styles from "../style.js";
import { quotes } from "../assets";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.flexCenter} flex-col flex-1 ${styles.marginY} `}
    >
      <div className={`${styles.flexStart} flex-1 flex-row ${styles.marginY}`}>
        <div>
          <h1 className="text-white font-semibold font-poppins md:text-[48px] md:leading-[76.8px] text-[20px] leading-[30px]">
            What people are saying about us
          </h1>
        </div>
        <div>
          <p className="text-dimWhite font-base font-poppins md:text-[16px] md:my-6 md:leading-[30px] text-[12px] my-4 leading-[18px]">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      <div className={`${styles.flexCenter} flex-1 flex-col md:flex-row`}>
        {feedback.map((feedback) => (
          <div
            key={feedback.id}
            className={` md:w-[370px] md:h-[395px] w-[250px] h-[220px] rounded-[20px] p-6 mx-4 bg-transparent hover:bg-gradient-to-br from-slate-700 to-gray-900 `}
          >
            <img
              src={quotes}
              alt="feedback"
              className=" md:h=[42px] md:w-[26px] h=[24px] w-[18px] md:my-6 my-1 "
            />
            <p className="text-white font-normal font-poppins md:text-[18px] text-[14px]">
              {feedback.content}
            </p>
            <div
              className={`flex  md:justify-start items-center justify-center flex-1 flex-row md:flex-row md:mt-20 mt-4`}
            >
              <img
                src={feedback.img}
                alt="img"
                className="md:w-[48px] md:h-[48px] w-[34px] h-[34px] mx-2"
              />
              <div>
                <h1 className="text-white font-normal font-poppins md:text-[20px] md:leading-[18px] leading-[8px] text-[14px] ">
                  {feedback.name}
                </h1>
                <span className="text-white font-normal font-poppins md:text-[16px] text-[10px]">
                  {feedback.title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Testimonials;
