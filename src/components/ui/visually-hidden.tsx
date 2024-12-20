// src/components/ui/visually-hidden.tsx
import { cn } from "@/utils/cn";

interface VisuallyHiddenProps {
    children: React.ReactNode;
    className?: string;
}

export function VisuallyHidden({ children, className }: VisuallyHiddenProps) {
    return (
        <span
            className={cn(
                "absolute w-[1px] h-[1px] p-0 -m-[1px] overflow-hidden whitespace-nowrap border-0",
                "[clip:rect(0,0,0,0)]",
                className
            )}
        >
      {children}
    </span>
    );
}