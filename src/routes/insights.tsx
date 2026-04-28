import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { SagaLines } from "@/components/SagaLines";
import i1 from "@/assets/insight-1.jpg";
import i2 from "@/assets/insight-2.jpg";
import i3 from "@/assets/insight-3.jpg";

export const Route = createFileRoute("/insights")({
  component: InsightsPage,
});

const TAGS = ["Semua", "Branding", "Konten", "Strategi", "Performance"];
const ARTICLES = [
  { img: i1, tag: "Strategi", title: "Menyusun content plan bulanan untuk brand UMKM", excerpt: "Pendekatan sederhana untuk merencanakan konten yang konsisten setiap bulan." },
  { img: i2, tag: "Konten", title: "Apa yang membuat sebuah feed terlihat 'rapi'?", excerpt: "Prinsip dasar visual hierarchy untuk feed sosial media yang enak dilihat." },
  { img: i3, tag: "Branding", title: "Menentukan palet warna brand yang tepat", excerpt: "Cara memilih warna yang merefleksikan karakter brand Anda dengan jujur." },
] as const;

function InsightsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-12 lg:px-8 lg:pt-20">
        <SectionLabel>Insights</SectionLabel>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1] tracking-tight sm:text-6xl lg:text-7xl text-balance">
          Catatan & pemikiran <em className="not-italic text-sage">tim Saga</em>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Kumpulan tulisan ringan tentang branding, konten, dan strategi pertumbuhan untuk brand
          dan UMKM di Indonesia.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative max-w-md flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Cari artikel..."
              className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm outline-none transition focus:border-primary"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {TAGS.map((t, i) => (
              <button
                key={t}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                  i === 0 ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground/70 hover:border-primary"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-5 lg:px-8">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a) => (
            <article key={a.title} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card chamfer-tr transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-52 overflow-hidden">
                <img src={a.img} alt={a.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" width={1200} height={800} />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3">
                  <SagaLines className="text-lime" />
                  <span className="font-display text-[10px] font-semibold uppercase tracking-widest text-sage">{a.tag}</span>
                </div>
                <h2 className="mt-3 font-display text-lg font-bold leading-snug text-primary">{a.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{a.excerpt}</p>
                <span className="mt-5 inline-flex w-fit text-xs font-semibold uppercase tracking-widest text-primary">Coming soon →</span>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground italic">
          Konten artikel akan segera dipublikasikan oleh tim editorial Saga.
        </p>
      </section>
    </>
  );
}
