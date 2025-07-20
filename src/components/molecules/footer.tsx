import Image from "next/image";
import React from "react";
import WhiteLogo from "../../assets/icons/flint-white-logo.svg";
import { Button } from "../ui/button";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { Instagram, MessageCircle, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <div className="py-8 md:px-16  w-full bg-white">
      <div className="grid grid-cols-2">
        <div className="flex gap-8">
          <div className="md:border-[1px] rounded-4xl border-black text-black w-fit h-fit px-8 py-2 text-sm font-medium bg-origin-border">
            © 2025 Flint Inc.
          </div>
        </div>

        <div className="flex  md:gap-32 gap-2 justify-end">
          <InteractiveHoverButton className=" bg-transparent flex flex-row items-center justify-center hover:bg-black py-2 px-4 md:px-6  hover:border-black hover:scale-105 transition-all hover:text-sm rounded-3xl border-1 bg-origin-border md:h-auto md:w-auto h-10 w-10">
            <div className=" flex items-center gap-2 ">
              <Instagram className="h-5 w-5" />
              <p className="hidden md:block">Instagram</p>{" "}
            </div>
          </InteractiveHoverButton>
          <InteractiveHoverButton className="bg-transparent flex flex-row items-center justify-center hover:bg-black px-4 md:px-6  hover:border-black hover:scale-105 transition-all hover:text-sm rounded-3xl border-1 bg-origin-border md:h-auto md:w-auto h-10 w-10">
            <div className=" flex items-center gap-2 ">
              <Twitter className="h-5 w-5" />
              <p className="hidden md:block">X</p>{" "}
            </div>
          </InteractiveHoverButton>
          <InteractiveHoverButton className="bg-transparent flex flex-row items-center justify-center hover:bg-black px-4 md:px-6  hover:border-black hover:scale-105 transition-all hover:text-sm rounded-3xl border-1 bg-origin-border md:h-auto md:w-auto h-10 w-10">
            {" "}
            <div className=" flex items-center gap-2 ">
              <MessageCircle className="h-5 w-5" />
              <p className="hidden md:block">WhatsApp</p>{" "}
            </div>
          </InteractiveHoverButton>
        </div>
      </div>
    </div>
  );
}
