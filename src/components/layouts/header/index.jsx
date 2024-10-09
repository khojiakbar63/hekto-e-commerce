import {
  Box,
  Container,
  Flex,
  Image,
  List,
  ListItem,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import Search from "../../../assets/icons/search.svg";
import { MyButton, MobileMenu } from "../../ui";
import { useState, useEffect } from "react";
import "./_style.scss";
 
const index = () => {

  const [scrolled, setScrolled] = useState(false);
  const topValue = useBreakpointValue({ base: "0", lg: "52px" });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100 ) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header  style={{
      top: scrolled ? "0" : topValue,
      transition: "top 0.2s ease-in-out",
    }}
    className={`bg-[#fff] py-[19px] border fixed left-0 right-0 z-[999] `}  >
      <Container maxWidth={"1177px"}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Flex alignItems={"center"} gap={"88px"}>
            <Box>
              <Text
                fontWeight={"bold"}
                fontSize={"34px"}
                className="!text-[#0D0E43]"
              >
                Hekto
              </Text>
            </Box>

            <Box className="!hidden lg:!block">
              <List>
                <Flex alignItems={"center"} gap={"35px"}>
                  <ListItem>
                    <NavLink className="link-class text-[#0D0E43]" to={"/"}>
                      Home
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink
                      className="link-class text-[#0D0E43]"
                      to={"/about-us"}
                    >
                      Pages
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink
                      className="link-class text-[#0D0E43]"
                      to={"/product-details"}
                    >
                      Products
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink
                      className="link-class text-[#0D0E43]"
                      to={"/blog-page"}
                    >
                      Blog
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink
                      className="link-class text-[#0D0E43]"
                      to={"/shopping-list"}
                    >
                      Shop
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink
                      className="link-class text-[#0D0E43]"
                      to={"/hekto-demo"}
                    >
                      Contact
                    </NavLink>
                  </ListItem>
                </Flex>
              </List>
            </Box>
          </Flex>

          <Flex className="!hidden md:!flex">
            <input
              type="text"
              placeholder="Type here"
              className="input border-[2px] border-r-0 border-[#E7E6EF] input-primary h-[40px] w-full min-w-[266px] rounded-none focus:outline-none focus:border-[#FB2E86] "
            />
            <MyButton className={"header-button"}>
              <Image src={Search} alt="search icon" />
            </MyButton>
          </Flex>

          <MobileMenu />
        </Flex>
      </Container>
    </header>
  );
};

export default index;
