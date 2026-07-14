"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface AvatarProps {
  src?: string | null;
  name: string;
  size?: "sm" | "md" | "lg" | number;
  className?: string;
  alt?: string;
}

const sizeClasses: Record<"sm" | "md" | "lg", string> = {
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-12 h-12 text-base",
};

function getInitial(name: string) {
  const firstPart = name.split(" ").find((part) => part.trim().length > 0);
  return firstPart ? firstPart[0].toUpperCase() : "?";
}

export default function Avatar({
  src,
  name,
  size = "md",
  className,
  alt,
  ...props
}: AvatarProps) {
  const [hasError, setHasError] = useState(false);
  const showFallback = !src || hasError;
  const initial = getInitial(name);
  const sizeClass = typeof size === "string" ? sizeClasses[size] : undefined;
  const sizeStyle = typeof size === "number" ? { width: size, height: size } : undefined;

  return (
    <div
      className={cn(
        "rounded-full bg-red-50 border border-red-100 text-red-700 font-bold uppercase overflow-hidden flex items-center justify-center",
        sizeClass,
        className,
      )}
      style={sizeStyle}
      {...props}
    >
      {showFallback ? (
        <span className="select-none">{initial}</span>
      ) : (
        <img
          src={src!}
          alt={alt ?? name}
          className="w-full h-full object-cover"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
