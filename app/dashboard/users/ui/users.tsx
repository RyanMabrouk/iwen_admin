'use client';

import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { useRouter } from 'next/navigation';
import Table from './table';
import AddAdmin from './addAdmin';
import useUsers from '@/hooks/data/user/useUsers';

export default function Users() {
  const { data: users, isLoading } = useUsers({});
  return (
    <>
      <div className="flex items-start justify-between">
      <Heading 
  title={`المستخدمين (${users?.data?.meta?.total_count})`} 
  description="قائمة بجميع المستخدمين" 
/>
        <AddAdmin />
      </div>
      <Separator />

      <Table  />
    </>
  );
}
