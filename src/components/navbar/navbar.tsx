import { Button } from "antd";
import { Link } from "react-router-dom";
import "../../assets/css/navbar.css";
import routes from "../../routes";
import homeLogo from "../../assets/images/home-logo.svg";
import useMediaQuery from "../../hooks/use-media-query";
import { Divide as Hamburger } from "hamburger-react";
import { Fragment, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isSmall = useMediaQuery("(max-width: 992px)");

  return (
    <>
      <div className="flex flex-row justify-between items-center lg:px-12 px-2 py-3 bg-white shadow-md">
        <img src={homeLogo} className="w-40" />
        {!isSmall && (
          <Fragment>
            <div className="[&>a]:ml-5">
              <Link to={routes.home}>Home</Link>
              <Link to={routes.home}>Home</Link>
            </div>
            <div>
              <Button>Button 1</Button>
              <Button>Button 2</Button>
            </div>
          </Fragment>
        )}

        {isSmall && (
          <Hamburger
            toggled={open}
            color="red"
            easing="ease-in"
            toggle={setOpen}
          />
        )}
      </div>

      {isSmall && (
        <div
          className={`bg-gray-100 ${
            open ? "h-[50vh]" : "h-0"
          } transition-h-300 absolute w-full z-10 shadow-md`}
        >
          <ul
            className={`${
              open ? "opacity-100" : "opacity-0"
            } [&>li]:px-10 [&>li]:py-5 transition-opacity ease-in-out duration-150`}
          >
            <li>
              <Link to={routes.home}>Home</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
