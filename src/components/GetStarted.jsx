import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

export const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} md:h-[124px] md:w-[124px] h-[80px] w-[80px] rounded-full cursor-pointer bg-gradient-to-r from-teal-400 to-blue-500 p-1`}
    >
      <div
        className={` ${styles.flexCenter} flex-col w-full h-full rounded-full bg-black`}
      >
        <div className={`${styles.flexCenter} flex-row`}>
          <p className="text-gradient font-poppins font-medium  text-[12px] md:text-[18px] leading-[23.4px]">
            <span>Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="md:w-[23px] md:h-[23px] w-[14px] h-[14px] object-contain"
          />
        </div>
        <p className="text-gradient font-poppins font-medium text-[12px] md:text-[18px] leading-[23.4px]">
          <span>Started</span>
        </p>
      </div>
    </div>
  );
};
