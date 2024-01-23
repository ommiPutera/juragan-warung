"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { buttonVariants } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { cn } from "~/lib/utils";
import { userAuthSchema } from "~/lib/validations/auth";
import { Icon } from "./icons";
import { Checkbox } from "./ui/checkbox";
import Link from "next/link";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

type FormData = z.infer<typeof userAuthSchema>;

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [companyId, email, password] = watch(['companyId', 'email', 'password'])

  async function onSubmit(data: FormData) {
    console.log("data: ", data);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-8">
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="id-login">
                ID Perusahaan
              </Label>
              <Input
                id="id-login"
                placeholder="Ketik ID Perusahaan"
                type="text"
                autoCapitalize="none"
                autoComplete="companyId"
                autoCorrect="off"
                disabled={isLoading}
                {...register("companyId")}
              />
              {errors?.companyId && (
                <p className="px-1 text-xs text-red-600">
                  {errors.companyId.message}
                </p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email-login">
                Email
              </Label>
              <Input
                id="email-login"
                placeholder="Ketik Email Anda"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
                {...register("email")}
              />
              {errors?.email && (
                <p className="px-1 text-xs text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password-login">
                Kata Sandi
              </Label>
              <Input
                id="password-login"
                placeholder="Ketik Kata Sandi"
                type="password"
                autoCapitalize="none"
                autoComplete="password"
                autoCorrect="off"
                disabled={isLoading}
                {...register("password")}
              />
              {errors?.password && (
                <p className="px-1 text-xs text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms2" />
                <label
                  htmlFor="terms2"
                  className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Ingat Saya
                </label>
              </div>
              <Link href="/wow" className="underline text-sm">
                Lupa Kata Sandi?
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <button
              className={cn(buttonVariants())}
              disabled={isLoading || (!companyId || !email || !password)}
            >
              {isLoading && (
                <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
              )}
              Selanjutnya
            </button>
            <button type="button" className={cn(buttonVariants({ variant: 'plain' }))}>
              Lupa ID?
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
