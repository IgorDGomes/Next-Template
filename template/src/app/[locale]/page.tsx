import Link from "next/link";

import initTranslations from "../i18n";

import { Props } from "@/types/props";
import { LanguageSwitch } from "@/components/language-switch";

/**
 * Home page.
 * 
 * @param {Props} param0 
 * @returns {JSX.Element}
 */
export default async function Home({ params: { locale } }: Props) {
  // Load translations for the current locale.
  const { t } = await initTranslations(locale, ['home', 'common'])

  return (
      <div className="h-screen flex flex-col gap-5 justify-center items-center">
        <h1 className="text-xl font-semibold tracking-wide">{t("header")}</h1>
        <p className="underline underline-offset-2 py-2 text-white/70">{t("common:example")}</p>
        {/* Instead of using a provider, pass the t function directly through props. */}
        <LanguageSwitch text={t("common:example")} locale={locale} />
        <Link href={`/${locale}/second-page`} className="bg-zinc-800 py-2 px-4 rounded-md hover:bg-zinc-900 transition-all">{t("button")}</Link>
      </div>
  );
}
