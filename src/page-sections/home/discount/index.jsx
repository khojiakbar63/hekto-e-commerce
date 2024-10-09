import React from "react";
import {
  Box,
  Container,
  Flex,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { HomeTitle } from "../../../components/typography";
import { MyButton } from "../../../components/ui";
import Chair from "../../../assets/icons/discount-chair.svg";
import Tick from "../../../assets/icons/tick.svg";

const Discount = () => {
  return (
    <Box>
      <Container maxW={"1177px"}>
        <Box className="flex flex-col items-center justify-center">
          <HomeTitle className={"!mb-[36px]"}>Discount Item</HomeTitle>
          <Flex className="gap-[29px]">
            <a
              className="text-[#151875] duration-200 font-semibold border-b-[1px] border-transparent hover:border-[#FA2E86] hover:text-[#FA2E86]"
              href="#"
            >
              Wood Chair
            </a>
            <a
              className="text-[#151875] duration-200 font-semibold border-b-[1px] border-transparent hover:border-[#FA2E86] hover:text-[#FA2E86]"
              href="#"
            >
              Plastic Chair
            </a>
            <a
              className="text-[#151875] duration-200 font-semibold border-b-[1px] border-transparent hover:border-[#FA2E86] hover:text-[#FA2E86]"
              href="#"
            >
              Sofa Colletion
            </a>
          </Flex>

          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Box>
              <HomeTitle className={"!text-[36px] w-[509px] !mb-[14px]"}>
                20% Discount Of All Products
              </HomeTitle>
              <Text className="text-[#FA2E86] text-[21px] mb-[24px] cursor-pointer duration-200 border-b-[1px] border-transparent w-fit hover:border-b-[#FA2E86]">
                Eams Sofa Compact
              </Text>
              <Text className="text-[#B7BACB] text-[17px] mb-[21px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
                feugiat habitasse nec, bibendum condimentum.
              </Text>
              <Flex justifyContent={"space-between"} mb={"35px"}>
                <List className="">
                  <ListItem className="flex gap-[6px] mb-[10px] group">
                    <Image src={Tick} alt="tick" />
                    <Text className="text-[#B8B8DC] cursor-pointer duration-200 border-b-[1px] border-transparent group-hover:border-b-[#B8B8DC]">
                      Material expose like metals
                    </Text>
                  </ListItem>

                  <ListItem className="flex gap-[6px] group">
                    <Image src={Tick} alt="tick" />
                    <Text className="text-[#B8B8DC] cursor-pointer duration-200 border-b-[1px] border-transparent group-hover:border-b-[#B8B8DC]">
                      Simple neutral colours.
                    </Text>
                  </ListItem>
                </List>

                <List className="">
                  <ListItem className="flex gap-[6px] mb-[10px] group">
                    <Image src={Tick} alt="tick" />
                    <Text className="text-[#B8B8DC] cursor-pointer duration-200 border-b-[1px] border-transparent group-hover:border-b-[#B8B8DC]">
                      Clear lines and geomatric figures
                    </Text>
                  </ListItem>
                  <ListItem className="flex gap-[6px] group">
                    <Image src={Tick} alt="tick" />
                    <Text className="text-[#B8B8DC] cursor-pointer duration-200 border-b-[1px] border-transparent group-hover:border-b-[#B8B8DC]">
                      Material expose like metals
                    </Text>
                  </ListItem>
                </List>
              </Flex>

              <MyButton className="footer-button py-[12px]">
                Add To Cart
              </MyButton>
            </Box>

            <Image src={Chair} alt="chair" />
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Discount;
