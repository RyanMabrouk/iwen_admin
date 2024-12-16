import CRUDData from '@/services/CRUDData';
import getEndpoint from '@/services/getEndpoint';
import {
  IOffer
} from '@/types';

const offersQuery = (
 
) => ({
  queryKey: ['offers'],
  queryFn: async () => {
    const url = getEndpoint({ resourse: 'offers', action: 'getOffers' });
    const { error, data } = await CRUDData<IOffer[]>
({
      method: 'GET',
      url: url()
    });

    if (error) return { data: null, error: error };
    else return { data, error: null };
  }
});
export { offersQuery };
