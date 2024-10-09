import React from "react";
import { Outlet } from "react-router";
import { Header, HeaderTop, Main, Footer, FooterBottom } from "../../components/layouts";

const index = () => {
  return (
    <>
      <HeaderTop />
      <Header />

      <Main>
        <Outlet />
      </Main>

      <Footer/>
      <FooterBottom/>
    </>
  );
};

export default index;
