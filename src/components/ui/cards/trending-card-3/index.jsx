import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const TrendingCardThree = ({ image, className }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`${
          className ? className : ""
        } w-[267px] h-[74px] bg-white flex group cursor-pointer`}
      >
        <div className="w-[107px] bg-[#F5F6F8] grid place-content-center">
          <Image
            src={image}
            alt="trending"
            className=" group-hover:scale-110 duration-200"
          />
        </div>
        <Box className="flex flex-col justify-center gap-[5px]">
          <Text className=" text-[15px] font-[400] leading-[16px] ml-[9px] text-[#151875]">
            Executive Seat chair
          </Text>
          <Text className=" text-[11px] font-[400] leading-[16px] ml-[9px] text-[#151875] line-through">
            $32.00
          </Text>
        </Box>
      </div>
    </div>
  );
};

export default TrendingCardThree;
