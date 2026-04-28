import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { SagaLines } from "@/components/SagaLines";

export const Route = createFileRoute("/process")({
  component: ProcessPage,
});

const STEPS = [
  ["01", "Research & Mapping", "Memahami brand, kompetitor, audiens, dan posisi pasar Anda. Hasilnya: peta peluang dan tantangan yang jelas."],
  ["02", "Strategize", "Menyusun strategi konten, pesan, dan channel yang relevan. Termasuk content pillar, tone of voice, dan KPI."],
  ["03", "Execute & Create", "Produksi visual, video, dan copy oleh tim kreatif kami — dengan standar yang konsisten dari satu konten ke konten lain."],
  ["04", "Launch & Distribute", "Distribusi konten di waktu dan channel yang tepat. Disertai engagement aktif untuk menjaga relasi dengan audiens."],
  ["05", "Scale Up", "Setelah pondasi solid, kami akselerasi dengan iklan berbayar dan optimasi channel agar pertumbuhan berkelanjutan."],
  ["06", "Report & Optimize", "Laporan bulanan yang transparan + iterasi berbasis data. Strategi diperbarui sesuai hasil di lapangan."],
] as const;

function ProcessPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-12 lg:px-8 lg:pt-20">
        <SectionLabel>Proses Kerja</SectionLabel>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1] tracking-tight sm:text-6xl lg:text-7xl text-balance">
          Enam langkah, satu <em className="not-italic text-sage">arah</em>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Pendekatan yang sistematis, transparan, dan dapat dibuktikan — agar setiap rupiah yang
          Anda investasikan punya makna.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-5 lg:px-8">
        <div className="relative space-y-6">
          {STEPS.map(([n, t, d], i) => (
            <article
              key={n}
              className={`grid gap-6 rounded-2xl border border-border bg-card p-7 lg:grid-cols-12 lg:p-10 chamfer-tr ${
                i % 2 === 1 ? "bg-cream" : ""
              }`}
            >
              <div className="lg:col-span-3 flex items-start gap-4">
                <span className="font-display text-6xl font-bold leading-none text-lime">{n}</span>
                <SagaLines className="mt-3 text-primary" />
              </div>
              <div className="lg:col-span-9">
                <h2 className="font-display text-2xl font-bold leading-tight text-primary sm:text-3xl">{t}</h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">{d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
