import { Icons } from '@/components/icons';
import { ComparisonOperator } from 'kysely';
import { Tables } from './database.types';
import { Table } from '@tanstack/react-table';

export interface InfinityPaginationQueryType<
 EntityFilterKeys extends string | number | symbol,
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
export interface IBookPopulated extends Tables<"books"> {
  categories: Tables<"categories">[];
  subcategories: Tables<"subcategories">[];
  cover_type: Tables<"cover_types"> | null;
  writer: Tables<"writers"> | null;
  share_house: Tables<"share_houses"> | null;
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