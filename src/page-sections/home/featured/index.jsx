import React from "react";
import { FeaturedCard } from "../../../components/ui";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { FEATURED_CARDS } from "../../../mocks/cards";
import { HomeTitle } from '../../../components/typography';

const Featured = () => {
  return (
    <div className="pt-[129px] pb-[70px] bg-white">
      <Container maxW="1177px">
        <HomeTitle
        >
          Featured Products
        </HomeTitle>
        <div className="carousel pb-[40px] w-full transition-transform duration-700 ease-in-out">
          <div id="page1" className="carousel-item w-full transition-all duration-[700ms]" >
            <Box>
              <Flex className="gap-[20px] flex-wrap justify-center xl:justify-between">
                {FEATURED_CARDS.map((card) => (
                  <FeaturedCard
                    key={card.id}
                    image={card.image}
                    title={card.title}
                    code={card.code}
                    price={card.price}
                  />
                ))}
              </Flex>
            </Box>
          </div>
          <div id="page2" className="carousel-item w-full ">
            <Box>
              <Flex className="gap-[20px] flex-wrap justify-center xl:justify-between">
                {FEATURED_CARDS.map((card) => (
                  <FeaturedCard
                    key={card.id}
                    image={card.image}
                    title={card.title}
                    code={card.code}
                    price={card.price}
                  />
                ))}
              </Flex>
            </Box>
          </div>
          <div id="page3" className="carousel-item w-full transition-all duration-[700ms]" >
            <Box>
              <Flex className="gap-[20px] flex-wrap justify-center xl:justify-between">
                {FEATURED_CARDS.map((card) => (
                  <FeaturedCard
                    key={card.id}
                    image={card.image}
                    title={card.title}
                    code={card.code}
                    price={card.price}
                  />
                ))}
              </Flex>
            </Box>
          </div>
          <div id="page4" className="carousel-item w-full ">
            <Box>
              <Flex className="gap-[20px] flex-wrap justify-center xl:justify-between">
                {FEATURED_CARDS.map((card) => (
                  <FeaturedCard
                    key={card.id}
                    image={card.image}
                    title={card.title}
                    code={card.code}
                    price={card.price}
                  />
                ))}
              </Flex>
            </Box>
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <a href="#page1" className="btn btn-xs">
            1
          </a>
          <a href="#page2" className="btn btn-xs">
            2
          </a>
          <a href="#page3" className="btn btn-xs">
            3
          </a>
          <a href="#page4" className="btn btn-xs">
            4
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Featured;
