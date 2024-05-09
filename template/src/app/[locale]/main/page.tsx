import Link from "next/link";
import { redirect } from "next/navigation";
import Image from "next/image";

import { getServerSession } from "next-auth";

import initTranslations from "../../i18n";

import { LanguageSwitch } from "@/components/language-switch";
import LogoutButton from "./logout_button";

import { Props } from "@/types/props";

/**
 * Home page
 * 
 * @param {Props} param0 
 * @returns {JSX.Element}
 */
export default async function Home({ params: { locale } }: Props) {
  // Load translations for the current locale.
  const { t } = await initTranslations(locale, ['home', 'common'])
  // Get user session
  const session = await getServerSession()

  // Check if user has session, if not redirect to login page
  if (!session) {
    redirect("/")
  }

  // Check if is the chosen user
  if (session.user?.email !== process.env.USER_INFO) {
    redirect("/")
  }

  return (
    <>
      <div className="h-screen flex flex-col gap-5 justify-center items-center relative">
        <div className="flex items-center gap-5 absolute top-[2%] right-[5%]">
          <div className="bg-white/30 w-fit flex items-center gap-2 px-4 py-2 rounded-[6px]">
            {session.user?.image && <Image src={session?.user?.image} alt="" width={40} height={40} className="rounded-full" />}
            <p>{session?.user?.name}</p>
          </div>
            <LogoutButton text={t("common:logout_button")} />
        </div>
        <h1 className="text-xl font-semibold tracking-wide">{t("header")}</h1>
        <p className="underline underline-offset-2 py-2 text-white/70">{t("common:example")}</p>
        {/* Instead of using a provider, pass the t function directly through props. */}
        <LanguageSwitch text={t("common:language_switch")} locale={locale} />
        <Link href={`/${locale}/second-page`} className="bg-zinc-800 py-2 px-4 rounded-[6px] hover:bg-zinc-900 transition-all">{t("button")}</Link>
      </div>
    </>
  );
}