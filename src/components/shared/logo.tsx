import Image from "next/image";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Masque le texte pour ne garder que le monogramme. */
  compact?: boolean;
}

/**
 * Logotype du club : monogramme orange ceinturé de noir + wordmark.
 * Le monogramme est un PNG (`public/images/logo-mark.png`) : remplacez ce
 * fichier par le logo officiel sans toucher au layout. Le texte hérite de
 * la couleur ambiante (lisible sur fond clair comme sur le footer noir).
 */
export function Logo({ className, compact = false }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <Image
        src="/images/logo-mark.png"
        alt=""
        width={36}
        height={36}
        className="size-9 shrink-0 drop-shadow-[0_4px_12px_rgba(234,88,12,0.35)]"
      />
      {!compact && (
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
