import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import Books from './ui/Books';


const breadcrumbItems = [
    { title: 'إحصائيات', link: '/dashboard' },
    { title: 'الكتب', link: '/dashboard/books' }
  ];
export default function page() {
  return (
    <PageContainer>
      <div className="space-y-2" 
      dir='rtl'>
        <Breadcrumbs items={breadcrumbItems} />
        <Books />
      </div>

    </PageContainer>
  );
}
