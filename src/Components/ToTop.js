import React, { useState, useEffect } from "react";
import { RiArrowUpDoubleFill } from "react-icons/ri";
import { RiArrowDownDoubleFill } from "react-icons/ri";

const ToTop = () => {
  const [goDown, setGoDown] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY > 500 ? setGoDown(false) : setGoDown(true)
    );
  }, []);

  return (
    <div
      className="to-top p-1 rounded-circle"
      onClick={() => {
        if (goDown) {
          window.scrollTo({
            top: 1100,
            behavior: "auto",
          });
        } else {
          window.scrollTo({
            top: 0,
            behavior: "auto",
          });
        }
      }}
    >
      {goDown ? (
        <RiArrowDownDoubleFill color="white" size={28} />
      ) : (
        <RiArrowUpDoubleFill color="white" size={28} />
      )}
    </div>
  );
};

export default ToTop;
