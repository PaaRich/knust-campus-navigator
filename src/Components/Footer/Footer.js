import React from "react";
import { NavLink } from "reactstrap";
import { AiOutlineMail } from "react-icons/ai";
import {
  BsTelephone,
  BsShare,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";

const Footer = () => {
  const style = {
    marginRight: "8px",
    fontSize: "1.6em",
    color: "rgb(8, 187, 8)",
  };
  return (
    <div className="footer-container  pt-5 pb-0" id="footer">
      <h3>Contact us</h3>
      <div className="social-icons d-flex align-items-center justify-content-around py-3">
        <div>
          <div className="d-flex align-items-center justify-content-center">
            <AiOutlineMail style={style} />
            <span style={{ fontSize: "20px" }}>Email</span>
          </div>
          <NavLink to="#" className="e-mail">
            siehrichmond50@gmail.com
          </NavLink>
        </div>
        <div>
          <div className="d-flex align-items-center justify-content-center">
            <BsTelephone style={style} />
            <span style={{ fontSize: "20px" }}>Telephone</span>
          </div>
          <NavLink to="#" className="telephone">
            0546684004
          </NavLink>
        </div>
        <div>
          <div className="d-flex align-items-center justify-content-center">
            <BsShare style={style} />
            <span style={{ fontSize: "20px" }}>Social media</span>
          </div>
          <NavLink to="#" className="d-inline-flex">
            <BsTwitter className="twitter" />
          </NavLink>
          <NavLink to="#" className="d-inline-flex">
            <BsLinkedin className="linkedin" />
          </NavLink>
          <NavLink to="#" className="d-inline-flex">
            <BsInstagram className="instagram" />
          </NavLink>
        </div>
      </div>

      <p className="text-dark m-0">
        {" "}
        Copyright © 2023
        <NavLink
          to="#"
          className="sieh-sefear"
          style={{ textDecoration: "none", display: "inline-flex" }}
        >
          Better The Best
        </NavLink>
        Developer
        <NavLink
          to="#"
          className="sieh-sefear"
          style={{ textDecoration: "none", display: "inline-flex" }}
        >
          PaaRich
        </NavLink>
      </p>
    </div>
  );
};

export default Footer;
