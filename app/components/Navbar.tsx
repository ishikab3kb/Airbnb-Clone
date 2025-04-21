import React from "react";
import Logo from "../../public/logo.png";
import Image from "next/image";
import { Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

import { SeacrhTab } from "./SearchTab";
import NavUserDropdown from "./NavUserDropdown";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="w-full flex flex-row justify-between items-start fixed top-0 left-0 p-4 border-b bg-white z-10">
      <Link href="/" className="flex gap-0.5 items-center">
        <Image src={Logo} alt="Logo" height={30} width={30}></Image>
        <h1 className="text-airbnb text-xl font-medium invisible md:visible">
          airbnb
        </h1>
      </Link>
      <div className=" invisible sm:visible">
        <SeacrhTab />
      </div>
      <div className="flex gap-0.5">
        <Button variant="ghost" className="text-m">
          Airbnb your home
        </Button>
        <Button variant="ghost">
          <Globe size="48px" />
        </Button>
        <NavUserDropdown />
      </div>
    </nav>
  );
};

export default Navbar;
