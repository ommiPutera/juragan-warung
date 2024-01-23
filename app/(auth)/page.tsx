import { Metadata } from "next";
import Link from "next/link";

import { redirect } from "next/navigation";
import { Logo } from "~/components/logo";
import { UserAuthForm } from "~/components/user-auth-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

function LoginPage() {
  const isAuthenticated = false;

  if (isAuthenticated) redirect("/dashboard");
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-between gap-20">
      <div className="mx-auto flex w-full flex-col justify-center sm:w-[350px] mt-16">
        <div className="flex flex-col gap-8 items-center text-center">
          <Logo />
          <div className="max-w-[360px] flex flex-col gap-3 justify-center items-center">
            <h1 className="max-w-[200px] text-2xl font-bold tracking-tight">
              Selamat Datang di Dipay Partner
            </h1>
            <p className="text-grey-500 text-sm">
              Dasbor dirancang untuk memantau dengan cermat setiap transaksi yang terjadi di platform mitra
            </p>
          </div>
        </div>
        <hr className="my-8 border-black-alpha-10" />
        <UserAuthForm />
      </div>
      <div className="max-w-[500px] text-center pb-8">
        <p className="text-grey-500 text-sm">
          Dengan melanjutkan, saya menyetujui syarat & ketentuan penggunaan Dipay Partner Dashboard
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
