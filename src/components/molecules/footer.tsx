import Image from "next/image";
import React from "react";
import WhiteLogo from "../../assets/icons/flint-white-logo.svg";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <div className="py-8 px-16 w-full z-40 bg-white">
      <div className="grid grid-cols-2">
        <div className="flex gap-8">
          <div className="border-[1px] rounded-4xl border-black text-black w-fit h-fit px-8 py-2 text-sm font-medium bg-origin-border">
            © 2025 Flint Inc.
          </div>
        </div>

        <div className="flex gap-32">
          <Button
            variant={"outline"}
            className="bg-transparent rounded-3xl border-1 px-6 bg-origin-border"
          >
            {" "}
            Instagram
          </Button>
          <Button
            variant={"outline"}
            className="bg-transparent rounded-3xl border-1 px-6 bg-origin-border"
          >
            {" "}
            Twitter
          </Button>
          <Button
            variant={"outline"}
            className="bg-transparent rounded-3xl border-1 px-6 bg-origin-border"
          >
            {" "}
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
