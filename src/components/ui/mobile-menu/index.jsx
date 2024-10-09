import React, { useState } from "react";
import { FcMenu } from "react-icons/fc";
import { MdClose } from "react-icons/md";
import { Image, List, ListItem, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Drawer = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="block lg:hidden">
      <div className="text-center">
        <button
          className="drawer-button px-5 text-[40px] cursor-pointer text-slate-500 text-center transition-all duration-500"
          type="button"
          onClick={toggleDrawer}
          aria-controls="drawer-left-example"
        >
          {isDrawerOpen ? <MdClose /> : <FcMenu />}
        </button>
      </div>

      <div
        id="drawer-left-example"
        className={`w-96 absolute right-0 top-0 z-40 pl-9 pr-3 pb-11 h-screen overflow-y-auto transition-transform flex items-center justify-center ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } bg-white`}
        tabIndex="-1"
        aria-labelledby="drawer-label"
        aria-hidden={!isDrawerOpen}
      >
        <List>
          <ListItem className="text-[20px] border-b-2 border-transparent hover:border-[#E7E6EF]"><NavLink to={'/'}><Text>Home</Text></NavLink></ListItem>
          <ListItem className="text-[20px] border-b-2 border-transparent hover:border-[#E7E6EF]"><NavLink to={'/about-us'}><Text>About Us</Text></NavLink></ListItem>
          <ListItem className="text-[20px] border-b-2 border-transparent hover:border-[#E7E6EF]"><NavLink to={'/blog-page'}><Text>Blog Page</Text></NavLink></ListItem>
          <ListItem className="text-[20px] border-b-2 border-transparent hover:border-[#E7E6EF]"><NavLink to={'/contact-us'}><Text>Contact Us</Text></NavLink></ListItem>
        </List>

        <button
          type="button"
          onClick={toggleDrawer} // Event to close the drawer
          aria-controls="drawer-left-example"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-6 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
      </div>
    </div>
  );
};

export default Drawer;
