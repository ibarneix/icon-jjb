import type { MetadataRoute } from "next";

import { site } from "@/data/site";
import { asset } from "@/lib/asset";

// Requis par l'export statique (output: export) — généré une fois au build.
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    start_url: asset("/"),
    display: "standalone",
    background_color: "#faf9f7",
    theme_color: "#ea580c",
    icons: [
      {
        src: asset("/images/logo-mark.png"),
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
