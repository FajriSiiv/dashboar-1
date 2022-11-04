import React from "react";

const Content = ({ children, name }) => {
  return (
    <div className="">
      <h2 className="mb-4 text-2xl font-bold">{name}</h2>
      {children}
    </div>
  );
};

export default Content;
