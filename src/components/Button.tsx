import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  variant?: "primary" | "secondary" | "dark" | "yellow" | "slate" | "ghost";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  href?: string;
  target?: string;
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
  className = "",
  disabled = false,
  href,
  target = "_self",
}) => {
  const _className = cn(
    "group flex items-center justify-center rounded-full px-6 py-3 font-medium transition-all duration-300 ease-in-out",
    {
      "border border-transparent bg-[#F2FF46] text-black hover:border-black hover:bg-white active:border-black active:bg-white":
        variant === "primary",
      "gap-2 border border-black text-black hover:border-transparent hover:bg-[#F2FF46] active:border-transparent active:bg-[#F2FF46]":
        variant === "secondary",
      "bg-[#1e1e1e] text-white hover:bg-[#f2ff46] hover:text-[#1e1e1e] active:bg-[#f2ff46] active:text-[#1e1e1e]":
        variant === "dark",
      "bg-black text-white hover:bg-[#667085] active:bg-[#667085]":
        variant === "slate",
      "border border-gray-600 text-white hover:border-[#F2FF46] hover:bg-[#F2FF46] hover:text-black active:border-[#F2FF46] active:bg-[#F2FF46] active:text-black":
        variant === "ghost",
      "pointer-events-none opacity-50": disabled,
    },
    className
  );

  if (href) {
    return (
      <Link href={href} target={target} className={_className}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={_className}>
      {children}
    </button>
  );
};

export default Button;
