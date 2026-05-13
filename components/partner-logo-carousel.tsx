import Image from "next/image";

const PARTNER_LOGOS = [
  { src: "/images/logos/logo-hankook.png", alt: "Hankook" },
  { src: "/images/logos/logo-hdpower.png", alt: "HD Power" },
  { src: "/images/logos/logo-hyosung.png", alt: "Hyosung" },
  { src: "/images/logos/logo-hyundai.png", alt: "Hyundai" },
  { src: "/images/logos/logo-ingersoll.png", alt: "Ingersoll" },
  { src: "/images/logos/logo-kumho.png", alt: "Kumho" },
  { src: "/images/logos/logo-lgchem.png", alt: "LG Chem" },
  { src: "/images/logos/logo-lgelectronics.png", alt: "LG Electronics" },
  { src: "/images/logos/logo-lgensol.png", alt: "LG Energy Solution" },
  { src: "/images/logos/logo-lghausys.png", alt: "LG Hausys" },
  { src: "/images/logos/logo-miura.png", alt: "Miura" },
  { src: "/images/logos/logo-samsung.png", alt: "Samsung" },
  { src: "/images/logos/logo-soulbrain.png", alt: "Soulbrain" },
  { src: "/images/logos/logo-toray.png", alt: "Toray" },
  { src: "/images/logos/logo-ultiumcells.png", alt: "Ultium Cells" },
];

export function PartnerLogoCarousel() {
  return (
    <section className="bg-muted py-10 lg:py-14">
      <div className="group relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-muted to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-muted to-transparent" />

        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, i) => (
            <div
              key={i}
              className="mx-8 flex h-12 w-28 shrink-0 items-center justify-center lg:mx-12 lg:h-14 lg:w-36"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={144}
                height={56}
                className="max-h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
