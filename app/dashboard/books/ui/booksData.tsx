'use client';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

import Image from 'next/image';
import { useBooksPagination } from '@/app/dashboard/books/context/useBooksPagination';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  total_pages: number;
}

export function BooksData<TData, TValue>({
  columns,
  data,
  searchQuery,
  setSearchQuery,
  total_pages
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel()
  });
  const { page, setPage } = useBooksPagination();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPage(1);
    setSearchQuery(event.target.value);
  }

  return (
    <div dir='rtl'>
      <div className="m-2 flex w-full max-w-md flex-row items-center gap-2 rounded-lg border-2 border-gray-300 bg-white shadow-sm">
        <input
          type="text"
          placeholder="إبحث عن كتاب..."
          value={searchQuery}
          onChange={handleChange}
          className="w-full rounded-lg p-3 focus:outline-none"
        />
        <button className="flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-gray-200">
          <Image
            src="/MagnifyingGlass.Png"
            alt="Search Icon"
            width={20}
            height={20}
            className="object-contain"
          />
        </button>
      </div>

      <ScrollArea dir='rtl' className="h-[calc(80vh-220px)] rounded-md border md:h-[calc(80dvh-200px)]">
        {table.getRowModel().rows.length === 0 ? (
          <div dir='rtl'> لا يوجد كتب </div>
        ) : (
          <Table className="relative" dir='rtl'>
            <TableHeader dir='rtl'>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="w-fit" dir='rtl'>
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      dir='rtl'
                      key={header.id}
                      className="w-fit whitespace-nowrap text-right"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>

            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                    dir='rtl'
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="text-right">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="flex items-center justify-end space-x-reverse space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-reverse space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            سابق
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage(page + 1)}
            disabled={page >= total_pages}
          >
            التالي
          </Button>
        </div>
      </div>
    </div>
  );
}
