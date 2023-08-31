"use client";
import React from "react";
import { useState, useEffect } from "react";
import { signIn, getProviders } from "next-auth/react";

type Provider = {
  id: string;
  name: string;
  type: string;
  signInUrl?: string;
  callbackUrl: string;
  signInUrlParams?: Record<string, string> | null;
};

type Providers = Record<string, Provider>;

const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      console.log("providers are : " + response);
      setProviders(response);
    };

    setUpProviders();
  }, []);

  return (
    <>
      {providers &&
        Object.values(providers).map((provider: Provider) => (
          <button
            type="button"
            key={provider.name}
            onClick={() => signIn(provider.id)}
            className="black_btn"
          >
            {provider.id}
          </button>
        ))}
    </>
  );
};

export default AuthProviders;
