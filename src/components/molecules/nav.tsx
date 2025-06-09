import Image from "next/image";
import React from "react";
import WhiteLogo from "../../assets/icons/flint-white-logo.svg";
import { Button } from "../ui/button";

export default function Nav() {
  return (
    <div className="nav absolute py-8 px-16 w-full z-10 text-white">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-8">
          <Button
            variant={"outline"}
            className="bg-transparent rounded-3xl border-1 px-6 bg-origin-border"
          >
            Shop
          </Button>
          <Button
            variant={"outline"}
            className="bg-transparent rounded-3xl border-1 px-6 bg-origin-border"
          >
            Collections
          </Button>
        </div>
        <div>
          <Image src={WhiteLogo} alt="" className="h-24 w-24" />
        </div>
        <div className="flex gap-8">
          <Button
            variant={"outline"}
            className="bg-transparent rounded-3xl border-1 px-6 bg-origin-border"
          >
            About
          </Button>
          <Button
            variant={"outline"}
            className="bg-transparent rounded-3xl border-1 px-6 bg-origin-border"
          >
            Bag
          </Button>
        </div>
      </div>
    </div>
  );
}
