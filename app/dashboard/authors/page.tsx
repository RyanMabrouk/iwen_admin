import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import Writers from './ui/Writers';
const breadcrumbItems = [
  { title: 'إحصائيات', link: '/dashboard' },
  { title: 'المؤلفين', link: '/dashboard/authors' }
];
export default function page() {
  return (
    <PageContainer>
      <div className="space-y-2 bg-white p-5 shadow-md md:p-10" dir="rtl">
        <Breadcrumbs items={breadcrumbItems} />
        <Writers />
      </div>
    </PageContainer>
  );
}
