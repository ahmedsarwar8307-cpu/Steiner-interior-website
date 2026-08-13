import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-[0.78rem] font-normal uppercase tracking-[0.16em] cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-transparent hover:bg-secondary",
        secondary: "bg-secondary text-secondary-foreground hover:bg-beige",
        ghost: "hover:bg-secondary",
        link: "text-primary underline-offset-4 hover:underline",
        /* Muted gold, the primary conversion action */
        gold: "bg-gold text-gold-foreground hover:brightness-105 shadow-soft",
        goldOutline:
          "border border-gold/60 bg-transparent text-gold hover:bg-gold hover:text-gold-foreground",
        /* For use over dark imagery */
        onImage:
          "border border-ivory/45 bg-ivory/10 text-ivory backdrop-blur-md hover:bg-ivory hover:text-charcoal",
        whatsapp: "bg-whatsapp text-whatsapp-foreground hover:brightness-105 shadow-soft",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-[0.7rem]",
        lg: "h-13 px-9",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
