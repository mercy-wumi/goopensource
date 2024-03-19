"use Client";

import Image from "next/image";
import { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

import GlobalApi from "@/app/_utils/GlobalApi";

export default function Header() {
  const { data: session } = useSession();

  useEffect(() => {
    getProfileInfo;
  }, []);

  const getProfileInfo = GlobalApi.getUserInfo().then((res) => {
    console.log(res);
  });

  return (
    <div className="w-full md:flex justify-between items-center text-white p-16 max-w-[1400px] mx-auto">
      <p className="hidden md:block text-4xl lg:text-5xl w-2/3 lg:w-7/12 xl:w-1/2 font-semibold">
        <span className="text-slate-500">A Frontend Engineer</span> passionate
        about building things on the web
      </p>
      <div className="absolute top-8 md:top-36 right-8 md:right-16 text-white">

        {session?.user?.image && (
          <Image
            className="w-28 h-28 md:w-40 md:h-40 rounded-full border-white border-[2px] object-cover"
            src={session?.user?.image}
            width={200}
            height={200}
            alt={session?.user?.name ?? "Profile Pic"}
            priority={true}
          />
        )}
        <p className="font-semibold text-xl md:text-3xl">
          {session?.user?.name}
        </p>
        <div className="flex justify-evenly text-xs mt--3">
          <a href="mercy-portfolio.vercel.app" target="_blank">
            Portfolio
          </a>
          <span>59 repos</span>
        </div>
      </div>
      <button></button>
    </div>
  );
}
