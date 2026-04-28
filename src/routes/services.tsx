import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { SagaLines } from "@/components/SagaLines";
import contentImg from "@/assets/service-content.jpg";
import brandingImg from "@/assets/service-branding.jpg";
import perfImg from "@/assets/service-performance.jpg";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

const SERVICES = [
  {
    n: "01",
    title: "Creative Content & Social Media Management",
    img: contentImg,
    problem: "Konten tidak konsisten, jadwal posting berantakan, dan caption tidak menjual.",
    solution: "Kami bantu produksi konten foto/video yang konsisten, copywriting yang tepat sasaran, dan manajemen sosial media yang terstruktur.",
    deliverables: [
      "Foto & video produk / promo",
      "Copywriting + caption menjual",
      "Manajemen sosial media bulanan",
      "Story harian & engagement",
    ],
    process: ["Audit akun", "Content plan", "Produksi", "Publish & engage", "Laporan"],
  },
  {
    n: "02",
    title: "Strategic Branding",
    img: brandingImg,
    problem: "Identitas brand belum kuat, terlihat generik, dan tidak mudah diingat.",
    solution: "Bangun identitas yang konsisten: logo, sistem visual, dan tone of voice yang sesuai dengan karakter brand Anda.",
    deliverables: [
      "Logo design",
      "Visual identity & guideline",
      "Tone of voice",
      "Highlight & template sosial media",
    ],
    process: ["Brand discovery", "Riset & arah", "Desain", "Refinement", "Handover"],
  },
  {
    n: "03",
    title: "Digital Sales & Performance",
    img: perfImg,
    problem: "Sudah aktif sosial media, tapi belum berdampak ke penjualan.",
    solution: "Setup channel berbasis konversi: Meta Ads, Google Maps, dan strategi promosi yang terukur per bulan.",
    deliverables: [
      "Setup Google Maps",
      "Manajemen Meta ADS",
      "Strategi konversi bulanan",
      "Laporan performa",
    ],
    process: ["Riset audiens", "Setup channel", "Eksekusi iklan", "Optimasi", "Laporan"],
  },
] as const;

function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-12 lg:px-8 lg:pt-20">
        <SectionLabel>Layanan</SectionLabel>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1] tracking-tight sm:text-6xl lg:text-7xl text-balance">
          Tiga pilar untuk brand yang <em className="not-italic text-sage">tumbuh stabil</em>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Setiap layanan dirancang berbasis kebutuhan nyata UMKM dan brand berkembang —
          terstruktur, terdokumentasi, dan dapat diukur.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-5 lg:px-8">
        <div className="space-y-16">
          {SERVICES.map((s, idx) => (
            <article key={s.n} className={`grid gap-10 lg:grid-cols-12 ${idx % 2 === 1 ? "lg:[&>:first-child]:order-2" : ""}`}>
              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl chamfer-tr border border-border">
                  <img src={s.img} alt={s.title} className="h-[420px] w-full object-cover" loading="lazy" width={1200} height={1200} />
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3">
                  <span className="font-display text-4xl font-bold text-lime">{s.n}</span>
                  <SagaLines className="text-primary" />
                </div>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{s.title}</h2>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-card p-5">
                    <span className="font-display text-xs font-semibold uppercase tracking-widest text-violet">Problem</span>
                    <p className="mt-2 text-sm text-foreground/80">{s.problem}</p>
                  </div>
                  <div className="rounded-xl border border-border bg-cream p-5">
                    <span className="font-display text-xs font-semibold uppercase tracking-widest text-sage">Solution</span>
                    <p className="mt-2 text-sm text-foreground/80">{s.solution}</p>
                  </div>
                </div>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <span className="font-display text-xs font-semibold uppercase tracking-widest text-primary">Deliverables</span>
                    <ul className="mt-3 space-y-2 text-sm">
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-sage" /> {d}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="font-display text-xs font-semibold uppercase tracking-widest text-primary">Proses</span>
                    <ol className="mt-3 space-y-2 text-sm">
                      {s.process.map((p, i) => (
                        <li key={p} className="flex items-start gap-2">
                          <span className="font-display text-xs font-bold text-lime">{String(i + 1).padStart(2, "0")}</span>
                          {p}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link to="/pricing" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition">
                    Lihat Paket <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary/5 transition">
                    Konsultasi
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
