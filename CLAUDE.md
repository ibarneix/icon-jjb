# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Projet

Site vitrine **Team Icon Jiu-Jitsu Pays Basque** (club de JJB/Grappling à Anglet,
iconjjb64.fr) : Next.js 16 (App Router, Turbopack), TypeScript strict,
Tailwind CSS v4, Framer Motion, Radix UI. One-page à ancres + page
`/mentions-legales`. **100 % statique** (toutes les routes prérendues) : pas de
backend, pas de cookies, pas de variables d'environnement. Tout le site est en
français — code commenté en français, réponses à l'utilisateur en français.

## Commandes

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production (télécharge les polices Google → réseau requis)
npm run lint     # ESLint (flat config)
```

Aucun framework de test n'est configuré — ne pas chercher de commande de test.

**Docker** (déploiement cible de l'utilisateur) : `docker compose up -d --build`
→ port 3000. Dockerfile multi-stage basé sur `output: "standalone"`
(next.config.ts — ne pas retirer cette option). `sharp` est embarqué :
l'optimiseur d'images Next fonctionne au runtime, y compris en conteneur.

Tester le build standalone localement :
```bash
cp -r public .next/standalone/ && cp -r .next/static .next/standalone/.next/
PORT=3100 node .next/standalone/server.js
```

## Architecture

**Contenu ↔ code strictement séparés.** Tout le contenu éditorial vit dans
`src/data/*.ts` (site.ts, schedule.ts, team.ts, locations.ts, disciplines.ts,
pricing.ts, values.ts, navigation.ts), typé par `src/lib/types.ts`. Les
composants (`src/components/{sections,layout,shared,ui}`) ne contiennent aucun
contenu : une modification éditoriale ne touche que `src/data/`.

**Thème** : variables CSS dans `src/app/globals.css` (`:root` + `@theme inline`,
config Tailwind v4 CSS-first — il n'y a pas de tailwind.config). Palette de
marque : **orange `#ea580c` (`--primary`) + noir `#1c1917` (`--accent`) sur fond
clair `#faf9f7`**. Pour du texte orange sur fond clair, utiliser
`text-primary-strong` (`#c2410c`, contraste AA) — `text-primary` est réservé aux
icônes/fonds/gros titres. Exception : le **footer est la seule zone sombre** du
site ; il n'utilise pas les variables du thème mais des couleurs explicites
(`bg-stone-950`, `text-stone-400`, `text-white`).

**Identité visuelle pilotée par 2 PNG** (l'utilisateur les remplace en écrasant
les fichiers, sans toucher au code — préserver ce contrat) :
- `public/images/logo.png` : logo complet → navbar (`Logo variant="full"`),
  `og:image` (layout.tsx) et JSON-LD.
- `public/images/logo-mark.png` : version carrée → favicon + icône Apple
  (déclarés via `metadata.icons` dans layout.tsx — il n'y a **pas** de fichier
  `app/icon.*`, ne pas en recréer), icône du manifest PWA, monogramme du footer
  (`variant="mark-text"`).

Les photos suivent le même contrat : `public/images/equipe/{id}.png` (référencées
dans `team.ts`) et `public/images/hero-grappling.png` (vraie photo 16:9 du club).
Toutes les images passent par `next/image`.

**Planning** (`src/data/schedule.ts`) : planning officiel Stella Maris
**saison 2025-2026**, tous les créneaux `confirmed: true` (une note « planning
indicatif » s'affiche automatiquement si un créneau passe à `false`). Règles
métier : le **seul** cours hors Stella Maris est le drill du **mardi 12h30–13h30
au Dojo Résilience** ; le style `"mixte"` (drill, roulade libre, coaching)
signifie Gi **et** No-Gi — `matchesFilter` le fait correspondre aux deux filtres
et le badge affiche « Gi & No-Gi ». Pas de filtre « Femmes » : aucun créneau
100 % féminin au planning officiel (les sections Disciplines/Équipe mentionnent
encore #FITGIRL — incohérence éditoriale connue, en attente d'arbitrage de
l'utilisateur).

**SEO** : Metadata API + JSON-LD `SportsActivityLocation`
(`components/seo/json-ld.tsx`), `sitemap.ts`, `robots.ts`, `manifest.ts`.
Accessibilité soignée partout : `prefers-reduced-motion` respecté (Reveal,
hero, schedule-board), Radix Dialog pour le menu mobile, `aria-pressed` sur les
filtres — maintenir ce niveau.

## Environnement Claude Code cloud (sandbox distante)

Constats vérifiés en session, utiles pour les prochaines :
- **Réseau en allowlist** : github.com, registre npm et Google Fonts passent ;
  iconjjb64.fr, Instagram, Unsplash/Wikimedia et le CDN Playwright sont bloqués
  (403 `host_not_allowed`). Impossible de télécharger des images externes ou un
  navigateur headless — générer les assets localement (`pip install cairosvg`
  fonctionne, rendu PNG + relecture via Read pour contrôle visuel).
- **Docker dans la sandbox** : lancer le démon à la main (`dockerd &`).
  Docker Hub est rate-limité → tirer les images via
  `mirror.gcr.io/library/<image>` puis `docker tag`. Le réseau bridge des
  conteneurs n'a pas d'egress et le TLS est intercepté : builder avec
  `--network=host` **et** injecter les CA de
  `/usr/local/share/ca-certificates/` dans le bundle système du conteneur
  (`cat ... >> /etc/ssl/certs/ca-certificates.crt`) via un Dockerfile
  temporaire **non commité** (Turbopack ignore `NODE_EXTRA_CA_CERTS`).
- L'utilisateur pousse parfois directement sur la branche (ses vraies images) :
  en cas de push rejeté, `git fetch` + `git rebase` — ne jamais écraser ses
  fichiers binaires.
