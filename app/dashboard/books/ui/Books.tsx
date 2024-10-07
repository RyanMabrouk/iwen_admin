'use client';

import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { useRouter } from 'next/navigation';
import {
  BooksPaginationProvider,
} from '../context/useBooksPagination';
import Table from './table';

function BooksComponent() {
  const router = useRouter();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading title={`الكتب`} description="قائمة بجميع الكتب المتاحة" />
        <button
          className="w-fit rounded-sm bg-color2 px-4 py-2 text-lg text-white hover:opacity-50 "
          onClick={() => router.push(`/dashboard/addBook`)}
        >
          إضافة كتاب جديد
        </button>
      </div>
      <Separator />

      <Table  />
    </>
  );
}
export default function Books() {
  return (
    <BooksPaginationProvider>
      <BooksComponent />
    </BooksPaginationProvider>
  );
}
