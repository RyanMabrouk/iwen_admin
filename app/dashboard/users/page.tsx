import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import Users from './ui/users';
const breadcrumbItems = [
    { title: 'إحصائيات', link: '/dashboard' },
    { title: 'المستخدمين', link: '/dashboard/users' }
  ];
export default function page() {
  return (
    <PageContainer>
      <div className="space-y-2" 
      dir='rtl'>
        <Breadcrumbs items={breadcrumbItems} />
        <Users />
      </div>

    </PageContainer>
  );
}
