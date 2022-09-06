import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import { GetStarted } from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`${styles.flexCenter} flex-1 flex-col top-20`}
    >
      <div
        className={`${styles.flexStart} md:flex-row flex-col flex-1 w-full mt-10 xl:px-0  `}
      >
        <div className={`flex items-start justify-center  flex-1 flex-col`}>
          <div
            className={`flex items-center justify-center flex-row rounded-lg p-0 md:p-1 my-2 bg-gradient-to-r from-black to-gray-900 `}
          >
            <img src={discount} className="w-[25px] h-[25px]" />
            <p className="text-white text-center md:text-base text-[10px] p-2 ">
              <span className="font-bold">20%</span> Discount For{" "}
              <span className="font-bold">1 Month</span> Account
            </p>
          </div>
          <div className=" flex items-start justify-start flex-col flex-1 ">
            <div className="flex flex-1 flex-row items-center justify-between">
              <div>
                <h1 className="font-poppins font-semibold text-white text-3xl md:text-6xl mt-2 ">
                  The Next <br />{" "}
                  <span className="text-gradient sm:leading-[55px] md:leading-[75px]">
                    {" "}
                    Generation
                  </span>{" "}
                  <br />{" "}
                  <span className="sm:leading-[55px] md:leading-[75px]">
                    {" "}
                    Payment Method.
                  </span>
                </h1>
              </div>
              <div className={`ss:flex  md:mr-4 mr-0`}>
                <GetStarted />
              </div>
            </div>
            <p
              className={`font-normal text-dimWhite md:w-[483px] md:h-[93px] font-base text-[14px] 
              leading-[20px] md:text-[18px] md:leading-[30px] my-4`}
            >
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </div>
        </div>

        <div className={`${styles.flexCenter}`}>
          <img
            src={robot}
            alt="robot"
            className={` sm:w-[200px] sm:h={250px} md:w-[300px] md:w-[350px]  lg:w-[450px] md:h={500px} `}
          />
          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>
      </div>
    </section>
  );
};
export default Hero;
