import { booksEndpoints } from '@/endpoints/booksRoutes';
import { categoriesEndpoints } from '@/endpoints/categoriesRoutes';
import { cover_typesEndpoints } from '@/endpoints/coverTypes';
import { publishHousesEndpoints } from '@/endpoints/publishHouses';
import { subCategoriesEndpoints } from '@/endpoints/subCategories';
import { writersEndpoints } from '@/endpoints/writers';
export type CRUDMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';
const resources = {
  books: booksEndpoints,
  categories: categoriesEndpoints,
  cover_types: cover_typesEndpoints,
  publish_houses: publishHousesEndpoints,
  subcategories: subCategoriesEndpoints,
  writers: writersEndpoints
} as const;
export type IResourse = keyof typeof resources;
export default function getEndpoint<
  IEndpointResourse extends IResourse,
  IAction extends keyof (typeof resources)[IEndpointResourse]
>({ resourse, action }: { resourse: IEndpointResourse; action: IAction }) {
  const url = resources[resourse][action];
  return url;
}
