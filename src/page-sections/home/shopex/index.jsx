import React from "react";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { ShopexCard } from "../../../components/ui";
import { SHOPEX_CARDS } from "../../../mocks/cards";
import { HomeTitle } from '../../../components/typography';

const Shopex = () => {
  return (
    <Box className="pb-[135px]">
      <Container maxW={"1177px"}>
        <Flex className="flex-col items-center">
          <HomeTitle
          >
            What Shopex Offer!
          </HomeTitle>
          <Flex className="!justify-between w-full">
            {SHOPEX_CARDS.map((item) => (
              <ShopexCard
                image={item.image}
                title={item.title}
                description={item.desc}
                key={item.id}
              />
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Shopex;
