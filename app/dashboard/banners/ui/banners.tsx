'use client';

import useBanners from '@/hooks/data/banners/useBanners';
import Image from 'next/image';
import React from 'react';
import ConfirmationWindow from './confirmationWindow';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Banners() {
  const { data: banners } = useBanners();

  return (
    <div dir="rtl" className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-right text-2xl font-bold">إدارة الإعلانات</h1>

      {banners?.data?.length ?? 0 > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {banners?.data?.map((banner) => (
            <div key={banner.id} className="group relative">
              <div className="aspect-w-16 aspect-h-9 md:aspect-w-4 md:aspect-h-3">
                <Image
                  src={banner.url}
                  alt={`إعلان ${banner.id}`}
                  height={500}
                  width={500}
                  className="rounded-lg"
                />
                <ConfirmationWindow bannerId={String(banner.id)} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Player
          src={
            'https://lottie.host/85fb7313-2848-45c2-bdb9-2b729f57afc2/AwfmWMtW8n.json'
          }
          className="m-auto h-60 w-60"
          loop
          autoplay
        />
      )}
    </div>
  );
}
