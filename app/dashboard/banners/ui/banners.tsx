'use client';

import useBanners from '@/hooks/data/banners/useBanners';
import Image from 'next/image';
import React from 'react';
import ConfirmationWindow from './confirmationWindow';
import { Player } from '@lottiefiles/react-lottie-player';
import { Pencil } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CellAction } from './cell-action';

export default function Banners() {
  const { data: banners } = useBanners();

  return (
    <div dir="rtl" className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-right text-2xl font-bold">إدارة الإعلانات</h1>

      {banners?.data?.length ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {banners.data.map((banner) => (
            <div key={banner.id} className="group flex flex-col space-y-4">
              <div className="relative h-64 w-full overflow-hidden rounded-lg">
                <Image
                  src={banner.url}
                  alt={`إعلان سطح المكتب ${banner.id}`}
                  layout="fill"
                  objectFit="contain"
                  className="bg-gray-100"
                />
                <div className="absolute right-2 top-2 flex space-x-2">
                  <CellAction bannerId={banner.id} />
                  
                </div>
              </div>
              <div className="relative h-40 w-full overflow-hidden rounded-lg">
                <Image
                  src={banner.phone_url || "/phone.png"}
                  alt={`إعلان الهاتف ${banner.id}`}
                  layout="fill"
                  objectFit="contain"
                  className="bg-gray-100"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Player
          src="https://lottie.host/85fb7313-2848-45c2-bdb9-2b729f57afc2/AwfmWMtW8n.json"
          className="m-auto h-60 w-60"
          loop
          autoplay
        />
      )}
    </div>
  );
}

