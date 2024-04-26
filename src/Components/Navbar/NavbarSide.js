import React, { useContext } from "react";
import { myNavBar } from "../../App";
import { AiFillHome } from "../../../node_modules/react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { BsFillTelephoneInboundFill } from "react-icons/bs";

const NavbarSide = () => {
  //const [open, setOpen] = useState(false);
  const theMyNavBar = useContext(myNavBar);
  const { open } = { ...theMyNavBar };
  //styling react-icon

  return (
    <div className={`${open && "navbar-side-width"} navbar-side`}>
      <div className="mt-3 navbar-side-links">
        <a href="#home" className="d-flex align-items-end py-3">
          <AiFillHome className="home" />
          <h5 className={`${!open && "display"} mb-0 ms-3`}>Home</h5>
        </a>
        <a href="#about" className="d-flex align-items-end py-3">
          <IoIosContact className="contact" />
          <h5 className={`${!open && "display"} ms-3 mb-0`}>About</h5>
        </a>
        <a href="#footer" className="d-flex align-items-end py-3">
          <BsFillTelephoneInboundFill className="contact" />
          <h5 className={`${!open && "display"} ms-3 mb-0`}>Contact</h5>
        </a>
      </div>
    </div>
  );
};

export default NavbarSide;
