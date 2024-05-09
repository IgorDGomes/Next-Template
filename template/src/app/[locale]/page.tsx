import { redirect } from "next/navigation";

import { getServerSession } from "next-auth";

import GithubLoginButton from "@/components/github_login_button";
import GoogleLoginButton from "@/components/google_login_button";

/**
 * Login page.
 * 
 * @param param0 
 * @returns {JSX.Element}
 */
export default async function Login() {
  const session = await getServerSession()

  // If the user is already logged in, doens't allow going back to the login page.
  if (session?.user?.email) {
    redirect("/main")
  }

  return (
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col gap-2 justify-center items-center w-[350px] h-[400px] bg-white/80 mx-auto rounded-[10px] py-14">
          <GithubLoginButton />
          <GoogleLoginButton />
        </div>
      </div>
  );
}
