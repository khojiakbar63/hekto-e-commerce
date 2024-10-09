import React from "react";
import {
  Box,
  Container,
  Flex,
  IconButton,
  Image,
  Link,
  List,
  ListItem,
  Select,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Envelope from "../../../assets/icons/h-top-envelope.svg";
import Phone from "../../../assets/icons/h-top-call.svg";
import User from "../../../assets/icons/user.svg";
import Heart from "../../../assets/icons/h-top-heart.svg";
import Cart from "../../../assets/icons/h-top-cart.svg";
import { NavLink } from "react-router-dom";
import "./_style.scss";

const index = () => {

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
     
      if (scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Box className={`${
      scrolled ? "hidden" : "block"
    } bg-[#7E33E0] py-[14px] text-white xl:block fixed top-0 left-0 right-0 z-50`} display={{base: 'none', lg: 'block'}}>

      <Container maxWidth={1177}>
        <Flex justifyContent={"space-between"}>
          <Flex className="gap-[48px]">
            <Flex gap={"10px"} fontWeight={"semi-bold"}>
              <Image w={"17px"} src={Envelope} alt={Envelope} />
              <Link fontSize={"16px"} href="mailto:mhhasanul@gmail.com">
                mhhasanul@gmail.com
              </Link>
            </Flex>
            <Flex gap={"10px"} fontWeight={"semi-bold"}>
              <Image w={"17px"} src={Phone} alt={Phone} />
              <Link className="block text-4" href="tel:+998885718777">
                +998(88) 571 87 77
              </Link>
            </Flex>
          </Flex>

          <Box>
            <List className="flex items-center">
              <ListItem className="group border-b-[1px] border-transparent hover:border-white">
                <Flex
                  gap={"3.67px"}
                  alignItems={"center"}
                  className="group-hover:cursor-pointer"
                >
                  <Select width={""} variant="unstyled">
                    <option value="option1">Arabic</option>
                    <option value="option2">Korean</option>
                    <option value="option3">English</option>
                  </Select>
                </Flex>
              </ListItem>
              <ListItem className="group border-b-[1px] border-transparent hover:border-white">
                <Flex
                  gap={"3.67px"}
                  alignItems={"center"}
                  className="group-hover:cursor-pointer"
                >
                  <Select variant="unstyled">
                    <option value="option1">Dinar</option>
                    <option value="option2">Won</option>
                    <option value="option3">USD</option>
                  </Select>
                </Flex>
              </ListItem>
              <ListItem className="group border-b-[1px] border-transparent hover:border-white">
                <NavLink to={"/auth-page"}>
                  <Flex
                    gap={"3.67px"}
                    alignItems={"center"}
                    className="group-hover:cursor-pointer"
                  >
                    <Text>Login</Text>
                    <Image src={User} alt={User} />
                  </Flex>
                </NavLink>
              </ListItem>
              <ListItem className="ml-[15px] group border-b-[1px] border-transparent hover:border-white">
                <Flex
                  gap={"3.67px"}
                  alignItems={"center"}
                  className="group-hover:cursor-pointer"
                >
                  <Text>Wishlist</Text>
                  <Image
                    className="group-hover:scale-105 duration-150 cursor-pointer"
                    src={Heart}
                    alt={Heart}
                  />
                </Flex>
              </ListItem>
              <ListItem
                className="hover:scale-105 duration-150 border-b-[1px] border-transparent hover:border-white"
                marginLeft={"28px"}
              >
                <NavLink to={"/shopping-cart"}>
                  <Image src={Cart} alt={Cart} />
                </NavLink>
              </ListItem>
            </List>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default index;
