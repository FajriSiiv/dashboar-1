import Link from "next/link";
import React from "react";

const ButtonAdd = ({ text, link }) => {
  return (
    <>
      <Link href={link}>
        <button className="py-1 px-4 text-base bg-rose-600 text-white my-2 rounded-md">
          {text}
        </button>
      </Link>
    </>
  );
};

export default ButtonAdd;
