"use client"

import { LanguageSwitchProps } from "@/types/props"
import { useRouter } from "next/navigation"

import { ChangeEvent } from "react"

/**
 * Language Switch component.
 * Allows users to choose their language.
 * 
 * @param {LanguageSwitchProps} param0 
 * @returns {JSX.Element}
 */
export function LanguageSwitch({ text, locale }: LanguageSwitchProps) {
    const router = useRouter()

    /**
     * Handles the change event of the select element.
     * @param {ChangeEvent<HTMLSelectElement>} e 
     */
    function handleChange(e: ChangeEvent<HTMLSelectElement>) {
        const selectedLang = e.target.value
        router.push(`/${selectedLang}/main`)
    }

    return (
        <div className="flex justify-center">
            <select 
                name="lang" 
                id="lang" 
                className="text-black py-1.5 px-4 rounded-[6px] appearance-none hover:cursor-pointer outline-none" 
                onChange={handleChange}
                defaultValue={""}
            >
                <option value="" disabled>{text}</option>
                <option value="en">English</option>
                <option value="pt">Português</option>
                <option value="es">Español</option>
                <option value="ro">Română</option>
                <option value="de">Deutsch</option>
                <option value="jp">日本語</option>
            </select>
        </div>
    )
}