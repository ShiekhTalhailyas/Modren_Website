import React from "react";
import styles from "../style";
import { footerLinks, socialMedia } from "../constants/index";
import { logo } from "../assets";
import { FooterEnd } from "./FooterEnd";

const Footer = () => {
  return (
    <section className={` my-5 flex-wrap `}>
      <div className={`flex items-start justify-between flex-row flex-1`}>
        <div className="flex items-start justify-center flex-1 flex-col md:mr-20 mr-10">
          <img src={logo} alt="logo" />
          <p
            className=" text-dimWhite font-base font-poppins 
          md:text-[16px] md:my-3 my-2 md:leading-[30px] text-[10px] leading-[14px]"
          >
            A new way to make the payments <br /> easy, reliable and secure.
          </p>
        </div>
        {footerLinks.map((footerLink, index) => (
          <div key={index} className="flex items-start justify-center flex-1 flex-col flex-wrap">
            <h1
              className="text-white md:text-[14px] text-[11px] font-normal font-poppins md:mb-2 mb-1 "
            >
              {footerLink.title}{" "}
            </h1>
            <div className="flex items-start justify-start flex-1 flex-col flex-wrap">
              {footerLink.links.map((link, index) => (
                <a
                  href={link.link}
                  key={index}
                  className="text-white md:text-[11px] text-[9px] font-base font-poppins md:m-1 m-0.5"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <FooterEnd />
    </section>
  );
};
export default Footer;
