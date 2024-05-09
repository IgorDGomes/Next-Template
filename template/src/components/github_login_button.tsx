"use client"

import { signIn } from "next-auth/react";

/**
 * Sign in with github Button
 * @returns {JSX.Element}
 */
export default function GithubLoginButton() {
    return (
        <button 
          className="bg-zinc-700 px-6 py-3 rounded-xl hover:bg-zinc-800"
          onClick={() => {
            signIn('github', { callbackUrl: '/main' })
          }}
        >
          Login with Github
        </button>
    )
}