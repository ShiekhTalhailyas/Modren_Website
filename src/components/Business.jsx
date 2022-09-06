import React from "react";
import styles from "../style";
import { features } from "../constants";

const Business = () => {
  return (
    <section
      id="features"
      className={`${styles.flexStart} flex-col md:flex-row flex-1 my-14`}
    >
      <div className="flex justify-start items-start flex-col flex-1 mr-8">
        <div>
          <h1 className="text-white font-semibold font-poppins text-[20px] md:text-[48px] leading-[26px] md:leading-[76.8px]">
            You do the business,
            <br /> we’ll handle the money.
          </h1>
        </div>
        <div>
          <p className="text-dimWhite font-base font-poppins text-[12px] md:text-[18px] leading-[22px] md:leading-[36.6px] my-2">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
        </div>
        <div>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[10px] md:p-4 p-2 mt-2 md:text-[20px] text-[12px] text-white font-normal font-poppins ">
            Get Started
          </button>
        </div>
      </div>
      <div className={`${styles.flexStart} flex-col flex-1 ml-5`}>
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`flex items-center justify-start flex-row flex-1 mt-4 md:mt-4`}
          >
            <img
              src={feature.icon}
              className="md:w-[54px] md:h-[54px] w-[32px] h-[32px] md:my-4 my-2"
            />
            <div
              className={`flex justify-start items-start flex-col flex-1 md:my-4 m-2`}
            >
              <h1 className="text-white font-semibold font-poppins md:text-[18px] md:leading-[23.4px] text-[12px] leading-[23.4px] ">
                {feature.title}
              </h1>
              <p className="text-white font-normal font-poppins md:text-[16px] md:leading-[24px] text-[10px] leading-[16px]">
                {feature.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Business;
