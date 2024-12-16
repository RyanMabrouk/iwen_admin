'use client';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import Table from './table';
import useWriters from '@/hooks/data/books/writers/useWriters';
import Link from 'next/link';

export default function Writers() {
  const { data: writers, isLoading } = useWriters({});

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`المؤلفين (${
            isLoading ? 0 : writers?.data?.meta.total_count ?? 0
          })`}
          description="قائمة بجميع المؤلفين"
        />
        <Link href="/dashboard/author">
          <button className="w-fit rounded-md bg-color2 px-4 py-2 text-lg text-white hover:opacity-50">
            إضافة مؤلف جديد
          </button>
        </Link>
      </div>
      <Separator />

      <Table />
    </>
  );
}
