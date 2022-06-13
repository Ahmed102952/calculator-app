import React from "react";

interface props {
  children: JSX.Element | JSX.Element[];
}
const BtnsBox = ({ children }: props) => {
  return <div className="w-full grid grid-cols-4 gap-4 sm:gap-3">{children}</div>;
};

export default BtnsBox;
