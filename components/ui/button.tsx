import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "~/lib/utils";
import { AnchorOrLink } from "~/utils/misc";

// primary
// secondary
// tertiary
// plain
// danger
// destructive
// dashed

const variants = {
  primary: cn("text-white bg-input-primary"),
  secondary: cn("text-grey-950 hover:bg-grey-50 active:bg-grey-100 bg-input-secondary"),
  tertiary: cn("text-grey-950 hover:bg-black-alpha-10 active:bg-black-alpha-15 bg-input-tertiary"),
  plain: cn("text-grey-950 hover:bg-black-alpha-5 active:bg-black-alpha-10 bg-input-plain"),
  danger: cn("text-input-error hover:bg-grey-50 bg-input-danger"),
  destructive: cn("text-white bg-input-destructive"),
  dashed: cn("hover:bg-black-alpha-5 active:bg-black-alpha-10 text-grey-950 bg-input-dashed")
};

const sizes = {
  lg: "h-11 md:h-9 px-4 rounded-lg text-sm",
  md: "h-10 md:h-8 px-3 rounded-md text-sm",
  sm: "h-8 md:h-6 px-2 rounded-md text-xs",
  icon: 'h-8 w-8 rounded-sm hover:[&:has(svg)]:before:rounded-full hover:[&:has(svg)]:before:content-[""] hover:[&:has(svg)]:before:absolute hover:[&:has(svg)]:before:z-[0] hover:[&:has(svg)]:before:w-7 hover:[&:has(svg)]:before:h-7',
  "icon-sm": "h-5 w-5",
};

const buttonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap font-medium radial-input transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:bg-white disabled:text-disabled",
  {
    variants: {
      variant: { ...variants },
      size: { ...sizes },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
);
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

/**
 * A button that looks like a link
 */
const ButtonLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithRef<typeof AnchorOrLink> & ButtonProps
>(function ButtonLink({ children, ...props }, ref) {
  const { variant, size } = props;
  return (
    <Button asChild variant={variant} size={size} className={props.className}>
      <AnchorOrLink ref={ref} {...props}>
        {children}
      </AnchorOrLink>
    </Button>
  );
});

export { Button, ButtonLink, buttonVariants };
