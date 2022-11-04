import Link from "next/link";
import React, { useState } from "react";

const Sidebar = () => {
  const tags = ["dashboard", "product", "personal", "corporate", "traffic"];

  return (
    <div className="flex flex-col pt-20 sticky border-r-2 h-full">
      {tags.map((e) => (
        <div key={e} className={``}>
          <Link href={`/${e === "dashboard" ? "" : e}`}>
            <li className="cursor-pointer capitalize px-5 py-3 hover:bg-slate-200 text-lg list-none w-full">
              {e}
            </li>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
