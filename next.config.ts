import type { NextConfig } from "next";

/**
 * Deux cibles de build pilotées par des variables d'environnement :
 *
 * - **Docker / Vercel** (défaut) : `output: "standalone"`, serveur Node,
 *   optimisation d'images Next active.
 * - **GitHub Pages** (`NEXT_OUTPUT=export`) : export 100 % statique dans
 *   `out/`. GitHub Pages sert le site sous un sous-chemin
 *   (`/icon-jjb`) → `basePath`, et il n'y a aucun serveur pour optimiser
 *   les images → `images.unoptimized`. `trailingSlash` garantit un
 *   `index.html` par route, servi de façon fiable par Pages.
 *
 * Le `basePath` est exposé au client via `NEXT_PUBLIC_BASE_PATH` (voir
 * `src/lib/asset.ts`) car `next/image` n'applique pas le `basePath` aux
 * `src` automatiquement en export statique.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig =
  process.env.NEXT_OUTPUT === "export"
    ? {
        output: "export",
        basePath,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {
        output: "standalone",
      };

export default nextConfig;
