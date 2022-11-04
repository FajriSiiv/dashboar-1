import Link from "next/link";
import React from "react";

const ButtonLinks = ({ data, file }) => {
  return (
    <div className="flex gap-x-2">
      {/* <Link href={`/personal/edit/${data}`}>
        <p className="pt-2">Edit</p>
      </Link> */}
      <Link href={`/${file}/detail/${data}`}>
        <p className="pt-2">Detail</p>
      </Link>
    </div>
  );
};

export default ButtonLinks;
