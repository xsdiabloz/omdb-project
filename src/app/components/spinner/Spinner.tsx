import React, { FC } from "react";

const Spinner: FC = () => {
  return (
    <div className="grid place-items-center min-h-[80vh]">
      <div className="w-[65px] h-[65px] rounded-full border-5 border-gray-400 border-t-purple-700 animate-spin-slow"></div>
    </div>
  );
};

export default Spinner;
