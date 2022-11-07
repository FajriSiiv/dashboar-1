import Link from "next/link";
import React, { useEffect, useState } from "react";

const Card = ({ data, text = "Data Active", link = "#" }) => {
  const [datas, setDatas] = useState();
  useEffect(() => {
    setDatas(data);
  }, [data]);

  return (
    <div
      className={`border-r-4 rounded-lg text-xl grid grid-rows-3 px-5 py-3 font-bold items-center bg-slate-200 border-r-red-800 `}
    >
      <p className="row-span-1 uppercase tracking-wide">{text}</p>
      <div className="row-span-2 flex justify-between items-end">
        <p className=" text-4xl">{datas?.length}</p>
        <Link href={link}>
          <p className="underline font-medium text-base">Goto</p>
        </Link>
      </div>
    </div>
  );
};

export default Card;
