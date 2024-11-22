import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import Banners from './ui/banners';
const breadcrumbItems = [
  { title: 'إحصائيات', link: '/dashboard' },
  { title: 'الإعلانات', link: '/dashboard/banners' }
];
export default function page() {
  return (
    <PageContainer>
      <div className="space-y-2 bg-white p-5 shadow-md md:p-10" dir="rtl">
        <Breadcrumbs items={breadcrumbItems} />
        <Banners />
      </div>
    </PageContainer>
  );
}
