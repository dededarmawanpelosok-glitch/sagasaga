import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Sparkles, Compass, TrendingUp, Star, Check } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { SagaLines } from "@/components/SagaLines";
import heroTeam from "@/assets/hero-team.jpg";
import contentImg from "@/assets/service-content.jpg";
import brandingImg from "@/assets/service-branding.jpg";
import perfImg from "@/assets/service-performance.jpg";
import casePhotocopy from "@/assets/case-photocopy.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const STEPS = [
  ["01", "Research & Mapping", "Memahami brand, pasar, dan audiens Anda secara mendalam."],
  ["02", "Strategize", "Menyusun strategi konten dan komunikasi yang terarah."],
  ["03", "Execute & Create", "Produksi visual, video, dan copy yang rapi & menjual."],
  ["04", "Launch & Distribute", "Distribusi konten ke channel yang tepat sasaran."],
  ["05", "Scale Up", "Optimasi & skala untuk pertumbuhan yang konsisten."],
  ["06", "Report & Optimize", "Laporan transparan + iterasi berdasarkan data."],
] as const;

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-12 lg:px-8 lg:pb-32 lg:pt-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <SectionLabel>From Local to National</SectionLabel>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
                Tumbuhkan Brand Anda dengan{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Strategi</span>
                  <span className="absolute -bottom-2 left-0 z-0 h-3 w-full bg-lime/80" aria-hidden />
                </span>{" "}
                yang Lebih <em className="not-italic text-violet">Cerdas</em>.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
                Saga Creative membantu brand dan UMKM tampil lebih kuat, lebih rapi, dan
                lebih siap berkembang — lewat konten, branding, dan performance marketing.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to="/process"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition"
                >
                  Lihat Proses <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background px-6 py-3.5 text-sm font-semibold text-primary hover:bg-primary/5 transition"
                >
                  Konsultasi Gratis
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
                <SagaLines className="text-lime" count={3} />
                <span>Dipercaya brand lokal & berkembang di Indonesia.</span>
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <div className="relative">
                <div className="overflow-hidden rounded-2xl chamfer-tr border border-border bg-card shadow-xl">
                  <img
                    src={heroTeam}
                    alt="Tim kreatif Saga Creative berdiskusi"
                    className="h-[520px] w-full object-cover"
                    width={1080}
                    height={1920}
                  />
                </div>
                {/* Floating cards */}
                <div className="absolute -left-4 bottom-10 hidden w-56 rounded-xl border border-border bg-card p-4 shadow-lg sm:block">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-lime" />
                    <span className="font-display text-xs font-semibold uppercase tracking-widest">Konten Rapi</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Visual yang konsisten & estetik untuk feed Anda.
                  </p>
                </div>
                <div className="absolute -right-3 -top-4 hidden rounded-xl bg-lime px-4 py-3 text-lime-foreground shadow-lg lg:block">
                  <div className="font-display text-2xl font-bold leading-none">100%</div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest">Custom Strategy</div>
                </div>
                <div className="absolute -right-2 bottom-6 hidden w-48 rounded-xl bg-violet p-4 text-violet-foreground shadow-lg md:block">
                  <div className="font-display text-xs font-semibold uppercase tracking-widest opacity-80">Mission</div>
                  <p className="mt-1 text-sm leading-snug">Anak desa dengan standar nasional.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              ["Brand Lokal", "Dipercaya brand lokal & berkembang"],
              ["Konten Rapi", "Visual konsisten & profesional"],
              ["Copywriting Menjual", "Pesan yang jelas dan menggerakkan"],
              ["Strategi Terarah", "Perencanaan berbasis data"],
            ].map(([t, s]) => (
              <div key={t} className="flex flex-col gap-2">
                <SagaLines className="text-primary" count={3} />
                <p className="font-display text-sm font-semibold text-primary">{t}</p>
                <p className="text-xs text-muted-foreground">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <SectionLabel>Layanan</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Tiga pilar untuk membuat brand <em className="not-italic text-sage">tumbuh stabil</em>.
            </h2>
          </div>
          <Link to="/services" className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            Lihat semua layanan <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <ServiceCard
            tone="primary"
            number="01"
            title="Creative Content & Social Media"
            desc="Konten foto/video, copywriting, dan manajemen sosial media yang konsisten."
            bullets={["Konten foto & video", "Copywriting menjual", "Story & engagement"]}
            img={contentImg}
            colSpan="lg:col-span-5"
            icon={<Sparkles className="h-5 w-5" />}
          />
          <ServiceCard
            tone="lime"
            number="02"
            title="Strategic Branding"
            desc="Identitas brand yang kuat: logo, visual system, dan tone of voice."
            bullets={["Logo & visual system", "Brand guideline", "Tone of voice"]}
            img={brandingImg}
            colSpan="lg:col-span-3"
            icon={<Compass className="h-5 w-5" />}
          />
          <ServiceCard
            tone="violet"
            number="03"
            title="Digital Sales & Performance"
            desc="Setup Meta Ads, Google Maps, dan strategi konversi untuk hasil terukur."
            bullets={["Meta Ads management", "Google Maps setup", "Strategi konversi"]}
            img={perfImg}
            colSpan="lg:col-span-4"
            icon={<TrendingUp className="h-5 w-5" />}
          />
        </div>
      </section>

      {/* PROCESS PREVIEW */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <SagaLines className="text-lime" />
                <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-lime">
                  Proses Kerja
                </span>
              </div>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                6 langkah <span className="text-lime">terstruktur</span>, dari riset hingga skala.
              </h2>
            </div>
            <Link to="/process" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-5 py-2.5 text-sm font-semibold hover:bg-primary-foreground/5 transition">
              Detail proses <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-primary-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map(([n, t, d]) => (
              <div key={n} className="bg-primary p-6 lg:p-8">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-3xl font-bold text-lime">{n}</span>
                  <SagaLines className="text-primary-foreground/50" />
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold">{t}</h3>
                <p className="mt-1.5 text-sm text-primary-foreground/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO HIGHLIGHT */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionLabel>Featured Case</SectionLabel>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl max-w-3xl">
          Studi kasus pilihan: <em className="not-italic text-sage">Photocopy Pajajar</em>.
        </h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl chamfer-bl border border-border">
              <img src={casePhotocopy} alt="Photocopy Pajajar — jasa fotocopy & printing di Bandung" className="h-[460px] w-full object-cover" loading="lazy" width={1600} height={1200} />
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="inline-flex w-fit items-center rounded-full bg-lime px-3 py-1 text-xs font-semibold uppercase tracking-widest text-lime-foreground">
              Printing / Local Service
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold leading-tight">
              Membangun kehadiran digital untuk jasa fotocopy & percetakan di Bandung.
            </h3>
            <p className="mt-4 text-muted-foreground">
              Dari identitas visual yang konsisten, konten promosi harian yang menjual, hingga
              strategi distribusi konten yang relevan dengan audiens lokal — mahasiswa, UMKM,
              perusahaan, hingga sekolah.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              {["Konten foto produk hasil cetak", "Copywriting + caption paket print", "Setup channel & distribusi lokal Bandung"].map((b) => (
                <li key={b} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-sage" /> {b}</li>
              ))}
            </ul>
            <Link to="/portfolio" className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition">
              Lihat semua karya <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <SectionLabel>Pricing</SectionLabel>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Paket yang <em className="not-italic text-sage">jelas</em>, harga yang <em className="not-italic text-violet">jujur</em>.
              </h2>
              <p className="mt-5 text-muted-foreground">
                Tiga paket sederhana untuk berbagai tahap pertumbuhan brand Anda — mulai dari
                fondasi hingga akselerasi performa.
              </p>
              <Link to="/pricing" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition">
                Lihat detail paket <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-7 grid gap-4 sm:grid-cols-3">
              {[
                ["Standar", "Rp 500.000"],
                ["Grow", "Rp 700.000"],
                ["Premium", "Rp 1.500.000"],
              ].map(([n, p], i) => (
                <div key={n} className={`relative rounded-2xl border p-6 ${i === 1 ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"}`}>
                  {i === 1 && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lime px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-lime-foreground">
                      Most Popular
                    </span>
                  )}
                  <SagaLines className={i === 1 ? "text-lime" : "text-primary"} />
                  <h3 className={`mt-3 font-display text-lg font-semibold ${i === 1 ? "" : "text-primary"}`}>Paket {n}</h3>
                  <p className={`mt-2 font-display text-2xl font-bold ${i === 1 ? "" : "text-foreground"}`}>{p}</p>
                  <p className={`mt-1 text-xs ${i === 1 ? "text-primary-foreground/70" : "text-muted-foreground"}`}>per bulan</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-10 text-primary-foreground sm:p-16">
          <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-lime/20 blur-3xl" aria-hidden />
          <div className="absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-violet/30 blur-3xl" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <SagaLines className="text-lime" />
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Siap membangun brand yang <span className="text-lime">tahan lama</span>?
              </h2>
              <p className="mt-4 max-w-xl text-primary-foreground/80">
                Mari diskusikan brand Anda — gratis, tanpa komitmen. Kami akan bantu petakan langkah pertama yang paling masuk akal.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-semibold text-lime-foreground hover:bg-lime/90 transition">
                Konsultasi Gratis <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/pricing" className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3.5 text-sm font-semibold hover:bg-primary-foreground/10 transition">
                Lihat Paket
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  number, title, desc, bullets, img, colSpan, icon, tone,
}: {
  number: string; title: string; desc: string; bullets: string[]; img: string; colSpan: string;
  icon: React.ReactNode; tone: "primary" | "lime" | "violet";
}) {
  const toneClass =
    tone === "lime" ? "bg-lime text-lime-foreground"
    : tone === "violet" ? "bg-violet text-violet-foreground"
    : "bg-primary text-primary-foreground";
  return (
    <article className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl chamfer-tr ${colSpan}`}>
      <div className="relative h-44 overflow-hidden">
        <img src={img} alt={title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" width={1200} height={800} />
        <div className={`absolute left-4 top-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${toneClass}`}>
          {icon} <span className="font-display tracking-widest">{number}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold leading-tight text-primary">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
        <ul className="mt-4 space-y-1.5 text-sm">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2"><Star className="mt-0.5 h-3.5 w-3.5 text-lime" /> {b}</li>
          ))}
        </ul>
        <Link to="/services" className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
          Pelajari <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
