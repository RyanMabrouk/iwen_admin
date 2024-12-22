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
import SelectGeneric from './selectGeneric';
import { useEffect } from 'react';

interface DataTableProps<TData, TValue, TFilter extends string> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  total_pages?: number;
  page: number;
  setPage: (page: number) => void;
  setSelectedIds?: (selectedIds: string[]) => void;
  selectedIds?: string[];
  total_counts?: number;
  tableName?: string;
  isLoading?: boolean;
  filterOptions?: { label: string; value: TFilter }[];
  filter?: TFilter;
  setFilter?: (filter: TFilter) => void;
}

export function GenericTableData<TData, TValue, TFilter extends string>({
  columns,
  data,
  searchQuery,
  setSearchQuery,
  page,
  setPage,
  total_pages,
  selectedIds,
  total_counts,
  setSelectedIds,
  isLoading,
  filterOptions,
  filter,
  setFilter
}: DataTableProps<TData, TValue, TFilter>) {
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
  useEffect(() => {
    setPage(1);
  }, [filter, searchQuery,setPage]);

  return (
    <div dir="rtl" className="z-0 overflow-visible">
      <div className="z-0 flex items-center gap-2 !overflow-visible">
        <div className="m-2 flex w-full max-w-md flex-row items-center gap-2 rounded-lg border-2 border-gray-300 bg-white shadow-sm">
          <input
            type="text"
            placeholder="بحث ..."
            value={searchQuery}
            onChange={handleChange}
            className="w-full rounded-lg p-2 focus:outline-none"
          />
          <button className="flex h-full cursor-default items-center justify-center rounded-lg p-2 transition-colors">
            <SearchIcon size={15} />
          </button>
        </div>
        {selectedIds?.length ?? 0 > 0 ? (
          <div className="text-red-500">
            <DeleteBooks
              ids={selectedIds ?? []}
              setSelectedIds={setSelectedIds}
            />
          </div>
        ) : (
          ''
        )}
        {filterOptions && filterOptions.length > 0 && (
          <SelectGeneric
            options={filterOptions}
            placeholder="تصفية "
            name="filter"
            selectedValue={filter}
            setSelectedValue={
              setFilter as ((option: string) => void) | undefined
            }
          />
        )}
      </div>

      <ScrollArea
        dir="rtl"
        className="z-0 h-[calc(80vh-220px)] !overflow-visible rounded-md border md:h-[calc(80dvh-200px)]"
      >
        {isLoading ? (
          <div className="m-auto mt-[10%] flex h-full w-full max-w-[40rem] items-center justify-center rounded-md">
            <Player
              className="m-auto"
              autoplay
              loop
              src="/loading.json"
              style={{ height: '10rem', width: '10rem' }}
            />
          </div>
        ) : table.getRowModel().rows.length === 0 ? (
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
          <Table className="relative z-0 !overflow-visible" dir="rtl">
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
                      className="w-fit whitespace-nowrap px-4 py-3 text-center text-lg font-semibold text-color1 hover:bg-color3 "
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

            <TableBody className="z-0 !overflow-visible">
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row, index) => (
                  <TableRow
                    key={row.id}
                    className="z-0 !overflow-visible"
                    data-state={row.getIsSelected() && 'selected'}
                    dir="rtl"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className="z-0 w-min max-w-[15rem] text-ellipsis whitespace-nowrap px-4 text-center"
                      >
                        <div
                          className={` tooltip h-fit max-w-[15rem] text-ellipsis whitespace-nowrap  break-words  text-right  before:z-[1000] after:z-[1000] ${
                            table.getRowModel().rows.length / 2 <= index
                              ? 'tooltip-top '
                              : 'tooltip-bottom '
                          }`}
                          data-tip={cell.getValue()}
                        >
                          <span className="line-clamp-1 max-w-[15rem] text-ellipsis text-wrap">
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </span>
                        </div>
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
        <div className="absolute inset-y-0 right-0 top-1/3 flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} من{' '}
          {table.getFilteredRowModel().rows.length} صف(وف) محدد(ة)
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
