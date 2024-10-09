import { Image } from "@chakra-ui/react";
import React from "react";


const TrendingCardTwo = ({ link, image, className }) => {
  return (
    <div className={`${className ? className : ''} w-[413px] h-[270px] pt-[34px] px-[25px] relative`}>
      <h2 className="text-[#151875] text-[26px] font-semibold">23% off in all products</h2>
      <a className="text-[#FA2E86] duration-200 font-semibold border-b-[1px] border-transparent hover:border-[#FA2E86]" href="#">{link}</a>
      <Image className="absolute bottom-0 right-0" src={image} alt="Shoes" />
    </div>
  );
};

export default TrendingCardTwo;
