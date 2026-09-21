import bakery from "@/assets/life-bakery.jpg";
import family from "@/assets/life-family-travel.jpg";
import cargo from "@/assets/svc-cargo.jpg";
import business from "@/assets/svc-business.jpg";
import parcel from "@/assets/for-you-hero.jpg";
import ride from "@/assets/svc-ride.jpg";
import { Section, SectionHeading } from "@/components/ui/section";

const moments = [
  { src: ride, title: "An everyday ride", text: "Getting to work, school or town without the usual back and forth.", alt: "Passenger on an ordinary motorcycle in a Kenyan street" },
  { src: parcel, title: "A parcel handed over", text: "Documents and packages picked up and delivered across town.", alt: "Rider handing a parcel to a woman at her doorway" },
  { src: cargo, title: "Cargo on the move", text: "Bigger loads matched with a vehicle that fits the job.", alt: "Workers loading sacks onto an ordinary pickup" },
  { src: business, title: "Business activity", text: "Shops and SMEs arranging stock, staff trips and deliveries.", alt: "Shop owner arranging a delivery into a van" },
  { src: bakery, title: "A cake for the celebration", text: "One example of the everyday deliveries people arrange — a bakery order boxed and handed over with care.", alt: "Kenyan bakery worker boxing a celebration cake" },
  { src: family, title: "Family travel", text: "Longer trips with luggage, planned ahead where the route and timing fit.", alt: "Kenyan family with luggage boarding an ordinary minivan" },
];

/** Dark photographic band showing everyday Kenyan movement across the platform. */
export function LifeInMotion() {
  return (
    <Section id="life-in-motion" tone="ink">
      <SectionHeading
        tone="ink"
        eyebrow="Life in motion"
        title="Everyday movement, across Kenya"
        text="Real situations people arrange every day — people, parcels, goods and business, all in one place."
      />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {moments.map((m) => (
          <li key={m.title}>
            <article className="group h-full overflow-hidden rounded-2xl border border-ink-border bg-[color-mix(in_oklab,var(--ink)_55%,transparent)] shadow-lift">
              <div className="relative">
                <img
                  src={m.src}
                  alt={m.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,color-mix(in_oklab,var(--ink)_85%,transparent)_100%)]"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-ink-foreground">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{m.text}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
