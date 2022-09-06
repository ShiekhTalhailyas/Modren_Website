import React from "react";
import styles from "../style";
import { apple, bill, google } from "../assets";

const Billing = () => {
  return (
    <section
      id="product"
      className={`${styles.flexCenter} flex-col md:flex-row flex-1 ${styles.marginY} `}
    >
      <div className={`${styles.flexStart} flex-1`}>
        <img
          src={bill}
          className="  md:h-[450px] md:w-[450px] w-[230px] h-[260px] "
        />
      </div>
      <div className={`${styles.flexStart} flex-col flex-1`}>
        <h1 className="text-white font-semibold font-poppins md:text-[48px] md:leading-[76.8px] text-[24px] leading-[37px]">
          Easily control your billing & invoicing.
        </h1>
        <p className="text-dimWhite font-base font-poppins md:text-[16px] md:my-6 md:leading-[30px] text-[12px] my-4 leading-[18px]">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex items-start justify-start flex-row flex-1">
          <img
            src={apple}
            className="md:h-[36px] md:w-[118px] w-[100px] h-[28px]"
          />
          <img
            src={google}
            className="md:h-[36px] md:w-[118px] w-[100px] h-[28px]"
          />
        </div>
      </div>
    </section>
  );
  
};

export default Billing;
