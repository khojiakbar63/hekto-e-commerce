import React from "react";
import {
  Box,
  Container,
  Flex,
} from "@chakra-ui/react";
import { LatestBlogCard } from "../../../components/ui";
import { HomeTitle } from "../../../components/typography";
import { BLOG_LIST } from "../../../mocks/cards";

const Blog = () => {
  return (
    <Box marginBottom={'38px'}>
      <Container maxW="1177px" py="20">
        <HomeTitle>Leatest Blog</HomeTitle>

        <Flex justifyContent={"space-between"}>
          {BLOG_LIST.map((item) => (
            <LatestBlogCard key={item.id} {...item} />
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Blog;
