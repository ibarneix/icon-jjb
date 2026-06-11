import Image from "next/image";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /**
   * - `full` : logo complet (`public/images/logo.png`) — navbar.
   * - `mark` : monogramme seul (`public/images/logo-mark.png`).
   * - `mark-text` : monogramme + texte HTML, pour le footer noir où un
   *   logo complet à texte sombre serait illisible.
   */
  variant?: "full" | "mark" | "mark-text";
}

/**
 * Logotype du club, entièrement piloté par deux PNG remplaçables sans
 * toucher au code : `logo.png` (version complète) et `logo-mark.png`
 * (monogramme carré, utilisé aussi comme favicon via `layout.tsx`).
 */
export function Logo({ className, variant = "full" }: LogoProps) {
  if (variant === "full") {
    return (
      <Image
        src="/images/logo.png"
        alt="Team Icon — Jiu-Jitsu Pays Basque"
        width={130}
        height={36}
        priority
        className={cn("h-9 w-auto", className)}
      />
    );
  }

  return (
    <span className={cn("flex items-center gap-3", className)}>
      <Image
        src="/images/logo-mark.png"
        alt={variant === "mark" ? "Team Icon — Jiu-Jitsu Pays Basque" : ""}
        width={36}
        height={36}
        className="size-9 shrink-0 drop-shadow-[0_4px_12px_rgba(234,88,12,0.35)]"
      />
      {variant === "mark-text" && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-bold tracking-widest uppercase">
            Team Icon
          </span>
          <span className="text-[0.65rem] font-medium tracking-[0.28em] uppercase opacity-65">
            Jiu-Jitsu Pays Basque
          </span>
        </span>
      )}
    </span>
  );
}
