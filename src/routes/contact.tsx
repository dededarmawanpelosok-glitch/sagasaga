import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Instagram, Youtube, MessageCircle, ArrowRight, Check, Phone } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { SagaLines } from "@/components/SagaLines";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const WA_NUMBER = "6281288442604";

function buildWhatsAppMessage(data: {
  brand: string;
  name: string;
  email: string;
  wa: string;
  package: string;
  story: string;
  budget: string;
}) {
  const lines = [
    "Halo Saga Creative! 👋",
    "Saya ingin berkonsultasi dan memesan layanan.",
    "",
    "📋 *DATA PEMESANAN*",
    `🏷️ Nama Brand/UMKM : ${data.brand}`,
    `👤 Nama Kontak     : ${data.name}`,
    `📧 Email           : ${data.email}`,
    `📱 WhatsApp        : ${data.wa}`,
    `📦 Paket Diminati  : ${data.package}`,
    "",
    `📝 *Tentang Brand:*`,
    data.story,
    "",
    data.budget ? `💰 Budget Range    : ${data.budget}` : "",
    "",
    "Mohon informasi lebih lanjut. Terima kasih! 🙏",
  ]
    .filter((line, i, arr) => !(line === "" && arr[i - 1] === ""))
    .join("\n");

  return encodeURIComponent(lines.trim());
}

function ContactPage() {
  const [form, setForm] = useState({
    brand: "",
    name: "",
    email: "",
    wa: "",
    package: "Belum tahu",
    story: "",
    budget: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = buildWhatsAppMessage(form);
    const url = `https://wa.me/${WA_NUMBER}?text=${msg}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-12 lg:px-8 lg:pt-20">
        <SectionLabel>Kontak</SectionLabel>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1] tracking-tight sm:text-6xl lg:text-7xl text-balance">
          Mari diskusikan <em className="not-italic text-sage">brand Anda</em>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Konsultasi gratis, tanpa komitmen. Kami akan bantu petakan langkah pertama yang paling masuk akal.
        </p>
      </section>

      <section className="mx-auto mt-14 max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* FORM */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-card p-7 lg:p-10 chamfer-tr">
              {submitted ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-lime text-lime-foreground">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-primary">Terima kasih!</h3>
                  <p className="mt-2 max-w-md text-muted-foreground">
                    WhatsApp sudah terbuka dengan pesan yang terisi otomatis. Tinggal kirim dan tim Saga akan segera merespons!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary underline underline-offset-4 hover:opacity-70 transition"
                  >
                    Isi form lagi
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Nama Brand / UMKM" name="brand" value={form.brand} onChange={handleChange} required />
                    <Field label="Nama Kontak" name="name" value={form.name} onChange={handleChange} required />
                    <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
                    <Field label="No. WhatsApp" name="wa" type="tel" value={form.wa} onChange={handleChange} required placeholder="08xxxxxxxxxx" />
                  </div>
                  <SelectField
                    label="Paket yang diminati"
                    name="package"
                    value={form.package}
                    onChange={handleChange}
                    options={[
                      "Belum tahu",
                      "Paket Standar — Rp 500.000",
                      "Paket Grow — Rp 700.000",
                      "Paket Premium — Rp 1.500.000",
                    ]}
                  />
                  <TextareaField
                    label="Ceritakan tentang brand Anda"
                    name="story"
                    value={form.story}
                    onChange={handleChange}
                    required
                  />
                  <Field
                    label="Budget range (opsional)"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    placeholder="Contoh: Rp 500rb – 1jt / bulan"
                  />
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1ebe5a] transition shadow-lg shadow-[#25D366]/20"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Kirim via WhatsApp <ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="text-xs text-muted-foreground -mt-2">
                    Tombol akan membuka WhatsApp dengan pesan terisi otomatis sesuai form di atas.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* INFO */}
          <div className="lg:col-span-5 space-y-5">
            <InfoCard
              icon={<MessageCircle className="h-5 w-5" />}
              label="WhatsApp"
              value="+62 812-8844-2604"
              href={`https://wa.me/${WA_NUMBER}`}
            />
            <InfoCard icon={<Mail className="h-5 w-5" />} label="Email" value="sagacore279@gmail.com" href="mailto:sagacore279@gmail.com" />
            <InfoCard icon={<MapPin className="h-5 w-5" />} label="Lokasi" value="Desa Pajajar, Rajagaluh, Majalengka" />

            <div className="rounded-2xl border border-border bg-cream p-6 chamfer-tr">
              <SagaLines className="text-primary" />
              <h3 className="mt-3 font-display text-base font-semibold uppercase tracking-widest text-primary">
                Sosial Media
              </h3>
              <div className="mt-4 grid gap-3">
                <Social icon={<Instagram className="h-4 w-4" />} label="Instagram" handle="@SagaCreative_" href="https://instagram.com/SagaCreative_" />
                <Social icon={<Phone className="h-4 w-4" />} label="TikTok" handle="@SagaCreative_" href="https://tiktok.com/@SagaCreative_" />
                <Social icon={<Youtube className="h-4 w-4" />} label="YouTube" handle="@Sagacore09" href="https://youtube.com/@Sagacore09" />
                <Social icon={<MessageCircle className="h-4 w-4" />} label="Threads" handle="@Sagaone" href="https://threads.net/@Sagaone" />
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Saga Creative Location"
                src="https://www.google.com/maps?q=Pajajar%20Rajagaluh%20Majalengka&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ── Field Components ─────────────────────────────────────────────────────────

function Field({
  label, name, type = "text", required, value, onChange, placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}{required && " *"}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="border-0 border-b-2 border-border bg-transparent py-2.5 text-sm outline-none transition focus:border-lime placeholder:text-muted-foreground/50"
      />
    </label>
  );
}

function TextareaField({
  label, name, required, value, onChange,
}: {
  label: string;
  name: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}{required && " *"}
      </span>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={4}
        placeholder="Ceritakan bisnis Anda, target pasar, masalah yang dihadapi, dll."
        className="resize-none border-0 border-b-2 border-border bg-transparent py-2.5 text-sm outline-none transition focus:border-lime placeholder:text-muted-foreground/50"
      />
    </label>
  );
}

function SelectField({
  label, name, options, value, onChange,
}: {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="border-0 border-b-2 border-border bg-transparent py-2.5 text-sm outline-none transition focus:border-lime"
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function InfoCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const Inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-primary">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">{icon}</span>
      <div>
        <div className="font-display text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="mt-1 font-display text-base font-semibold text-primary">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer">{Inner}</a> : Inner;
}

function Social({ icon, label, handle, href }: { icon: React.ReactNode; label: string; handle: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 transition hover:border-primary">
      <span className="flex items-center gap-3 text-sm">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">{icon}</span>
        <span className="font-semibold text-primary">{label}</span>
      </span>
      <span className="text-sm text-muted-foreground">{handle}</span>
    </a>
  );
}
