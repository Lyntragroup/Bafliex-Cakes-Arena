import React from "react";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark";
  compact?: boolean;
  priority?: boolean;
}

/** Uses the supplied official Bafliex Cakes Arena artwork. */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "h-12 w-auto",
  variant = "light",
  compact = false,
  priority = false,
}) => (
  <div
    className={`${compact ? "aspect-square" : ""} inline-flex items-center justify-center ${variant === "dark" ? "bg-white rounded-xl px-2 py-1" : ""}`}
  >
    <img
      src={compact ? "/images/bafliex-logo-compact.webp" : "/images/bafliex-logo.webp"}
      width={compact ? 300 : 620}
      height={compact ? 186 : 425}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      alt="Bafliex Cakes Arena — A Taste of Heaven"
      className={`${className} object-contain ${compact ? "p-1" : ""}`}
    />
  </div>
);

export default BrandLogo;
