'use client';

import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import Table from './table';
import useEvents from '@/hooks/data/events/useEvents';
import Link from 'next/link';
import useOffers from '@/hooks/data/offers/useOffers';

export default function Offers() {
  const { data: offers, isLoading } = useOffers();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`العروض (${isLoading ? 0 : offers?.data?.length ?? 0})`}
          description="قائمة بجميع العروض"
        />
        <Link href="/dashboard/offer">
          <button className="w-fit rounded-md bg-color2 px-4 py-2 text-lg text-white hover:opacity-50">
            إضافة عرض جديد
          </button>
        </Link>
      </div>
      <Separator />

      <Table />
    </>
  );
}
