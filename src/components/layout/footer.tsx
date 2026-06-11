import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { locations } from "@/data/locations";
import {
  FacebookIcon,
  InstagramIcon,
} from "@/components/shared/social-icons";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";
import { Logo } from "@/components/shared/logo";

/**
 * Pied de page : identité, navigation, dojos et coordonnées complètes.
 * Seule zone sombre du site (noir de la marque) — les couleurs y sont
 * fixées explicitement plutôt que via les variables du thème clair.
 */
export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400">
      <div className="container-site grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="text-white" />
          <p className="mt-4 text-sm leading-relaxed">
            {site.baseline}. Loisir ou compétition, Gi et No-Gi, dès 4 ans —
            dans un dojo neuf à deux pas de l’océan.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram ${site.social.instagramHandle}`}
              className="rounded-md border border-stone-700 p-2 transition-colors hover:border-primary hover:text-primary"
            >
              <InstagramIcon className="size-5" aria-hidden="true" />
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Page Facebook du club"
              className="rounded-md border border-stone-700 p-2 transition-colors hover:border-primary hover:text-primary"
            >
              <FacebookIcon className="size-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav aria-label="Navigation pied de page">
          <h2 className="font-display text-sm font-semibold tracking-[0.25em] text-white uppercase">
            Le site
          </h2>
          <ul className="mt-4 space-y-2.5">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/mentions-legales"
                className="text-sm transition-colors hover:text-primary"
              >
                Mentions légales
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold tracking-[0.25em] text-white uppercase">
            Nos dojos
          </h2>
          <ul className="mt-4 space-y-4">
            {locations.map((location) => (
              <li key={location.id} className="flex gap-2.5 text-sm">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span>
                  <span className="block font-medium text-white">
                    {location.name}
                  </span>
                  {location.address}, {location.city}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold tracking-[0.25em] text-white uppercase">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={site.contact.phoneHref}
                className="inline-flex items-center gap-2.5 transition-colors hover:text-primary"
              >
                <Phone className="size-4 text-primary" aria-hidden="true" />
                {site.contact.phoneDisplay}
              </a>
              <span className="block pl-6.5 text-xs text-stone-500">
                {site.contact.contactNames}
              </span>
            </li>
            <li>
              <a
                href={`mailto:${site.contact.email}`}
                className="inline-flex items-center gap-2.5 transition-colors hover:text-primary"
              >
                <Mail className="size-4 text-primary" aria-hidden="true" />
                {site.contact.email}
              </a>
            </li>
            <li>
              <a
                href={site.social.helloasso}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 transition-colors hover:text-primary"
              >
                <span
                  aria-hidden="true"
                  className="grid size-4 place-items-center rounded-xs bg-primary text-[0.5rem] font-bold text-primary-foreground"
                >
                  HA
                </span>
                Adhésion en ligne (HelloAsso)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-site flex flex-col items-center justify-between gap-2 text-center text-xs text-stone-500 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {site.association.legalName} — Association
            loi 1901 ({site.association.rna})
          </p>
          <p>
            Oss ! Conçu avec respect des valeurs du tatami à Anglet, Côte Basque.
          </p>
        </div>
      </div>
    </footer>
  );
}
