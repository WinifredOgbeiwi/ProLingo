import { useState } from "react";
import { Link, useLocation } from "react-router";
import { NavUrl, ROUTES } from "../../util";
import { MdMenuBook } from "react-icons/md";
import Button from "../common/Button";
import { FaTimes } from "react-icons/fa";
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();
        const pathRoute = (route) => {
          if (route === location.pathname) return true;
      };
  return (
    <header className="relative">
      <div className=" flex text-lg justify-between items-center mt-7 px-8 md:px-20 pb-5 font-semibold sticky z-50 w-full">
        <h2 className="font-semibold text-2xl">ProLingo</h2>

        <nav className="hidden md:flex gap-12">
          {NavUrl.map((link, index) => (
            <Link
              to={link.path}
              key={index}
              className={`${
                pathRoute(link.path) && "text-primary01"
              } hover:text-primary01 font-semibold`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {showNav ? (
          <FaTimes
            className="md:hidden block text-4xl"
            onClick={() => setShowNav(!showNav)}
          />
        ) : (
          <MdMenuBook
            className="md:hidden block text-4xl"
            onClick={() => setShowNav(!showNav)}
          />
        )}

        <Button
          text="Sign In"
          style="primary"
          width="w-32 hidden md:block"
          location={ROUTES.SIGN_IN}
        />
      </div>
      {showNav && (
        <nav className="md:hidden px-5 py-10 text-xl bg-primary01 w-full absolute z-50">
          <ul className=" flex justify-between mb-6">
            {NavUrl.map((link, index) => (
              <Link
                to={link.path}
                key={index}
                onClick={() => setShowNav(false)}
                className={`${
                  pathRoute(link.path) && "text-white"
                } hover:text-white font-semibold`}
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <Button
            text="Sign In"
            style=""
            width="w-full "
            location={ROUTES.SIGN_IN}
          />
        </nav>
      )}
    </header>
  );
};

export default Header;
