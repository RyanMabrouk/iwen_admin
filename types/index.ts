import { Icons } from '@/components/icons';
import { ComparisonOperator } from 'kysely';
import { Enums, Tables } from './database.types';
import { Table } from '@tanstack/react-table';

export interface InfinityPaginationQueryType<
  EntityFilterKeys extends string | number | symbol
> {
  page?: number;
  limit?: number;
  sort?: {
    order: 'asc' | 'desc';
    orderBy: EntityFilterKeys;
  };
  filters?: {
    [key in EntityFilterKeys]?: {
      operator: ComparisonOperator;
      value: string | null | string[];
    }[];
  };
  search?: {
    [key in EntityFilterKeys]?: {
      operator: ComparisonOperator;
      value: string | null | string[];
    }[];
  };
}
export type InfinityPaginationResultType<T> = Readonly<{
  data: T[];
  meta: {
    page: number;
    limit: number;
    total_pages: number;
    has_next_page: boolean;
    has_previous_page: boolean;
    total_count: number;
  };
}>;
export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}
// IOrderProduct represents a single product in an order

export interface IOrderProduct
  extends Tables<'orders_products'>,
    Tables<'books'> {}

export interface IOrder extends Tables<'orders'> {
  products: IOrderProduct[];
}
export interface IBookPayload {
  title?: string;
  writer_id?: string;
  share_house_id?: string;
  editor: string;
  release_year: number;
  description: string;
  weight: number;
  isbn: string;
  price: number;
  price_dollar: number;
  discount: number;
  stock: number;
  meta_keywords: string[];
  images_urls: string[];
  categories_ids: string[];
  subcategories_ids: string[];
  page_count: number;
  cover_type_id?: string;
  corner_id?: string;
  status?: string;
  discount_type: string;
  meta_image?: string;
  meta_title: string;
  meta_description: string;
  canonical: string;
  slug: string;
  structured_data: FormDataEntryValue | null;
}
export interface IBookPopulated extends Tables<'books'> {
  categories: Tables<'categories'>[];
  subcategories: Tables<'subcategories'>[];
  cover_type: Tables<'cover_types'> | null;
  writer: Tables<'writers'> | null;
  share_house: Tables<'share_houses'> | null;
  corner: Tables<'corners'> | null;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;

export interface IError<T extends object> {
  message: string;
  detail: string;
  type: string;
  timestamp: number;
  errors?: IValidationErrors<T>;
}
export type IValidationErrors<T extends object> = {
  [key in keyof T]: string[];
};

export interface IEvent extends Tables<'events'> {
  books: IBookPopulated[];
}

export interface IEventPayload {
  name: string;
  books_ids: string[];
}

export interface IBannerPayload {
  book_id: string;
  url: string;  
  phone_url: string;
}
  