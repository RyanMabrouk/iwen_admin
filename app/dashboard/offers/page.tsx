import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import Offers from './ui/Offers';
const breadcrumbItems = [
  { title: 'إحصائيات', link: '/dashboard' },
  { title: 'العروض', link: '/dashboard/offers' }
];
export default function page() {
  return (
    <PageContainer>
      <div className="space-y-2 bg-white p-5 shadow-md md:p-10" dir="rtl">
        <Breadcrumbs items={breadcrumbItems} />
        <Offers />
      </div>
    </PageContainer>
  );
}
