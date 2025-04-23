import { CATEGORIES } from "@/lib/constants";
import Image from "next/image";
import React from "react";

type Props = {};

const CategoriesAndFilters = (props: Props) => {
  return (
    <div className="flex overflow-x-scroll w-full gap-4 justify-between">
      {CATEGORIES.map(({ title, iconSrc }) => (
        <div
          key={title}
          className="flex flex-col justify-center items-center hover: border-b-4 opacity-60 hover:border-zinc-400 hover:opacity-100"
        >
          <Image src={iconSrc} alt={title} width={20} height={20} />
          <span className="text-wrap text-[10px]">{title}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoriesAndFilters;
