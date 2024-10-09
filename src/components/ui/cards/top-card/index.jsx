import React from "react";
import { Box, Button, Card, Image, Text } from "@chakra-ui/react";
import Top1 from "../../../../assets/icons/top-1.svg";
import "./style.css";

const TopCard = ({ image }) => {
  return (
    <div className="flex flex-col items-center">
      <Card bgColor={"#F6F7FB"} className="circle-card !shadow-none group mb-[27px]">
        <Image
          className="group-hover:scale-95 duration-150"
          w={"178px"}
          src={image}
          alt="top-1"
        />
        <button className="bg-[#08D15F] opacity-0 group-hover:opacity-100 py-[4px] px-[18px] rounded-[2px] text-[#fff] hover:bg-[#0ABE5F] transition-all duration-300 ease-in-out active:bg-[#166d19]">
          View Shop
        </button>
      </Card>
      <Box>
        <Text className="text-[#151875] text-[20px]">Mini LCW Chair</Text>
        <Text className="text-[#151875] text-[16px] text-center">$56.00</Text>
      </Box>
    </div>
  );
};

export default TopCard;
