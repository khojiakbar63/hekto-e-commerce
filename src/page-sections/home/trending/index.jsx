import React from "react";
import { HomeTitle } from "../../../components/typography";
import { Box, Container, Flex } from "@chakra-ui/react";
import { TrendingCard } from "../../../components/ui";
import { TrendingCardTwo } from "../../../components/ui";
import { TrendingCardThree } from "../../../components/ui";
import { TRENDING_CARDS } from "../../../mocks/cards";

import T2_1 from "../../../assets/icons/h-trending-2-1.svg";
import T2_2 from "../../../assets/icons/h-trending-2-2.svg";
import T3_1 from "../../../assets/icons/trending-c-3-1.svg";
import T3_2 from "../../../assets/icons/trending-c-3-2.svg";
import T3_3 from "../../../assets/icons/trending-c-3-3.svg";

const Trending = () => {
  return (
    <Box className="bg-[#fff] pt-[132px] pb-[126px]">
      <Container maxW={"1177px"}>
        <HomeTitle className="mb-[39px]">Trending Products</HomeTitle>
        <Flex className="flex-wrap justify-between mb-[39px]">
          {TRENDING_CARDS.map((card, index) => (
            <TrendingCard key={card.id} image={card.image} />
          ))}
        </Flex>

        <Flex className="justify-between">
          <Flex gap={"29px"}>
            <TrendingCardTwo
              image={T2_1}
              link={"Shop Now"}
              className={"bg-[#FFF6FB]"}
            />
            <TrendingCardTwo
              image={T2_2}
              link={"View Collection"}
              className={"bg-[#EFEFFB]"}
            />
          </Flex>

          <Flex flexDir={"column"} gap={"20px"} justifyContent={"center"}>
            <TrendingCardThree image={T3_1} />
            <TrendingCardThree image={T3_2} />
            <TrendingCardThree image={T3_3} />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Trending;
