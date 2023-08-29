"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { NavLinks } from "@/constants";
import AuthProviders from "./AuthProviders";
import { getCurrentUser } from "@/lib/session";

const NavBar = async () => {
  //const { data: session } = useSession();
  //const [providers, setProviders] = useState(null);

  const session = await getCurrentUser();

  //useEffect(() => {
  // const setUpProviders = async () => {
  //   const response = await getProviders();
  //   setProviders(response);
  // };
  //setUpProviders();
  //}, []);

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={30}
            height={30}
            alt="PokerTracker"
          ></Image>
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4">
        {session?.user ? (
          <>
            {session?.user?.image && (
              <Image
                src={session.user.image}
                width={40}
                height={40}
                className="rounded-full"
                alt={session.user.name}
              />
            )}
            <Link href="/create-project" className="black_btn">
              Share Work
            </Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
