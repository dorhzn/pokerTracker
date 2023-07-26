"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { NavLinks } from "@/constants";
import AuthProviders from "./AuthProviders";

const NavBar = () => {
  //const { data: session } = useSession();
  //const [providers, setProviders] = useState(null);

  const session = {};

  //useEffect(() => {
  // const setUpProviders = async () => {
  //   const response = await getProviders();
  //   setProviders(response);
  // };
  //setUpProviders();
  //}, []);

  return (
    <nav className="flex-between navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/" className="flex gap-2 flex-center">
          <Image
            src="/logo.svg"
            width={30}
            height={30}
            alt="PokerTracker"
          ></Image>
          <ul className="xl:flex hidden text-small gap-7"></ul>
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </Link>
      </div>

      <div className="flexCenter gap-4">
        {session ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-project" className="black_btn">
              Share Work
            </Link>
          </div>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
