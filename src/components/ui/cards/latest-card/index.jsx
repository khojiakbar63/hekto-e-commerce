import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import { GiShoppingCart } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";
import Sale from "../../../../assets/icons/sale.svg";

const index = ({ image, title, price, sale }) => {
  return (
    <div className="card bg-base-100 min-w-[360px] min-h-[270px] rounded-none group mb-[120px]">
      <figure className="bg-[#F7F7F7] group-hover:bg-white h-[270px]">
        <Image
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-[24px] left-[16px] "
          src={Sale}
          alt="sale"
        />
        <div className="flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-[64px] left-[16px] ">
          <div className="p-[8px] rounded-full hover:!bg-[#5343cf12] active:!shadow-none hover:shadow-lg hover:text-[#5343cf]">
            <GiShoppingCart className="text-[#2F1AC3] " />
          </div>
          <div className="p-[8px] rounded-full hover:bg-[#5343cf12] active:!shadow-none hover:shadow-lg hover:text-[#5343cf]">
            <CiHeart className="text-[#2F1AC3]" />
          </div>
          <div className="p-[8px] rounded-full hover:bg-[#5343cf12] active:!shadow-none hover:shadow-lg hover:text-[#5343cf]">
            <HiOutlineMagnifyingGlassPlus className="text-[#2F1AC3]" />
          </div>
        </div>
        <Image src={image} alt={title} />
      </figure>
      <div className=" max-h-[36px] pt-[15px] pb-[5px]">
        <Flex justifyContent={"space-between"}>
          <Text
            fontSize={"16px"}
            className="text-[#151875] border-b-2 border-[#EEEFFB] duration-300"
          >
            {title}
          </Text>
          <Flex className="pr-[15px]" gap={"9px"}>
            <Text fontSize={"14px"} className="text-[#151875]">
              ${price}
            </Text>
            <Text fontSize={"12px"} className="text-[#FB2448] line-through">
              ${sale}
            </Text>
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default index;
