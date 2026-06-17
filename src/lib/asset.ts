/**
 * Préfixe de déploiement pour les fichiers de `public/`.
 *
 * Vide par défaut (Docker/Vercel, site servi à la racine). En export
 * statique sous-chemin (GitHub Pages), vaut `/icon-jjb` via
 * `NEXT_PUBLIC_BASE_PATH`, inliné au build dans les bundles client.
 *
 * `next/link` applique déjà le `basePath` automatiquement ; en revanche
 * `next/image` et les chemins de métadonnées (favicon, manifest) ne le
 * font PAS en export statique → on préfixe ces `src` à la main avec `asset()`.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Préfixe un chemin absolu de `public/` (ex. `/images/logo.png`). */
export function asset(path: string): string {
  return `${basePath}${path}`;
}
