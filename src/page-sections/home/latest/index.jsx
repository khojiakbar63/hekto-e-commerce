import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { LatestCard } from "../../../components/ui";
import { LATEST_CARDS } from "../../../mocks/cards";
import { HomeTitle } from '../../../components/typography';

const Latest = () => {
  return (
    <Box>
      <Container maxW={"1177px"}>
        <Flex className="flex-col items-center">
          <HomeTitle
          >
            Leatest Products
          </HomeTitle>

          <Flex className="gap-[45px] mb-[58px]">
            <Link
              to="/"
              className="text-[#FA2E86] hover:text-[#FA2E86] border-b-[1px] border-[#FA2E86] duration-300 cursor-pointer"
            >
              New Arrival
            </Link>
            <Link
              to="/"
              className="text-[#5343CF] hover:text-[#FA2E86] border-b-[1px] border-transparent hover:border-[#FA2E86] duration-300 cursor-pointer"
            >
              Best Seller
            </Link>
            <Link
              to="/"
              className="text-[#5343CF] hover:text-[#FA2E86] border-b-[1px] border-transparent hover:border-[#FA2E86] duration-300 cursor-pointer"
            >
              Featured
            </Link>
            <Link
              to="/"
              className="text-[#5343CF] hover:text-[#FA2E86] border-b-[1px] border-transparent hover:border-[#FA2E86] duration-300 cursor-pointer"
            >
              Special Offer
            </Link>
          </Flex>

          <Flex className="flex-wrap justify-center lg:justify-between">
            {LATEST_CARDS.map((item) => (
              <LatestCard
                key={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                sale={item.sale}
              />
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Latest;
