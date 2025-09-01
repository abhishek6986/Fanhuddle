import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 text-black font-bold hover:shadow-elegant hover:scale-105",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-gradient bg-transparent text-white hover:bg-gradient-to-r hover:from-purple-300 hover:via-pink-300 hover:to-orange-300 hover:text-black",
        secondary:
          "bg-gradient-to-r from-purple-300/20 via-pink-300/20 to-orange-300/20 text-white border border-purple-300/30 backdrop-blur-sm hover:bg-gradient-to-r hover:from-purple-300 hover:via-pink-300 hover:to-orange-300 hover:text-black",
        ghost: "hover:bg-gradient-to-r hover:from-purple-300/20 hover:via-pink-300/20 hover:to-orange-300/20 hover:text-white",
        link: "text-purple-200 underline-offset-4 hover:underline",
        cta: "bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 text-black font-bold hover:shadow-elegant hover:scale-105 px-8 py-4 text-base",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-full px-4",
        lg: "h-14 rounded-full px-10",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
