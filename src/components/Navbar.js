import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
// import avatar from "../assets/avatar2.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";
import { Constants } from "../utils/Constants";
import { BiUserCircle } from "react-icons/bi";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setIsClicked,
    setScreenSize,
    screenSize,
  } = useStateContext();
  const [user, setUser] = useState();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    setUser(JSON.parse(localStorage.getItem(Constants.USER_PROFILE)));

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative w-[100%]">
      <NavButton
        title="Menu"
        // customFunc={handleActiveMenu}
        customFunc={() => setActiveMenu(!activeMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        <a
          href="https://www.tally.xyz/governance/eip155:80001:0x9c4bE5b9D86346fDE9c40ddbb7c6ed8163CeE38D"
          // target="_blank"
        >
          <button
            style={{ backgroundColor: currentColor }}
            className="text-xl opacity-0.9 text-white hover:drop-shadow-xl rounded-md font-semibold  py-3 px-6 mx-3  "
          >
            Launch DAO
          </button>
        </a>
        <NavButton
          title="Notification"
          dotColor="rgb(254, 201, 15)"
          customFunc={() => handleClick("notification")}
          // color={currentColor}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <BiUserCircle
              className="text-3xl"
              style={{ color: currentColor }}
            />
            {/* <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            /> */}
            <p>
              <span className="text-gray-400 text-14">Hi,</span>
              <span className="text-gray-400 font-bold ml-1 text-14">
                {user}
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
