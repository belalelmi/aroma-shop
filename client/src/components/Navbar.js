import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logoSilver, logoGold } from "../utils/Lists";
import "../styles/Navbar.scss";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [expand, setExpand] = useState(false);

  const links = [
    { label: "Home", path: "/" },
    { label: "Explore Scents", path: "/ExploreScents" },
    { label: "Pricing Plans", path: "/plans" },
    { label: "About Us", path: "/AboutUs" },
    { label: "Cart", path: "/cart/id*" },
    { label: "Login", path: "/login" },
  ];

  const openMenu = () => {
    setShowMenu(true);
    setExpand(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
    setTimeout(() => {
      setExpand(false);
    }, 400);
  };

  const NavbarLogo = ({ logo }) => (
    <Link to="/" onClick={closeMenu}>
      {/* <img className="logo" src={logo} alt="" /> */}
      <h1 className="nav-logo">Aroma Shop</h1>
    </Link>
  );

  const MenuItem = ({ label, path, additionalClasses, style }) => (
    <NavLink
      className={`nav-link ${additionalClasses}`}
      // activeclassName="selected-nav-link"
      to={path}
      // exact={`${exact}`}
      onClick={closeMenu}
      style={style}
    >
      <p>{label}</p>
      <div />
    </NavLink>
  );

  const Navigations = ({ additionalClasses = "" }) => {
    let inc = 0;
    return (
      <div className="navigations">
        {links.map((item, index) => (
          <MenuItem
            key={index}
            label={item.label}
            path={item.path}
            additionalClasses={additionalClasses}
            style={{ animationDelay: `${(inc += 0.09)}s` }}
          />
        ))}
      </div>
    );
  };

  const BurgerMenu = () => (
    <div className="burger-menu" onClick={openMenu}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );

  return (
    <>
      <div className="navbar">
        <NavbarLogo logo={logoSilver} />
        <Navigations />
        <BurgerMenu />
      </div>

      {expand && (
        <>
          <div
            className={`back-overlay ${showMenu ? "fade-in" : "fade-out"}`}
            onClick={closeMenu}
          />
          <div
            className={`sliding-menu ${showMenu ? "slide-in-left" : "slide-out-left"
              }`}
          >
            <NavbarLogo logo={logoGold} />
            <Navigations
              additionalClasses={showMenu ? "slide-up" : "slide-down"}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
