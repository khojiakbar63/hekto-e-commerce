import React from "react";
import "./_style.scss";

const index = ({ image, title, description, ...props }) => {
  return (
    <div className="card bg-base-100 w-[270px] h-[320px] rounded-none shadow-xl pt-[56px] px-[2px] flex flex-col items-center ">
      <img
        src={image}
        alt={title}
        width={"65px"}
        height={"65px"}
        className="mb-[37px]"
      />

      <div className="text-center">
        <h2 className="mb-[10px] text-[#2F1AC3] text-[22px] font-bold">
          {title}
        </h2>
        <p className="text-[#B9B6CE] text-[18px]">{description}</p>
      </div>
    </div>
  );
};

export default index;
