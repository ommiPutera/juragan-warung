import { MantineProvider } from "@mantine/core";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";

import "~/styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [
    {
      name: "dipay",
      url: "https://dipay.id",
    },
  ],
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          href="/favicons/apple-touch-icon.png"
          sizes="180x180"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicons/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicons/favicon-32x32.png"
          sizes="32x32"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
