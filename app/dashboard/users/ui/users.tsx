'use client';

import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { useRouter } from 'next/navigation';
import Table from './table';
import AddAdmin from './addAdmin';

export default function Users() {
  const router = useRouter();
  return (
    <>
      <div className="flex items-start justify-between">
        <Heading title={`المستخدمين`} description="قائمة بجميع المستخدمين " />
        <AddAdmin />
      </div>
      <Separator />

      <Table  />
    </>
  );
}
