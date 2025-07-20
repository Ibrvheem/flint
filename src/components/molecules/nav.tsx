import Image from "next/image";
import React from "react";
import WhiteLogo from "../../assets/icons/flint-white-logo.svg";
import { Button } from "../ui/button";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

export default function Nav() {
  return (
    <div className="nav absolute py-8 px-16 w-full z-10 text-white hidden md:block">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-8">
          <InteractiveHoverButton className="bg-transparent hover:bg-black  hover:border-black hover:scale-105 transition-all hover:text-sm ounded-3xl border-1 bg-origin-border">
            Shop
          </InteractiveHoverButton>
          <InteractiveHoverButton className="bg-transparent hover:bg-black  hover:border-black hover:scale-105 transition-all hover:text-sm ounded-3xl border-1 bg-origin-border">
            Collections
          </InteractiveHoverButton>
        </div>
        <div>
          <Image src={WhiteLogo} alt="" className="h-24 w-24" />
        </div>
        <div className="flex gap-8">
          <InteractiveHoverButton className="bg-transparent hover:bg-black  hover:border-black hover:scale-105 transition-all hover:text-sm ounded-3xl border-1 bg-origin-border">
            About
          </InteractiveHoverButton>
          <InteractiveHoverButton className="bg-transparent hover:bg-black  hover:border-black hover:scale-105 transition-all hover:text-sm ounded-3xl border-1 bg-origin-border">
            Bag
          </InteractiveHoverButton>
        </div>
      </div>
    </div>
  );
}
