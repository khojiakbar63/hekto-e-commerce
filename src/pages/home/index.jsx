import React from "react";
import {
  HomeHero,
  HomeFeatured,
  HomeLatest,
  HomeShopex,
  HomeUnique,
  HomeTrending,
  HomeDiscount,
  HomeTop,
  HomeNewsletter,
  HomeBrends,
  HomeBlog,
} from "../../page-sections";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeFeatured />
      <HomeLatest />
      <HomeShopex />
      <HomeUnique />
      <HomeTrending />
      <HomeDiscount />
      <HomeTop />
      <HomeNewsletter />
      <HomeBrends />
      <HomeBlog />
    </div>
  );
};

export default Home;
