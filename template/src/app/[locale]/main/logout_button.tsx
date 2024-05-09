"use client"

import { signOut } from "next-auth/react"

import { LanguageSwitchProps } from "@/types/props"

/**
 * Logout Button
 * @returns {JSX.Element}
 */
export default function LogoutButton({ text, locale }: LanguageSwitchProps) {
    return (
        <>
            <button 
                className="bg-zinc-700 px-3 py-1.5 rounded-[6px] text-sm hover:bg-red-800"
                onClick={() => {
                    signOut()
                }}
            >
                {text}
            </button>
        </>
    )
}