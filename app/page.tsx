'use client';

import Image from 'next/image';
import React from 'react';

const INSTAGRAM_URL = 'https://instagram.com/hyp_gestion.inmobiliaria';

// +56 9 7197 7742  -> 56971977742
const WHATSAPP_URL =
  'https://wa.me/56971977742?text=Hola%20Pedro%2C%20vengo%20desde%20la%20web%20de%20H%26P%20y%20me%20interesa%20una%20asesoría.';

function ExternalButton({
  href,
  children,
  variant = 'primary',
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black';
  const styles =
    variant === 'primary'
      ? 'bg-white text-black hover:opacity-90 focus:ring-white'
      : 'bg-white/10 text-white hover:bg-white/15 border border-white/15 focus:ring-white/60';

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${base} ${styles}`}
    >
      {children}
      <span aria-hidden>→</span>
    </a>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen text-white">
      {/* Fondo burdeo / vino */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(900px 600px at 15% 10%, rgba(120, 10, 60, 0.35), transparent 60%),
            radial-gradient(900px 600px at 85% 20%, rgba(80, 5, 40, 0.25), transparent 60%),
            linear-gradient(135deg, #0a0006 0%, #1a0010 35%, #2a0018 65%, #3b001f 100%)
          `,
        }}
      />

      {/* Header con logo centrado y más grande */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/30 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-5 py-4">
          <div className="relative h-14 w-56 sm:h-16 sm:w-64">
            <Image
              src="/hyplogo.png"
              alt="H&P Gestión Inmobiliaria"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-5 pt-12 pb-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Texto */}
          <div>
            <h1 className="mt-2 text-4xl font-bold leading-tight sm:text-5xl">
              H&amp;P Gestión Inmobiliaria
            </h1>

            <p className="mt-3 text-base text-white/75 sm:text-lg">
              Acompañamiento completo en compra, venta y arriendo con un enfoque
              claro: transparencia, buena gestión y comunicación constante.
            </p>

            <p className="mt-4 text-sm text-white/70">
              Zonas de operación:{' '}
              <span className="text-white/85">Curauma</span>,{' '}
              <span className="text-white/85">Valparaíso</span>,{' '}
              <span className="text-white/85">Viña del Mar</span> y{' '}
              <span className="text-white/85">Casablanca</span>.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ExternalButton href={INSTAGRAM_URL} variant="primary">
                Ver propiedades en Instagram
              </ExternalButton>

              <a
                href="#zonas"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/5"
              >
                Ver zonas ↓
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { t: 'Evaluación', d: 'Estrategia y orientación según mercado.' },
                { t: 'Gestión', d: 'Coordinación y seguimiento de interesados.' },
                { t: 'Cierre', d: 'Acompañamiento en cada paso del proceso.' },
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-sm font-semibold">{x.t}</p>
                  <p className="mt-1 text-sm text-white/70">{x.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Imagen decorativa */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 blur-2xl opacity-60"
              style={{
                background:
                  'radial-gradient(600px 420px at 50% 40%, rgba(120, 10, 60, 0.45), transparent 60%)',
              }}
            />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/casa1.png"
                  alt="Casa residencial"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zonas */}
      <section id="zonas" className="mx-auto max-w-6xl px-5 py-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Zonas de operación</h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {['Curauma', 'Valparaíso', 'Viña del Mar', 'Casablanca'].map((z) => (
              <div
                key={z}
                className="rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <p className="text-sm font-semibold">{z}</p>
                <p className="mt-1 text-xs text-white/65">
                  Atención y coordinación local
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pb-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} H&amp;P Gestión Inmobiliaria ·{' '}
    
      </footer>

      {/* ✅ Botón flotante WhatsApp (típico) */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Hablar con Pedro por WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 shadow-lg shadow-black/30 transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/70"
      >
        {/* Icono WhatsApp */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            fill="white"
            d="M19.11 17.41c-.27-.14-1.58-.78-1.83-.87-.25-.09-.43-.14-.62.14-.18.27-.71.87-.87 1.05-.16.18-.31.2-.58.07-.27-.14-1.14-.42-2.17-1.33-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.41.12-.55.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.62-1.49-.85-2.04-.22-.53-.45-.46-.62-.47h-.53c-.18 0-.47.07-.71.34-.25.27-.94.91-.94 2.22s.96 2.58 1.1 2.76c.14.18 1.89 2.88 4.58 4.04.64.27 1.14.43 1.53.55.64.2 1.23.17 1.69.1.52-.08 1.58-.64 1.8-1.26.22-.62.22-1.15.16-1.26-.06-.11-.25-.18-.52-.32Z"
          />
          <path
            fill="white"
            d="M16.02 3C8.84 3 3 8.77 3 15.86c0 2.27.61 4.48 1.77 6.42L3 29l6.9-1.74a13.1 13.1 0 0 0 6.12 1.5h.01c7.18 0 13.02-5.77 13.02-12.86C29.05 8.77 23.2 3 16.02 3Zm0 23.47h-.01c-1.93 0-3.82-.5-5.46-1.45l-.39-.23-4.1 1.03 1.1-3.97-.25-.4a11.1 11.1 0 0 1-1.72-5.6c0-5.81 4.8-10.53 10.73-10.53 5.92 0 10.73 4.72 10.73 10.53 0 5.8-4.81 10.52-10.73 10.52Z"
          />
        </svg>

        <span className="text-sm font-semibold text-white">
          Hablemos!
        </span>
      </a>
    </main>
  );
}
