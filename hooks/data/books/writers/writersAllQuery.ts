import CRUDData from '@/services/CRUDData';
import getEndpoint from '@/services/getEndpoint';
import { Tables } from '@/types/database.types';

const writersAllQuery = () => ({
  queryKey: ['writers', 'all'],
  queryFn: async () => {
    const url = getEndpoint({ resourse: 'writers', action: 'getAllWriters' });
    const { error, data } = await CRUDData<Tables<'writers'>[]>({
      method: 'GET',
      url: url()
    });

    if (error) return { data: null, error: error };
    else return { data, error: null };
  }
});
export { writersAllQuery };
