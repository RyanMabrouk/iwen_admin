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
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { SearchIcon } from 'lucide-react';
import Pagination from '@mui/material/Pagination';
import { Player } from '@lottiefiles/react-lottie-player';
import DeleteBooks from '@/app/dashboard/books/ui/deleteBook';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  total_pages: number;
  page: number;
  setPage: (page: number) => void;
  selectedIds?: string[];
  total_counts?: number;
  tableName?: string;
}

export function GenericTableData<TData, TValue>({
  columns,
  data,
  searchQuery,
  setSearchQuery,
  page,
  setPage,
  total_pages,
  selectedIds,
  total_counts,
  tableName
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel()
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPage(1);
    setSearchQuery(event.target.value);
  }
  console.log('🚀 ~ selectedIds:', selectedIds);

  return (
    <div dir="rtl">
      <div className="flex items-center gap-2">
        <div className="m-2 flex w-full max-w-md flex-row items-center gap-2 rounded-lg border-2 border-gray-300 bg-white shadow-sm">
          <input
            type="text"
            placeholder="إبحث عن كتاب..."
            value={searchQuery}
            onChange={handleChange}
            className="w-full rounded-lg p-2 focus:outline-none"
          />
          <button className="flex h-full cursor-default items-center justify-center rounded-lg p-2 transition-colors">
            <SearchIcon size={15} />
          </button>
        </div>
        <div className="w-fit whitespace-nowrap">
          {total_counts ?? 0}{' '}
          {total_counts !== undefined && total_counts >= 10 ? 'عنصر' : 'عناصر'}
        </div>

        {selectedIds?.length ?? 0 > 0 ? (
          <div className="text-red-500">
            <DeleteBooks ids={selectedIds ?? []} />
          </div>
        ) : (
          ''
        )}
      </div>

      <ScrollArea
        dir="rtl"
        className="h-[calc(80vh-220px)] rounded-md border md:h-[calc(80dvh-200px)]"
      >
        {table.getRowModel().rows.length === 0 ? (
          <div className="m-auto mt-[5%] flex h-full w-full max-w-[40rem] items-center justify-center rounded-md">
            <Player
              src={
                'https://lottie.host/85fb7313-2848-45c2-bdb9-2b729f57afc2/AwfmWMtW8n.json'
              }
              className="m-auto h-60 w-60"
              loop
              autoplay
            />
          </div>
        ) : (
          <Table className="relative" dir="rtl">
            <TableHeader dir="rtl" className="bg-color3 font-semibold ">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  key={headerGroup.id}
                  className="w-fit text-color1 hover:bg-color3"
                  dir="rtl"
                >
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      dir="rtl"
                      key={header.id}
                      className="w-fit whitespace-nowrap text-center font-semibold text-lg px-4 py-3 text-color1 hover:bg-color3 "
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
                    dir="rtl"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="text-center px-4">
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
      <div className="relative flex w-full items-center justify-center space-x-2 space-x-reverse py-4">
        <div className="absolute inset-y-0 right-0  top-1/3 flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} من{' '}
          {table.getFilteredRowModel().rows.length} صف(وف) محدد.
        </div>

        <div className="space-x-2 ">
          <Pagination
            dir="ltr"
            className="flex w-full justify-center"
            count={total_pages}
            page={page}
            boundaryCount={1}
            onChange={(e, value) => setPage(value)}
          />
        </div>
      </div>
    </div>
  );
}
