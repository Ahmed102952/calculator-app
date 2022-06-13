import React from "react";
import eraser from "../../assests/eraser.png"

export const NumberBtn = ({ number }: { number: number | string }) => {
  return (
    <div className="btn bg-off-white text-blue-600  dark:bg-gray-800">
      {number}
    </div>
  );
};

export const OpBtn = ({ value }: { value: string }) => {
  return <div className="btn bg-blue-100 text-black dark:bg-blue-800 dark:text-off-white">{value}</div>;
};
export const Equal = ({ value }: { value: string }) => {
  return <div className="btn bg-blue-600 text-black dark:bg-blue-800 dark:text-off-white">{value}</div>;
};

export const DeleteAll = () => {
  return <div className="btn bg-off-white text-red-500 dark:bg-gray-600">Ac</div>;
};

export const Erase = () => {
  return <div className="btn bg-off-white dark:bg-gray-600">
    <img src={eraser} alt="Del" width={20} height={20} />
  </div>
}

