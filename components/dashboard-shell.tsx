"use client";

import { PanelLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import { Sidebar } from "./sidebar";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useMediaQuery } from "~/hooks/use-media-query";

interface AppShellProps {
  children: React.ReactNode;
}

function AppShell({ children }: AppShellProps) {
  const isAuthenticated = false;

  if (!isAuthenticated) return <>{children}</>;
  return <Shell>{children}</Shell>;
}

function Shell({ children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="bg-background h-full">
      <div className="flex">
        <div className="border-border fixed z-50 hidden h-full w-fit max-w-[var(--sidebar-width)] overflow-scroll border-r md:block">
          <Sidebar />
        </div>
        <div className="relative h-full w-full md:ml-auto md:w-[calc(100%_-_var(--sidebar-width))]">
          <div className="relative h-full w-full">
            <div className="border-border bg-background fixed top-0 z-20 mx-auto flex h-[var(--header-height)] w-full max-w-screen-2xl items-center justify-between border-b py-3 pl-6 pr-4 md:relative md:border-0 md:bg-transparent">
              <MobileSidebar />
            </div>
            <div className="mx-auto mt-[var(--header-height)] max-w-screen-2xl px-4 py-6 md:mt-0 md:py-0">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileSidebar() {
  const pathname = usePathname();
  const mobile = useMediaQuery("(max-width: 425px)");
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (pathname) {
      setIsOpen(false);
    }
  }, [pathname]);

  if (!mobile) return <></>;
  return (
    <div className="block md:hidden">
      <Sheet open={isOpen} key="testtt">
        <SheetTrigger asChild>
          <Button size="icon" variant="ghost" onClick={() => setIsOpen(true)}>
            <PanelLeft />
          </Button>
        </SheetTrigger>
        <SheetContent
          onClose={() => setIsOpen(false)}
          side="left"
          className="no-scrollbar w-[calc(1rem_+_var(--sidebar-width))] overflow-y-scroll px-2 pb-8"
        >
          <SheetHeader>
            <SheetTitle className="px-7 text-left">Menu</SheetTitle>
          </SheetHeader>
          <Sidebar />
          <div className="fixed right-0 top-0 h-screen w-[calc(100%_-_var(--sidebar-width))] md:hidden" />
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default AppShell;
