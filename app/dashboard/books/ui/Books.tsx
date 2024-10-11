'use client';

import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { useRouter } from 'next/navigation';
import {
  BooksPaginationProvider,
} from '../context/useBooksPagination';
import Table from './table';
import useBooks from '@/hooks/data/books/useBooks';

function BooksComponent() {
  const router = useRouter();
  const { data: books, isLoading } = useBooks({});

  return (
    <>
      <div className="flex items-start justify-between">
      <Heading 
          title={`الكتب (${books?.data?.meta?.total_count || 0})`} 
          description="قائمة بجميع الكتب المتاحة" 
        />        <button
          className="w-fit  bg-color2 px-4 py-2 text-lg text-white hover:opacity-50  rounded-md"
          onClick={() => router.push(`/dashboard/book`)}
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
