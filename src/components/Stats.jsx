import React from "react";
import { stats } from "../constants/index";
import styles from "../style";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-col md:flex-row flex-wrap mb-10 md:my-20`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`${styles.flexCenter} flex-col md:flex-row flex-1 my-3`}
        >
          <h1
            className={`${styles.flexCenter} font-poppins font-semibold
           md:text-[30px] text-[20px] md:leading-[43.16px] leading-[26.58px] uppercase text-gradient`}
          >
            {stat.value}
          </h1>
          <p
            className={`${styles.flexCenter} font-poppins font-simple xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-white uppercase ml-3`}
          >
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};
export default Stats;
