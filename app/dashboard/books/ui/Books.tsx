'use client';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
  BooksPaginationProvider,
  useBooksPagination
} from '../context/useBooksPagination';
import { useState } from 'react';
import Table from './table';
import Image from 'next/image';

function BooksComponent() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { setPage } = useBooksPagination();
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPage(1);
    setSearchQuery(event.target.value);
  }
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
      <div className="m-auto flex w-full max-w-md flex-row items-center gap-2 rounded-lg border-2 border-gray-300 bg-white shadow-sm">
        <input
          type="text"
          placeholder="إبحث عن كتاب..."
          value={searchQuery}
          onChange={handleChange}
          className="w-full rounded-lg p-3  focus:outline-none"
        />
        <button className="flex items-center justify-center rounded-lg  p-2 transition-colors hover:bg-gray-200">
          <Image
            src="/MagnifyingGlass.Png"
            alt="Search Icon"
            width={20}
            height={20}
            className="object-contain"
          />
        </button>
      </div>

      <Table searchQuery={searchQuery} />
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
