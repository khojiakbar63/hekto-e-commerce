import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Pen from "../../../../assets/icons/pen.svg";
import Calendar from "../../../../assets/icons/calendar.svg";

const LatestBlogCard = ({ image, title, description }) => {
  return (
    <Box className="max-w-[370px] max-h-[493px] bg-white shadow rounded-[8px] group">
      <Box>
        <Image
          className="rounded-[8px] group-hover:scale-95 duration-200"
          src={image}
          alt="img"
        />
      </Box>
      <Box className="pt-[19px] pb-[34px] px-[14px]">
        <Flex gap={"29px"}>
          <Flex gap={"7.67px"}>
            <Image w={"11px"} src={Pen} alt="img" />
            <Text fontSize={"14px"} color={"#151875"}>
              SaberAli
            </Text>
          </Flex>
          <Flex gap={"7.67px"}>
            <Image w={"11px"} src={Calendar} alt="img" />
            <Text fontSize={"14px"} color={"#151875"}>
              21 August,2020
            </Text>
          </Flex>
        </Flex>

        <Text className="font-bold text-[18px] text-[#151875] group-hover:text-[#FA2E86] duration-200">
          {title}
        </Text>
        <Text className="font-regular text-[16px] text-[#72718F] mt-[17px] mb-[14px] w-[312px] duration-200">
          {description}
        </Text>

        <a
          className="text-[#151875] duration-200 font-semibold border-b-[1px] border-[#151875] group-hover:border-[#FA2E86] group-hover:text-[#FA2E86]"
          href="#"
        >
          Read More
        </a>
      </Box>
    </Box>
  );
};

export default LatestBlogCard;
