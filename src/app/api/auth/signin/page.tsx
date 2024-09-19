// src/app/api/auth/signin/page.tsx

"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function SignIn() {
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);

  const handleSignIn = (provider: "google" | "github") => {
    setLoadingProvider(provider);
    signIn(provider, { callbackUrl: "/" });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign In
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Choose your preferred sign in method
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="-space-y-px rounded-md shadow-sm">
            <button
              onClick={() => handleSignIn("google")}
              disabled={loadingProvider !== null}
              className="group relative flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {loadingProvider === "google" ? (
                "Loading..."
              ) : (
                <>
                  <FaGoogle className="mr-2 h-4 w-4" aria-hidden="true" />
                  Sign in with Google
                </>
              )}
            </button>
          </div>
          <div>
            <button
              onClick={() => handleSignIn("github")}
              disabled={loadingProvider !== null}
              className="group relative flex w-full items-center justify-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {loadingProvider === "github" ? (
                "Loading..."
              ) : (
                <>
                  <FaGithub className="mr-2 h-4 w-4" aria-hidden="true" />
                  Sign in with GitHub
                </>
              )}
            </button>
          </div>
        </div>
        <div className="text-center">
          <p className="mt-2 text-sm text-gray-600">
            By signing in, you agree to our Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
}
