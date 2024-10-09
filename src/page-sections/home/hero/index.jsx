import React from "react";
import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import { MyButton } from "../../../components/ui";
import Sofa from "../../../assets/images/sofa.png";
import Lamp from "../../../assets/icons/lamp.svg";
import Cube from '../../../assets/icons/cube.svg'
import UnfilledCube from '../../../assets/icons/cube-unfilled.svg'

const Hero = () => {
  return (
    <Box className="bg-[#F2F0FF] ">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full mr-20">
          <Box
            backgroundColor={"#F2F0FF"}
            className="pt-[58px] pb-[0px] w-full max-h-[700px]"
          >
            <Container maxW={"1177px"}>
              <Flex
                justify={"space-between"}
                alignItems={"center"}
                minH={"706px"}
                position={"relative"}
                className="xl:flex-row flex-col"
              >
                <Image
                  className="absolute -top-[40px] left-[-300px] w-[387px] h-[387px]"
                  src={Lamp}
                  alt="lamp"
                />
                <Box>
                  <Flex
                    className="flex-col"
                    marginBottom={"27px"}
                    maxW={"644px"}
                  >
                    <Text fontWeight={"bold"} color={"#FB2E86"}>
                      Best Furniture For Your Castle....
                    </Text>
                    <Text fontWeight={"bold"} fontSize={"53px"} color={"#000"}>
                      New Furniture Collection Trends in 2024
                    </Text>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Magna in est adipiscing in phasellus non in justo.
                    </Text>
                  </Flex>
                  <MyButton className="footer-button py-[8px]">
                    Shop Now
                  </MyButton>
                </Box>

                <Image
                  className="xl:absolute top-[10px] 2xl:right-[-200px] xl:right-[-100px] min-w-[200px] xl:max-w-[606px] hidden lg:block"
                  src={Sofa}
                  alt="sofa"
                />
                <Image
                  className="xl:absolute top-[10px] 2xl:right-[-200px] xl:right-[-100px] min-w-[200px] xl:max-w-[606px] lg:hidden"
                  src={Lamp}
                  alt="sofa"
                />
              </Flex>
            </Container>
          </Box>
        </div>
        <div id="item2" className="carousel-item w-full mr-20">
        <Box
            backgroundColor={"#F2F0FF"}
            className="pt-[58px] pb-[0px] w-full"
          >
            <Container maxW={"1177px"}>
              <Flex
                justify={"space-between"}
                alignItems={"center"}
                minH={"706px"}
                position={"relative"}
                className="xl:flex-row flex-col"
              >
                <Box>
                  <Flex
                    className="flex-col"
                    marginBottom={"27px"}
                    maxW={"644px"}
                  >
                    <Text fontWeight={"bold"} fontSize={"53px"} color={"#000"}>
                      New Furniture Collection Trends in 2024
                    </Text>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Magna in est adipiscing in phasellus non in justo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, aliquid.
                    </Text>
                  </Flex>
                  <MyButton className="footer-button py-[8px]">
                    Shop Now
                  </MyButton>
                </Box>

                <Image
                  className="xl:absolute -top-[40px] 2xl:right-[-200px] xl:right-[-100px] min-w-[200px] xl:max-w-[606px]"
                  src={Lamp}
                  alt="sofa"
                />

              </Flex>
            </Container>
          </Box>
        </div>
        <div id="item3" className="carousel-item w-full">
        <Box
            backgroundColor={"#F2F0FF"}
            className="pt-[58px] pb-[0px] w-full"
          >
            <Container maxW={"1177px"}>
              <Flex
                justify={"space-between"}
                alignItems={"center"}
                minH={"706px"}
                position={"relative"}
                className="xl:flex-row flex-col"
              >
                <Box>
                  <Flex
                    className="flex-col"
                    marginBottom={"27px"}
                    maxW={"644px"}
                  >
                    <Text fontWeight={"bold"} color={"#FB2E86"}>
                      Best Furniture For Your Castle....
                    </Text>
                    <Text fontWeight={"bold"} fontSize={"53px"} color={"#000"}>
                      New Furniture Collection Trends in 2024
                    </Text>

                  </Flex>
                  <MyButton className="footer-button py-[8px]">
                    Shop Now
                  </MyButton>
                </Box>

                <Image
                  className="xl:absolute top-[-40px] 2xl:right-[-200px] xl:right-[-100px] min-w-[200px] xl:max-w-[606px]"
                  src={Lamp}
                  alt="lamp"
                />
              </Flex>
            </Container>
          </Box>
        </div>
        
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1"  className="btn btn-xs bg-[#F2F0FF]">
          <Image src={Cube} alt="cube" />
        </a>
        <a href="#item2" className="btn btn-xs bg-[#F2F0FF]">
        <Image src={UnfilledCube} alt="cube" />
        </a>
        <a href="#item3" className="btn btn-xs bg-[#F2F0FF]">
        <Image src={UnfilledCube} alt="cube" />
        </a>
      </div>
    </Box>
  );
};

export default Hero;
