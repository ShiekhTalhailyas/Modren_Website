import React from "react";
import styles from "../style";
import { card } from "../assets";

const CardDeal = () => {
  return (
    <section
      className={`${styles.flexStart} flex-col md:flex-row flex-1 ${styles.marginY}`}
    >
      <div className="flex justify-start items-start flex-col flex-1">
        <div>
          <h1 className="text-white font-semibold font-poppins text-[24px] md:text-[48px] leading-[36px] md:leading-[76.8px]">
            Find a better card deal <br /> in few easy steps.
          </h1>
        </div>
        <div>
          <p className="text-dimWhite font-base font-poppins md:text-[16px] md:my-6 md:leading-[30px] text-[12px] my-4 leading-[18px]">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
        </div>
        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[10px] md:p-4 p-2 my-2  text-white font-normal font-poppins ">
          Get Started
        </button>
      </div>
      <div className="flex justify-center items-center flex-col flex-1">
        <img
          src={card}
          alt="card"
          className="md:h-[400px] md:w-[440px] h-[240px] w-[270px]"
        />
      </div>
    </section>
  );
};
export default CardDeal;
