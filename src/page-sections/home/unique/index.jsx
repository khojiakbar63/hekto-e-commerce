import {
  Box,
  Container,
  Flex,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Sofa from "../../../assets/icons/h-unique-sofa.svg";
import Pink from "../../../assets/icons/h-unique-circle-pink.svg";
import Blue from "../../../assets/icons/h-unique-circle-blue.svg";
import Green from "../../../assets/icons/h-unique-circle-green.svg";
import { MyButton } from "../../../components/ui";
import { HomeTitle } from '../../../components/typography';
 
const Unique = () => {
  return (
    <Box bgColor={"#F1F0FF"} paddingY={"14px"}>
      <Container maxW={"1177px"}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Image src={Sofa} alt={"sofa"} />
          <Box>
            <HomeTitle
            >
              Unique Features Of leatest & Trending Poducts
            </HomeTitle>
            <List spacing={3} marginBottom={'30px'}>
              <ListItem className="flex gap-[17px]">
                <Image src={Pink} alt={"blue"} marginTop={'-3px'} />
                <p className="text-[#ACABC3]">
                  All frames constructed with hardwood solids and laminates
                </p>
              </ListItem>
              <ListItem className="flex items-start gap-[17px]">
                <Image src={Blue} alt={"blue"} marginTop={'5px'}/>
                <p className="text-[#ACABC3]">
                  Reinforced with double wood dowels, glue, screw - nails corner
                  blocks and machine nails
                </p>
              </ListItem>
              <ListItem className="flex gap-[17px]">
                <Image src={Green} alt={"blue"} marginTop={'-3px'} />
                <p className="text-[#ACABC3]">
                  Arms, backs and seats are structurally reinforced
                </p>
              </ListItem>
            </List>

            <Flex gap={'19px'}>
                <MyButton className='footer-button py-[12px]'>Add To Cart</MyButton>
                <Box className="group">
                    <Text className="duration-200 text-[#151875] text-[14px] font-semibold group-hover:text-[#9e42e4]">B&B Italian Sofa </Text>
                    <Text className="duration-200 text-[#151875] text-[14px] font-regular group-hover:text-[#9e42e4]">$32.00</Text>
                </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Unique;
