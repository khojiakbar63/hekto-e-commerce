import {
  Box,
  Container,
  Flex,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MyButton } from "../../ui";
import Search from "../../../assets/icons/search.svg";
import "./_style.scss";

const Footer = () => {
  return (
    <footer>
      <Container maxW={"1177px"}>
        <Flex className="flex-col justify-between gap-[40px] xl:flex-row xl:gap-0"
        >
          <Box className="flex flex-col">
            <Text fontSize={"38px"} fontWeight={"bold"}>
              Hekto
            </Text>
            <Flex className="!items-center">
              <label
                htmlFor="search"
                className="bg-[#fff] pr-[2px] rounded-[3px] max-w-[377px]"
              >
                <input
                  id="search"
                  type="text"
                  placeholder="Enter Email Address"
                  className="input border-[2px] border-r-0 border-[#fff] input-primary h-[44px] rounded-[3px] focus:outline-none focus:border-transparent "
                />

                <MyButton className={"footer-button h-[39px] ml-12 text-white"}>
                  Sign Up
                </MyButton>
              </label>
            </Flex>
            <Box className="mt-[25px]">
              <Text className="text-[#8A8FB9]">Contact Info</Text>
              <Text className="text-[#8A8FB9]">
                17 Princess Road, London, Greater London NW1 8JR, UK
              </Text>
            </Box>
          </Box>

          <Flex className="justify-between gap-[80px] flex-col sm:flex-row ">

            <Box>
              <Text className="list-title">Catagories</Text>
              <List className="list">
                <ListItem className="list-item">Laptops & Computers</ListItem>
                <ListItem className="list-item">Cameras & Photography</ListItem>
                <ListItem className="list-item">
                  Smart Phones & Tablets
                </ListItem>
                <ListItem className="list-item">
                  Video Games & Consoles
                </ListItem>
                <ListItem className="list-item">Waterproof Headphones</ListItem>
              </List>
            </Box>

            <Box>
              <Text className="list-title">Customer Care</Text>
              <List className="list">
                <ListItem className="list-item">My Account</ListItem>
                <ListItem className="list-item">Discount</ListItem>
                <ListItem className="list-item">Returns</ListItem>
                <ListItem className="list-item">Orders History</ListItem>
                <ListItem className="list-item">Order Tracking</ListItem>
              </List>
            </Box>

            <Box>
              <Text className="list-title">Pages</Text>
              <List className="list">
                <ListItem className="list-item">Blog</ListItem>
                <ListItem className="list-item">Browse the Shop</ListItem>
                <ListItem className="list-item">Category</ListItem>
                <ListItem className="list-item">Pre-Built Pages</ListItem>
                <ListItem className="list-item">
                  Visual Composer Elements
                </ListItem>
                <ListItem className="list-item">WooCommerce Pages</ListItem>
              </List>
            </Box>

          </Flex>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
