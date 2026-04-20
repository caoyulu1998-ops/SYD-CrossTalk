'use client';

import Image from 'next/image';
import { useState } from 'react';

type SafeImageProps = {
  src: string;
  alt: string;
  variant?: 'cards' | 'coins' | 'flow' | 'panel';
};

function FallbackVisual({ variant }: { variant: NonNullable<SafeImageProps['variant']> }) {
  if (variant === 'cards') {
    return (
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-violet-500/30 via-sky-400/20 to-emerald-300/20">
        <div className="absolute left-10 top-10 h-28 w-40 rotate-[-12deg] rounded-2xl border border-white/30 bg-white/10 backdrop-blur-sm" />
        <div className="absolute left-20 top-16 h-28 w-40 rotate-[2deg] rounded-2xl border border-white/40 bg-white/15 backdrop-blur-sm" />
        <div className="absolute left-32 top-24 h-28 w-40 rotate-[12deg] rounded-2xl border border-white/50 bg-white/20 backdrop-blur-sm" />
      </div>
    );
  }

  if (variant === 'coins') {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-r from-amber-300/10 via-yellow-300/20 to-orange-300/10">
        <div className="flex gap-3 md:gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              className="h-10 w-10 rounded-full border border-amber-200/60 bg-gradient-to-br from-amber-200/75 to-amber-500/60 shadow-[0_0_24px_rgba(245,158,11,0.35)] md:h-12 md:w-12"
            />
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'flow') {
    return (
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-cyan-500/20 via-slate-900 to-purple-500/15">
        <div className="absolute left-8 top-1/2 h-10 w-24 -translate-y-1/2 rounded-full border border-white/30 bg-white/10" />
        <div className="absolute left-1/2 top-1/2 h-10 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/35 bg-white/15" />
        <div className="absolute right-8 top-1/2 h-10 w-24 -translate-y-1/2 rounded-full border border-white/40 bg-white/20" />
        <div className="absolute left-[8.6rem] top-1/2 h-px w-20 -translate-y-1/2 bg-white/40" />
        <div className="absolute right-[8.6rem] top-1/2 h-px w-20 -translate-y-1/2 bg-white/40" />
      </div>
    );
  }

  return <div className="h-full w-full bg-mesh-gradient" />;
}

export function SafeImage({ src, alt, variant = 'panel' }: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="h-56 w-full rounded-2xl shadow-sm ring-1 ring-slate-200 md:h-72">
        <FallbackVisual variant={variant} />
      </div>
    );
  }

  return (
    <div className="relative h-56 w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200 md:h-72">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        onError={() => setError(true)}
      />
    </div>
  );
}
