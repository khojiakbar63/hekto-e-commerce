import React from "react";
import { HomeTitle } from "../../../components/typography";
import { MyButton } from "../../../components/ui";
import "./style.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <HomeTitle className={"w-[574px] !mb-[30px]"}>
        Get Leatest Update By Subscribe 0ur Newslater
      </HomeTitle>

      <MyButton className="footer-button py-[12px]">Shop Now</MyButton>
    </div>
  );
};

export default Newsletter;
