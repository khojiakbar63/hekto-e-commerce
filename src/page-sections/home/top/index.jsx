import React from "react";
import { HomeTitle } from "../../../components/typography";
import { TopCard } from "../../../components/ui";
import {  Flex , Container} from "@chakra-ui/react";
import Top1 from "../../../assets/icons/top-1.svg";
import Top2 from "../../../assets/icons/top-2.svg";
import Top3 from "../../../assets/icons/top-3.svg";
import Top4 from "../../../assets/icons/top-4.svg";



const Top = () => {
  const topData = [Top1, Top2, Top3, Top4]
  return (
    <div className="mb-[125px]">
      <Container maxW={'1177px'}>
        <HomeTitle className={"!mb-[56px]"}>Top Categories</HomeTitle>
        <Flex gap={'39px'}>
          {
            topData.map((item, index) => (
              <TopCard key={index} image={item} />
            ))
          }
        </Flex>

      </Container>
    </div>
  );
};

export default Top;
