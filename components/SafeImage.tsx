'use client';

import Image from 'next/image';
import { useState } from 'react';

type SafeImageProps = {
  src: string;
  alt: string;
};

export function SafeImage({ src, alt }: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="h-56 w-full rounded-2xl border border-syd-border bg-mesh-gradient shadow-glass md:h-72">
        <div className="flex h-full items-center justify-center text-sm text-syd-muted">Image placeholder</div>
      </div>
    );
  }

  return (
    <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-syd-border shadow-glass md:h-72">
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
