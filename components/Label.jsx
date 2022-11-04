import React from "react";

const Label = ({ text, data }) => {
  return (
    <div className="flex gap-x-3">
      <h2 className="text-lg font-bold text-gray-800 opacity-90 pr-10 w-60">
        {text}
      </h2>
      <span className="text-lg font-bold text-gray-800 opacity-90">:</span>
      <p className="text-lg tracking-wider font-bold text-rose-500">{data}</p>
    </div>
  );
};

export default Label;
