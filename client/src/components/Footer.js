import React from "react";
import { Link } from "react-router-dom";
import {
  // logoSilver,
  pinterest,
  linkedin,
  facebook,
  twitter,
  phone,
  mail,
  locationMark,
  whiteArrow,
} from "../utils/Lists";
import "../styles/Footer.scss";

const Footer = () => {
  const Logo = () => (
    <Link to="/">
      {/* <img className="logo" src={logoSilver} alt="" /> */}
      <h1 className="nav-logo">Aroma Shop</h1>
    </Link>
  );

  const TextWithIcon = ({ icon, text, href }) => (
    <div className="text-with-icon">
      <img src={icon} alt="" />
      {href ? (
        <a href={href}>
          <p>{text}</p>
        </a>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );

  const MenuItem = ({ label, path }) => (
    <Link to={path}>
      <p>{label}</p>
    </Link>
  );

  const SocialIcon = ({ icon }) => (
    <img className="social-icon" src={icon} alt="" />
  );

  const GetInTouchInput = () => (
    <div className="input-block">
      <input
        className="get-in-touch-input"
        type="text"
        placeholder="Enter your mail"
      />
      <button>
        <img src={whiteArrow} alt="" />
      </button>
    </div>
  );

  return (
    <div className="footer">
      <div className="footer-col">
        <Logo />
        <TextWithIcon
          icon={locationMark}
          text="100 Lighthouse Ave, NB 30701"
        />
        <TextWithIcon
          icon={phone}
          text="+1-102-101-0102"
          href="tel:+1-416-416-4166"
        />
        <TextWithIcon
          icon={mail}
          text="aromashop@aroma.com"
          href="mailto:aromashop@aroma.com"
        />
      </div>

      <div className="footer-col">
        <h3>Useful Links</h3>
        <MenuItem label="Explore Scents" path="/ExploreScents" />
        <MenuItem label="About Us" path="/AboutUs" />
        <MenuItem label="Cart" path="/cart/id*" />

      </div>

      <div className="footer-col">
        <h3>Shop</h3>
        <MenuItem label="Send a gift" path="/ExploreScents" />
        <MenuItem label="Shop perfumes" path="/ExploreScents" />
        <MenuItem label="Shop colognes" path="/ExploreScents" />
      </div>

      <div className="footer-col">
        <h3>Follow Us</h3>
        <SocialIcon icon={pinterest} />
        <SocialIcon icon={linkedin} />
        <SocialIcon icon={facebook} />
        <SocialIcon icon={twitter} />

        <h3>Get In Touch</h3>
        <GetInTouchInput />
      </div>
    </div>
  );
};

export default Footer;
