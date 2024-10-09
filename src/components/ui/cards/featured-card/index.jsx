import React, { useState } from "react";
import Colors from "../../../../assets/icons/color.svg";
import { Image } from "@chakra-ui/react";
import { GiShoppingCart } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";
import Green from "../../../../assets/icons/green-slider-1.svg";
import Red from "../../../../assets/icons/red-slider-2.svg";
import Yellow from "../../../../assets/icons/yellow-slider-3.svg";

const FeaturedCard = ({ image, title, code, price }) => {
  const [activeSlide, setActiveSlide] = useState(1);

  const handleSlideChange = (slideNumber) => {
    setActiveSlide(slideNumber);
  };

  return (
    <div className="card bg-base-100 w-[270px] max-h-[361px] shadow-xl rounded-none group">
      <div className="carousel !w-[270px]">
        {activeSlide === 1 && (
          <div id="slide1" className="carousel-item w-full">
            <figure className="bg-[#6ee393d3] pt-[158px] flex flex-col w-full">
              <div className="flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-[8px] left-[16px] ">
                <div className="p-[8px] rounded-full hover:!bg-[#5343cf12] active:!shadow-none hover:shadow-lg hover:text-[#5343cf]">
                  <GiShoppingCart className="text-[#199DF5] " />
                </div>
                <div className="p-[8px] rounded-full hover:bg-[#5343cf12] active:!shadow-none hover:shadow-lg hover:text-[#5343cf]">
                  <CiHeart className="text-[#199DF5]" />
                </div>
                <div className="p-[8px] rounded-full hover:bg-[#5343cf12] active:!shadow-none hover:shadow-lg hover:text-[#5343cf]">
                  <HiOutlineMagnifyingGlassPlus className="text-[#199DF5]" />
                </div>
              </div>
              <img
                className="group-hover:scale-75 !mb-[120px] group-hover:!mb-[140px] !duration-300"
                src={image}
                alt={title}
              />
            </figure>
          </div>
        )}
        {activeSlide === 2 && (
          <div id="slide2" className="carousel-item w-full">
            <figure className="bg-[#c6928c] pt-[158px] flex flex-col w-full">
              <div className="flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-[8px] left-[16px] ">
                <div className="p-[8px] rounded-full hover:!bg-[#5343cf12] active:!shadow-none hover:shadow-lg hover:text-[#5343cf]">
                  <GiShoppingCart className="text-[#199DF5] " />
                </div>
                <div className="p-[8px] rounded-full hover:bg-[#5343cf12] active:!shadow-none hover:shadow-lg hover:text-[#5343cf]">
                  <CiHeart className="text-[#199DF5]" />
                </div>
                <div className="p-[8px] rounded-full hover:bg-[#5343cf12] active:!shadow-none hover:shadow-lg hover:text-[#5343cf]">
                  <HiOutlineMagnifyingGlassPlus className="text-[#199DF5]" />
                </div>
              </div>
              <img
                className="group-hover:scale-75 !mb-[120px] group-hover:!mb-[140px] !duration-300"
                src={image}
                alt={title}
              />
            </figure>
          </div>
        )}

        {activeSlide === 3 && (
          <div id="slide3" className="carousel-item w-full">
            <figure className="bg-[#e2de81] pt-[158px] flex flex-col w-full">
              <div className="flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-[8px] left-[16px] ">
                <div className="p-[8px] rounded-full hover:!bg-[#5343cf12] active:!shadow-none hover:shadow-lg hover:text-[#5343cf]">
                  <GiShoppingCart className="text-[#199DF5] " />
                </div>
                <div className="p-[8px] rounded-full hover:bg-[#5343cf12] active:!shadow-none hover:shadow-lg hover:text-[#5343cf]">
                  <CiHeart className="text-[#199DF5]" />
                </div>
                <div className="p-[8px] rounded-full hover:bg-[#5343cf12] active:!shadow-none hover:shadow-lg hover:text-[#5343cf]">
                  <HiOutlineMagnifyingGlassPlus className="text-[#199DF5]" />
                </div>
              </div>
              <img
                className="group-hover:scale-75 !mb-[120px] group-hover:!mb-[140px] !duration-300"
                src={image}
                alt={title}
              />
            </figure>
          </div>
        )}
      </div>

      <div className="card-body flex flex-col items-center justify-center pb-[17px] pt-[15px] duration-300 group-hover:bg-[#2F1AC4] group-hover:text-white">
        <h2 className="card-title text-[#FA2E86] text-[18px] font-bold  group-hover:text-white">
          {title}
        </h2>
        <div className="flex w-full justify-center gap-2">
          <a
            onClick={() => handleSlideChange(1)}
            href="#slide1"
            className="btn btn-xs bg-transparent hover:bg-transparent border-none m-0 p-0"
          >
            <Image src={Green} alt="green" />
          </a>
          <a
            onClick={() => handleSlideChange(2)}
            href="#slide2"
            className="btn btn-xs bg-transparent hover:bg-transparent border-none m-0 p-0"
          >
            <Image src={Red} alt="red" />
          </a>
          <a
            onClick={() => handleSlideChange(3)}
            href="#slide3"
            className="btn btn-xs bg-transparent hover:bg-transparent border-none m-0 p-0"
          >
            <Image src={Yellow} alt="yellow" />
          </a>
        </div>
        <p className="#151875">Code - {code}</p>
        <p className="#151875">${price}</p>
      </div>
    </div>
  );
};

export default FeaturedCard;
