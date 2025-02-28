import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const backGroundVariants = cva("z--10 absolute inset-0 h-full w-full", {
  variants: {
    variant: {
      grid: "bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)]",
    },
    mask: {
      rounded:
        "[mask-image:radial-gradient(ellipse_at_center,hsl(var(--background))_30%,transparent)]",
      toTop:
        "[mask-image:linear-gradient(to_bottom,hsl(var(--background)),transparent)]",
      toBottom:
        "[mask-image:linear-gradient(to_bottom,transparent,hsl(var(--background)))]",
      topBottom:
        "[mask-image:linear-gradient(to_bottom,transparent,hsl(var(--background)),transparent)]",
    },
    size: {
      sm: "bg-[size:24px_24px]",
      md: "bg-[size:28px_28px]",
      lg: "bg-[size:32px_32px]",
    },
  },
  defaultVariants: {
    variant: "grid",
    mask: "topBottom",
    size: "sm",
  },
});

interface BackGroundProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof backGroundVariants> {}

const BackGround = React.forwardRef<HTMLDivElement, BackGroundProps>(
  ({ className, mask, size, ...props }, ref) => {
    return (
      <div
        className={cn(backGroundVariants({ mask, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
BackGround.displayName = "BackGround";

export { BackGround };
