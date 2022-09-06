import React from 'react'
import styles from '../style';
import { socialMedia } from '../constants';

export const FooterEnd = () => {
  return (
    <section className="flex flex-wrap flex-1 my-10">
      <div className="flex flex-row flex-1 items-start justify-between pt-6 border-t-2">
        <div className="flex items-start justify-start flex-1 flex-row ">
          <p className="text-dimWhite font-base font-poppins md:text-[14px] text-[10px]">
            2021 HooBank. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-start justify-end flex-1 flex-row ">
          {socialMedia.map((sm) => (
            <a key={sm.id} href={sm.link} className="ml-4 md:ml-8" >
              <img src={sm.icon}  className="w-[16px] h-[16px]"/>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
