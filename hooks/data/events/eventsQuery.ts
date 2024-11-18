import createNewPathname from '@/helpers/createNewPathname';
import CRUDData from '@/services/CRUDData';
import getEndpoint from '@/services/getEndpoint';
import {
  InfinityPaginationQueryType,
  InfinityPaginationResultType
} from '@/types';
import { Tables } from '@/types/database.types';

const eventsQuery = (
  args: InfinityPaginationQueryType<`events.${keyof Tables<'events'>}`>
) => ({
  queryKey: ['events',args],
  queryFn: async () => {
    const url = getEndpoint({ resourse: 'events', action: 'getEvents' });
    const searchParams = Object.keys(args).map((key) => ({
      name: key,
      value: JSON.stringify(args[key as keyof typeof args])
    }));
    const newUrl= createNewPathname({currentPathname: url() , values : searchParams   })
    const { error, data } = await CRUDData<
      InfinityPaginationResultType<Tables<"events">>
    >({
      method: 'GET',
      url: newUrl
    });

    if (error) return { data: null, error: error };
    else return { data, error: null };
  }
});
export { eventsQuery };
