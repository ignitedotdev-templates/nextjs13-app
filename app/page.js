"use client";

import Image from "next/image";
import logo from "@/public/next.svg";

export default function Home() {
  const pathname = window.location.href;
  return (
    <main className="h-[100dvh] w-full flex flex-col gap-7 items-center justify-center">
      <div className="">
        <Image src={logo} alt="logo" width={400} height={400} />
      </div>
      <div className="flex flex-col text-center gap-14">
        <div className="flex flex-col text-center">
          <h2 className="text-[36px] font-semibold text-[#344054]">
            You’ve just ignited a new Next.Js static site!
          </h2>
          <p className="text-[#004EEB] text-[20px]">{pathname}</p>
        </div>
        <p className="text-[20px] font-medium text-[#344054]">
          Made in Nigeria with 💖
        </p>
      </div>
    </main>
  );
}
