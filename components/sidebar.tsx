"use client";

import { icons } from "lucide-react";
import React from "react";
import { cn } from "~/lib/utils";
import { Icon } from "./icons";
import { Button, ButtonLink } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "min-h-screen overflow-x-hidden overflow-y-scroll",
        className
      )}
    >
      <div className="flex flex-col space-y-4 pb-3 pt-6">
        <div className="flex-1 place-content-start space-y-1 px-3 py-2">
          <SingleMenu href="/dashboard" iconName="Home" title="Beranda" />
          <SingleMenu
            href="/dashboard/transactions"
            iconName="LayoutTemplate"
            title="Transaksi"
          />
          <MultiMenu iconName="Table" title="Table" />
        </div>
      </div>
    </div>
  );
}

function SingleMenu({
  href,
  title,
  iconName,
}: {
  href: string;
  title: string;
  iconName: keyof typeof icons;
}) {
  return (
    <ButtonLink
      href={href}
      variant="ghost"
      className="w-full justify-start text-xs"
    >
      <Icon name={iconName} className="mr-3 h-5 w-5" strokeWidth={2.1} />
      {title}
    </ButtonLink>
  );
}

function MultiMenu({
  title,
  iconName,
}: {
  title: string;
  iconName: keyof typeof icons;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item" className="border-none">
        <AccordionTrigger className="p-0" withoutIcon>
          <Button
            asChild
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full justify-start text-xs"
          >
            <div
              data-state={isOpen ? "open" : "closed"}
              className="flex items-center justify-between [&[data-state=open]>svg]:rotate-180"
            >
              <div className="flex items-center">
                <Icon
                  name={iconName}
                  className="mr-3 h-5 w-5"
                  strokeWidth={2.1}
                />
                {title}
              </div>
              <Icon
                name="ChevronDown"
                className="text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200"
              />
            </div>
          </Button>
        </AccordionTrigger>
        <AccordionContent className="relative flex h-full p-0 px-4">
          <div className="bg-primary absolute top-0 z-10 ml-[9px] h-full w-[1px]"></div>
          <div className="w-full">
            <ButtonLink
              href="/dashboard/table"
              variant="ghost"
              size="sm"
              className="w-full justify-start pl-8 text-xs"
            >
              list
            </ButtonLink>
            <ButtonLink
              href="/dashboard/table"
              variant="ghost"
              size="sm"
              className="w-full justify-start pl-8 text-xs"
            >
              list
            </ButtonLink>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export { Sidebar };
