'use client';

import Image from 'next/image';
import React from 'react';

const INSTAGRAM_URL = 'https://instagram.com/hyp_gestion.inmobiliaria';

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
      {/* 🔥 FONDO BURDEO / VINO (reemplaza el azul) */}
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
    </main>
  );
}
