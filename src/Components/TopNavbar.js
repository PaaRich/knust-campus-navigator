import { useContext } from "react";
import BtB from "../Components/Resources/BtB.png";
import { GrClose } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import { myNavBar } from "../App";

const TopNavbar = () => {
  //const [open, setOpen] = useState(false);
  const theMyNavBar = useContext(myNavBar);
  const { open, setOpen } = theMyNavBar;

  return (
    <div className="top_navbar d-flex align-items-center justify-content-between py-2 px-2 py-lg-2 px-lg-5">
      <div>
        <div className="mb-0 ms-2">
          <div className="d-flex">
            <img className="BtBLogo w-50" src={BtB} alt="btb" />
          </div>
        </div>
      </div>
      <span className="menu-btn" onClick={() => setOpen((theOpen) => !theOpen)}>
        {open ? (
          <GrClose className="close-btn text-black fs-2 fw-bold text-end" />
        ) : (
          <FiMenu className="menu-btn fs-2 fw-bold text-end" />
        )}
      </span>
    </div>
  );
};

export default TopNavbar;
