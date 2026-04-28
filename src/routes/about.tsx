import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { SagaLines } from "@/components/SagaLines";
import aboutTeam from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const VALUES = [
  ["Authenticity", "Cerita yang jujur — tanpa drama, tanpa polesan berlebih."],
  ["Relatability", "Bahasa yang dekat, ide yang bisa dirasakan oleh audiens."],
  ["Tactical Creativity", "Kreatif yang punya tujuan dan dapat diukur."],
  ["Local Pride", "Bangga dari desa, percaya diri di skala nasional."],
] as const;

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-12 lg:px-8 lg:pt-20">
        <SectionLabel>About Saga</SectionLabel>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1] tracking-tight sm:text-6xl lg:text-7xl text-balance">
          Anak desa dengan <em className="not-italic text-sage">standar nasional</em>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Saga Creative adalah agency kreatif digital dari Majalengka. Kami percaya brand yang baik
          lahir dari keseimbangan antara estetika, pesan yang jujur, dan strategi yang terarah.
        </p>
      </section>

      <section className="mx-auto mt-16 grid max-w-7xl gap-10 px-5 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7 overflow-hidden rounded-2xl chamfer-tr border border-border">
          <img src={aboutTeam} alt="Tim Saga Creative" className="h-[520px] w-full object-cover" loading="lazy" width={1400} height={1600} />
        </div>
        <div className="lg:col-span-5 flex flex-col justify-center">
          <SagaLines className="text-lime" />
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">Cerita Kami</h2>
          <p className="mt-4 text-muted-foreground">
            Saga lahir dari keyakinan sederhana: konten yang bagus harus punya keseimbangan —
            estetika yang rapi, penyampaian yang informatif, dan pendekatan yang relatable.
          </p>
          <p className="mt-4 text-muted-foreground">
            Kami berangkat dari desa, namun bekerja dengan standar yang setara agency besar:
            terstruktur, terdokumentasi, dan terukur.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-sage">Mission</span>
            <h3 className="mt-3 font-display text-2xl font-bold leading-snug">
              Membantu brand & UMKM tampil lebih kuat, lebih rapi, dan lebih siap berkembang —
              dari skala lokal menuju skala nasional.
            </h3>
          </div>
          <div className="rounded-2xl border border-border bg-primary p-8 text-primary-foreground lg:p-10">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-lime">Vision</span>
            <h3 className="mt-3 font-display text-2xl font-bold leading-snug">
              Menjadi rumah kreatif yang melahirkan brand-brand Indonesia yang otentik,
              relevan, dan tumbuh secara berkelanjutan.
            </h3>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-5 lg:px-8">
        <SectionLabel>Values</SectionLabel>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">Nilai yang kami pegang.</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(([t, d], i) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6 chamfer-tr">
              <span className="font-display text-3xl font-bold text-lime">0{i + 1}</span>
              <SagaLines className="mt-2 text-primary" />
              <h3 className="mt-3 font-display text-lg font-semibold text-primary">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-5xl px-5 lg:px-8">
        <figure className="rounded-3xl border-l-4 border-lime bg-cream p-10 lg:p-14">
          <blockquote className="font-display text-2xl font-bold leading-snug text-primary sm:text-3xl">
            “Kami bukan ingin terlihat seperti agency Jakarta. Kami ingin membuktikan bahwa
            kerja kreatif berkelas dunia bisa lahir dari desa kecil di Majalengka.”
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3 text-sm font-semibold text-muted-foreground">
            <SagaLines className="text-primary" /> Tim Saga Creative
          </figcaption>
        </figure>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-5 lg:px-8">
        <div className="rounded-3xl bg-primary p-10 text-primary-foreground sm:p-14">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Mari bangun cerita brand Anda bersama kami.
              </h2>
            </div>
            <div className="lg:col-span-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-semibold text-lime-foreground hover:bg-lime/90 transition">
                Konsultasi Gratis <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
