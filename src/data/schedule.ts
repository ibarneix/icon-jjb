import type { ScheduleEntry, ScheduleFilter, Weekday } from "@/lib/types";

/** Ordre d'affichage des jours dans le tableau des horaires. */
export const weekdays: Weekday[] = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];

/** Filtres affichés au-dessus du tableau des horaires. */
export const scheduleFilters: { id: ScheduleFilter; label: string }[] = [
  { id: "tous", label: "Tous les cours" },
  { id: "enfants", label: "Enfants" },
  { id: "adultes", label: "Adultes" },
  { id: "gi", label: "Gi" },
  { id: "nogi", label: "No-Gi" },
];

/**
 * Planning officiel Stella Maris — saison 2025-2026.
 *
 * Tous les cours ont lieu au gymnase Stella Maris, sauf le drill du mardi
 * midi (Dojo Résilience). Le coaching privé / small group du mardi
 * après-midi se fait sur rendez-vous (sans horaire fixe) et n'apparaît
 * donc pas dans la grille.
 */
export const schedule: ScheduleEntry[] = [
  // ── Lundi ─────────────────────────────────────────────────
  {
    id: "lun-kids2",
    day: "Lundi",
    start: "17:30",
    end: "18:30",
    title: "JJB Enfants — Kids 2",
    audiences: ["enfants"],
    style: "gi",
    locationId: "stella-maris",
    confirmed: true,
  },
  {
    id: "lun-jjb-fondamentaux",
    day: "Lundi",
    start: "18:30",
    end: "19:30",
    title: "JJB Adultes — Fondamentaux",
    audiences: ["adultes"],
    style: "gi",
    locationId: "stella-maris",
    confirmed: true,
  },
  {
    id: "lun-jjb-adultes",
    day: "Lundi",
    start: "19:30",
    end: "20:30",
    title: "JJB Adultes — Tous niveaux",
    audiences: ["adultes"],
    style: "gi",
    locationId: "stella-maris",
    confirmed: true,
  },

  // ── Mardi ─────────────────────────────────────────────────
  {
    id: "mar-drill-midi",
    day: "Mardi",
    start: "12:30",
    end: "13:30",
    title: "Drill JJB & No-Gi — Tous niveaux",
    audiences: ["adultes"],
    style: "mixte",
    locationId: "resilience",
    note: "Cours du midi",
    confirmed: true,
  },
  {
    id: "mar-jjb-adultes",
    day: "Mardi",
    start: "18:30",
    end: "19:30",
    title: "JJB Adultes — Tous niveaux",
    audiences: ["adultes"],
    style: "gi",
    locationId: "stella-maris",
    confirmed: true,
  },
  {
    id: "mar-nogi-adultes",
    day: "Mardi",
    start: "19:30",
    end: "20:45",
    title: "No-Gi Adultes",
    audiences: ["adultes"],
    style: "nogi",
    locationId: "stella-maris",
    confirmed: true,
  },

  // ── Mercredi ──────────────────────────────────────────────
  {
    id: "mer-jjb-midi",
    day: "Mercredi",
    start: "12:30",
    end: "13:45",
    title: "JJB Adultes — Tous niveaux",
    audiences: ["adultes"],
    style: "gi",
    locationId: "stella-maris",
    note: "Cours du midi",
    confirmed: true,
  },
  {
    id: "mer-kids1-debutant",
    day: "Mercredi",
    start: "15:00",
    end: "15:45",
    title: "JJB Enfants — Kids 1 débutant",
    audiences: ["enfants"],
    style: "gi",
    locationId: "stella-maris",
    confirmed: true,
  },
  {
    id: "mer-kids1-avance",
    day: "Mercredi",
    start: "16:00",
    end: "16:45",
    title: "JJB Enfants — Kids 1 avancé",
    audiences: ["enfants"],
    style: "gi",
    locationId: "stella-maris",
    confirmed: true,
  },
  {
    id: "mer-kids2",
    day: "Mercredi",
    start: "17:00",
    end: "18:00",
    title: "JJB Enfants — Kids 2",
    audiences: ["enfants"],
    style: "gi",
    locationId: "stella-maris",
    confirmed: true,
  },

  // ── Jeudi ─────────────────────────────────────────────────
  {
    id: "jeu-jjb-adultes",
    day: "Jeudi",
    start: "18:30",
    end: "19:30",
    title: "JJB Adultes — Tous niveaux",
    audiences: ["adultes"],
    style: "gi",
    locationId: "stella-maris",
    confirmed: true,
  },
  {
    id: "jeu-nogi-adultes",
    day: "Jeudi",
    start: "19:30",
    end: "20:45",
    title: "No-Gi Adultes",
    audiences: ["adultes"],
    style: "nogi",
    locationId: "stella-maris",
    confirmed: true,
  },

  // ── Vendredi ──────────────────────────────────────────────
  {
    id: "ven-jjb-midi",
    day: "Vendredi",
    start: "12:30",
    end: "13:30",
    title: "JJB Adultes — Tous niveaux",
    audiences: ["adultes"],
    style: "gi",
    locationId: "stella-maris",
    note: "Cours du midi",
    confirmed: true,
  },
  {
    id: "ven-coaching",
    day: "Vendredi",
    start: "18:30",
    end: "19:30",
    title: "Coaching privé / Small group",
    audiences: ["adultes"],
    style: "mixte",
    locationId: "stella-maris",
    note: "Coaching individuel ou en petit groupe",
    confirmed: true,
  },

  // ── Samedi ────────────────────────────────────────────────
  {
    id: "sam-kids1-debutant",
    day: "Samedi",
    start: "09:00",
    end: "09:45",
    title: "JJB Enfants — Kids 1 débutant",
    audiences: ["enfants"],
    style: "gi",
    locationId: "stella-maris",
    confirmed: true,
  },
  {
    id: "sam-kids1-avance",
    day: "Samedi",
    start: "10:00",
    end: "10:45",
    title: "JJB Enfants — Kids 1 avancé",
    audiences: ["enfants"],
    style: "gi",
    locationId: "stella-maris",
    confirmed: true,
  },
  {
    id: "sam-kids2",
    day: "Samedi",
    start: "11:00",
    end: "12:00",
    title: "JJB Enfants — Kids 2",
    audiences: ["enfants"],
    style: "gi",
    locationId: "stella-maris",
    confirmed: true,
  },
  {
    id: "sam-roulade-libre",
    day: "Samedi",
    start: "12:30",
    end: "14:00",
    title: "Roulade libre JJB & No-Gi — Adultes",
    audiences: ["adultes"],
    style: "mixte",
    locationId: "stella-maris",
    note: "Sparring libre (open mat)",
    confirmed: true,
  },
];

/** Prédicat de filtrage du planning. */
export function matchesFilter(
  entry: ScheduleEntry,
  filter: ScheduleFilter,
): boolean {
  if (filter === "tous") return true;
  if (filter === "gi" || filter === "nogi") {
    // Les cours mixtes (drill, roulade libre) relèvent du Gi ET du No-Gi.
    return entry.style === filter || entry.style === "mixte";
  }
  return entry.audiences.includes(filter);
}
