# Team Icon Jiu-Jitsu Pays Basque — Site vitrine

Refonte intégrale du site [iconjjb64.fr](https://www.iconjjb64.fr) : académie de
Jiu-Jitsu Brésilien et de Grappling à Anglet (64), Pays Basque.

## Stack

| Brique | Choix |
| --- | --- |
| Framework | **Next.js 16** (App Router, pages 100 % statiques) |
| Langage | **TypeScript** (mode `strict`) |
| Styles | **Tailwind CSS v4** (config CSS-first via `@theme`, mobile-first) |
| Composants | Primitives style **shadcn/ui** sur **Radix UI** (Dialog, Slot) |
| Animations | **Framer Motion** (reveal au scroll, micro-interactions, `prefers-reduced-motion` respecté) |
| Icônes | lucide-react (+ SVG inline pour les marques Instagram/Facebook) |
| Polices | Oswald (display) & Inter (texte) via `next/font` — zéro layout shift |
| SEO | Metadata API, JSON-LD `SportsActivityLocation`, `sitemap.xml`, `robots.txt`, manifest PWA |

Aucune dépendance superflue, aucun cookie, aucun tracker : le site est
prérendu statiquement, taillé pour un score Lighthouse maximal.

## Démarrage

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # build de production
npm run lint   # ESLint
```

## Déploiement sur Vercel

Le projet se déploie tel quel : importez le dépôt sur Vercel, sans aucune
configuration particulière (le projet est à la racine du dépôt). Aucune
variable d'environnement n'est requise.

## Déploiement avec Docker

```bash
git clone <url-du-dépôt> && cd icon-jjb
docker compose up -d --build   # http://localhost:3000
```

Le build s'effectue entièrement dans l'image (multi-stage, sortie
`standalone` de Next.js) : Node.js n'est pas requis sur l'hôte. Le site
écoute sur le port 3000 (modifiable dans `docker-compose.yml`).

## Architecture

```
src/
├── app/                    # Pages (App Router) + SEO
│   ├── layout.tsx          # Layout global : polices, metadata, Navbar/Footer, JSON-LD
│   ├── page.tsx            # Accueil (one-page à ancres)
│   ├── mentions-legales/   # Page légale (LCEN)
│   ├── sitemap.ts robots.ts manifest.ts icon.svg
│   └── globals.css         # Thème : variables CSS orange/noir sur fond clair (@theme)
├── components/
│   ├── ui/                 # Primitives shadcn-style : Button, Badge, Card
│   ├── layout/             # Navbar (menu mobile Radix Dialog), Footer
│   ├── sections/           # Hero, Quote, Values, Disciplines, Team,
│   │                       # Schedule (+ ScheduleBoard filtrable),
│   │                       # TrainingCenters, Pricing, Contact
│   ├── shared/             # Reveal (Framer), SectionHeading, FeatureBlock,
│   │                       # TeacherCard, Logo, icônes sociales
│   └── seo/                # JSON-LD Schema.org
├── data/                   # ✏️ TOUT le contenu éditorial, typé
│   ├── site.ts             # Identité, contact, réseaux, HelloAsso, RNA
│   ├── navigation.ts       # Entrées du menu
│   ├── values.ts           # « Pourquoi nous rejoindre ? »
│   ├── team.ts             # Équipe technique (bios, palmarès)
│   ├── disciplines.ts      # JJB Gi / Grappling-Lutte / Self-défense #FITGIRL
│   ├── schedule.ts         # Planning hebdomadaire filtrable
│   ├── locations.ts        # Dojos (Stella Maris, Résilience) + cartes
│   └── pricing.ts          # Adhésion (licence CFJJB, passeport, famille…)
└── lib/                    # utils (cn) + types métier partagés
```

Tout le contenu se modifie dans `src/data/` sans toucher aux composants.

## ⚠️ À faire avant la mise en production

1. **Horaires** (`src/data/schedule.ts`) : le planning officiel Stella Maris
   **saison 2025-2026** est intégré (tous les créneaux `confirmed: true`).
   Seul le drill du mardi 12h30–13h30 a lieu au Dojo Résilience. Le coaching
   privé / small group du mardi après-midi est sur rendez-vous (sans horaire
   fixe) et n'apparaît pas dans la grille — celui du vendredi 18h30–19h30 y
   figure.
2. **Photos** : des portraits de remplacement (PNG) sont en place dans
   `public/images/equipe/`. Écrasez simplement chaque fichier par la vraie
   photo du professeur, en conservant le même nom (`ze-marcello.png`,
   `anderson-pereira.png`, `juliana-calabria.png`) — aucun code à modifier.
   Même chose pour l'illustration du hero (`public/images/hero-grappling.png`)
   si vous préférez une photo de tatami.
3. **Logo officiel** : deux fichiers pilotent tout, écrasez-les en gardant
   les mêmes noms. `public/images/logo.png` : logo complet affiché dans la
   navbar (et image de partage/SEO). `public/images/logo-mark.png` : version
   carrée utilisée comme favicon, icône PWA et monogramme du footer.
4. **Mentions légales** : vérifiez le siège social exact de l'association.

## Contenu intégré (source : iconjjb64.fr & HelloAsso)

- Hero, intro et citation d'Helio Gracie
- 5 valeurs pédagogiques (« Pourquoi nous rejoindre ? »)
- Équipe : Maître Zé Marcello (CN 6ᵉ degré, fondateur ICON), Maître Anderson
  Pereira (référent France), Juliana Calabria (responsable Pays Basque)
- Disciplines : JJB Gi, Grappling/Lutte No-Gi, Self-Défense Féminine #FITGIRL
- Training Center : Gymnase Stella Maris (dojo principal, bâtiment 2022,
  tatamis chauffés, parking gratuit) & Dojo Résilience (mardi midi)
- Adhésion : licence CFJJB 41 € incluse, passeport sportif 25 €/10 ans,
  réduction famille (−20 €/−30 €), paiement 1×/3×/mensuel via HelloAsso
- Contact : 06 74 65 19 59 (Gaël Obert / Juliana), contact@iconjjb64.fr,
  Instagram @iconjjb64, Facebook
