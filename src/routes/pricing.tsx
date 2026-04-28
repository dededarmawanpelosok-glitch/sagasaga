import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { SagaLines } from "@/components/SagaLines";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
});

const PACKAGES = [
  {
    name: "Paket Standar",
    price: "Rp 500.000",
    tagline: "Fondasi konten yang konsisten untuk brand baru.",
    featured: false,
    features: [
      "15 Konten: Foto & video produk atau promo yang rapi dan menarik",
      "Copywriting Menarik: Caption yang menjual untuk tiap postingan",
      "Laporan Bulanan: Pantau perkembangan akun Anda tiap bulan",
      "Bonus Spesial: Gratis Desain Logo & Desain Highlight. (Jika Belum Punya)",
    ],
  },
  {
    name: "Paket Grow",
    price: "Rp 700.000",
    tagline: "Untuk brand yang fokus growth & engagement.",
    featured: true,
    features: [
      "30 Konten: Foto & video produk atau promo yang rapi dan menarik",
      "Update Story Harian: Agar pelanggan selalu ingat dengan brand Anda",
      "Riset Hashtag: Biar konten Anda muncul di pencarian orang lokal",
      "Admin Responsif: Kami bantu balas komentar dan DM calon pembeli",
      "Copywriting & Laporan Bulanan: Lengkap untuk pantau hasil",
      "Bonus Spesial: Gratis Desain Logo & Desain Highlight. (Jika Belum Punya)",
    ],
  },
  {
    name: "Paket Premium",
    price: "Rp 1.500.000",
    tagline: "Akselerasi penuh: konten, iklan, dan strategi bulanan.",
    featured: false,
    features: [
      "30 Konten: Foto & video produk atau promo yang rapi dan menarik",
      "Setup Google Maps: Biar toko Anda muncul di peta dan gampang dicari orang",
      "Manajemen Meta ADS: Kami bantu setting iklan agar target pelanggan tepat sasaran",
      "Strategi Bulan Depan: Konsultasi khusus untuk rencana promosi yang lebih joss",
      "Semua Fitur Grow: Termasuk Story harian, Balas Komentar, Riset Hashtag, dan Laporan",
      "Bonus Spesial: Gratis Desain Logo & Desain Highlight. (Jika Belum Punya)",
    ],
  },
] as const;

function PricingPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-12 lg:px-8 lg:pt-20">
        <SectionLabel>Pricing</SectionLabel>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1] tracking-tight sm:text-6xl lg:text-7xl text-balance">
          Paket yang <em className="not-italic text-sage">jelas</em>, harga yang <em className="not-italic text-violet">jujur</em>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Pilih paket yang sesuai tahap brand Anda. Semua paket dilengkapi konsultasi sebelum mulai.
        </p>
      </section>

      <section className="mx-auto mt-14 max-w-7xl px-5 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((p) => (
            <article
              key={p.name}
              className={`relative flex flex-col rounded-3xl border p-7 lg:p-8 chamfer-tr transition hover:-translate-y-1 ${
                p.featured
                  ? "border-primary bg-primary text-primary-foreground shadow-2xl lg:scale-[1.02]"
                  : "border-border bg-card"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lime px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-lime-foreground shadow">
                  Paling Populer
                </span>
              )}
              <SagaLines className={p.featured ? "text-lime" : "text-primary"} />
              <h2 className={`mt-4 font-display text-2xl font-bold ${p.featured ? "" : "text-primary"}`}>{p.name}</h2>
              <p className={`mt-1.5 text-sm ${p.featured ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
                {p.tagline}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold tracking-tight">{p.price}</span>
                <span className={`text-sm ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>/bulan</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f) => {
                  const [head, ...rest] = f.split(":");
                  const body = rest.join(":").trim();
                  return (
                    <li key={f} className="flex gap-2.5">
                      <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${p.featured ? "text-lime" : "text-sage"}`} />
                      <span className={p.featured ? "" : "text-foreground/85"}>
                        <span className="font-semibold">{head}{body ? ":" : ""}</span>
                        {body && <span className={p.featured ? " text-primary-foreground/85" : " text-muted-foreground"}> {body}</span>}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <Link
                to="/contact"
                className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                  p.featured
                    ? "bg-lime text-lime-foreground hover:bg-lime/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                Pilih Paket Ini <ArrowRight className="h-4 w-4" />
              </Link>
              <p className={`mt-3 text-center text-[11px] ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                Konsultasi sebelum mulai.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-5xl px-5 text-center lg:px-8">
        <SagaLines className="mx-auto text-primary" />
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Belum yakin paket mana yang cocok?
        </h2>
        <p className="mt-3 text-muted-foreground">
          Ceritakan brand Anda — kami bantu rekomendasikan paket yang paling masuk akal.
        </p>
        <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition">
          Konsultasi Gratis <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
