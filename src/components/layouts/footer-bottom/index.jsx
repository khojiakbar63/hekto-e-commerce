import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Facebook from "../../../assets/icons/facebook.svg";
import Insta from "../../../assets/icons/insta.svg";
import Twitter from "../../../assets/icons/twitter.svg";

const FooterBottom = () => {
  return (
    <Box className="bg-[#E7E4F8] py-[17px]">
      <Container maxW={"1177px"}>
        <Flex
          justifyContent={"space-between"}
          className="flex-col-reverse gap-4 sm:gap-0 sm:flex-row"
        >
          <Text>©Webecy - All Rights Reserved</Text>
          <Flex gap={"11px"}>
            <Flex className="h-[19.42px] w-[19.42px] rounded-full bg-[#151875] items-center justify-center hover:bg-[#3b3fa4] active:bg-[#151875] hover:cursor-pointer">
              <Link to={"#"}>
                <Image src={Facebook} />
              </Link>
            </Flex>
            <Flex className="h-[19.42px] w-[19.42px] rounded-full bg-[#151875] items-center justify-center hover:bg-[#3b3fa4] active:bg-[#151875] hover:cursor-pointer">
              <Link to={"#"}>
                <Image src={Insta} />
              </Link>
            </Flex>
            <Flex className="h-[19.42px] w-[19.42px] rounded-full bg-[#151875] items-center justify-center hover:bg-[#3b3fa4] active:bg-[#151875] hover:cursor-pointer">
              <Link to={"#"}>
                <Image src={Twitter} />
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default FooterBottom;
