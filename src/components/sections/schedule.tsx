import { SectionHeading } from "@/components/shared/section-heading";
import { ScheduleBoard } from "@/components/sections/schedule-board";

/** Section « Horaires » : planning hebdomadaire filtrable, 6 jours sur 7. */
export function Schedule() {
  return (
    <section id="horaires" className="scroll-mt-24 border-y border-border bg-card/30">
      <div className="container-site py-20 md:py-28">
        <SectionHeading
          eyebrow="Planning — Saison 2025-2026"
          title="Tableau des horaires"
          description="Des cours 6 jours sur 7, pour toutes et tous : enfants (Kids 1 & 2), adultes, Gi, No-Gi, drill et roulade libre. Filtrez pour trouver le vôtre."
        />
        <ScheduleBoard />
      </div>
    </section>
  );
}
