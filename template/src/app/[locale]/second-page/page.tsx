import Link from "next/link";

import initTranslations from "@/app/i18n";

import { Props } from "@/types/props";

/**
 * Secondary page.
 * 
 * @param {Props} param0 
 * @returns {JSX.Element}
 */
export default async function Page({ params: { locale } }: Props) {
    // Initialize translations.
    const { t } = await initTranslations(locale, ['second-page', 'common'])

    return (
        <div className="h-screen flex flex-col gap-5 justify-center items-center">
            <h1 className="text-xl font-semibold tracking-wide">{t("header")}</h1>
            <p className="underline underline-offset-2 py-2 text-white/70">{t("common:example")}</p>
            <Link href={`/${locale}`} className="bg-zinc-800 py-2 px-4 rounded-md hover:bg-zinc-900 transition-all">{t("button")}</Link>
        </div>
    )
}