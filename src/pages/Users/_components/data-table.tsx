import React, { useMemo, useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  PaginationState,
} from "@tanstack/react-table";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import FilterForm from "./FilterForm";
import { FilterIcon } from "@/assets";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [columnFilters, setColumnFilters] = useState<
    { id: string; value: any }[]
  >([]);
  // const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const pagination = React.useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination,
      columnFilters,
    },
    onPaginationChange: setPagination,
    pageCount: Math.ceil(data.length / pageSize),
  });

  const totalPages = Math.ceil(
    table.getFilteredRowModel().flatRows.length / pageSize
  );

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => table.setPageIndex(i - 1)}
            className={`relative hidden md:inline-flex items-center text-base px-4 py-2 font-semibold ${
              pageIndex + 1 === i
                ? "z-10 bg-transparent text-[#545F7D] font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-none"
                : "text-[#545F7D] opacity-50 focus:outline-offset-0"
            }`}
          >
            {i}
          </button>
        );
      }
    } else {
      // Always show first page
      pageNumbers.push(
        <button
          key={1}
          onClick={() => table.setPageIndex(0)}
          className={`relative hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold ${
            pageIndex === 0
              ? "z-10 text-[#545F7D] font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-none"
              : "text-[#545F7D] opacity-50 focus:outline-offset-0"
          }`}
        >
          1
        </button>
      );

      // Add ellipsis if necessary
      if (pageIndex > 2) {
        pageNumbers.push(
          <span
            key="ellipsis-start"
            className="relative hidden md:inline-flex items-center px-4 py-2 text-base font-bold text-[#545F7D] focus:outline-offset-0"
          >
            ...
          </span>
        );
      }

      // Add pages around current page
      const startPage = Math.max(2, pageIndex);
      const endPage = Math.min(totalPages - 1, pageIndex + 2);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => table.setPageIndex(i - 1)}
            className={`relative hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold ${
              pageIndex + 1 === i
                ? "z-10 text-[#545F7D] font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-none"
                : "text-[#545F7D] opacity-50 focus:outline-offset-0"
            }`}
          >
            {i}
          </button>
        );
      }

      // Add ellipsis if necessary
      if (pageIndex < totalPages - 3) {
        pageNumbers.push(
          <span
            key="ellipsis-end"
            className="relative hidden md:inline-flex items-center px-4 py-2 text-base font-bold text-[#545F7D] focus:outline-offset-0"
          >
            ...
          </span>
        );
      }

      // Always show last page
      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => table.setPageIndex(totalPages - 1)}
          className={`relative hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold ${
            pageIndex === totalPages - 1
              ? "z-10 text-[#545F7D] font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-none"
              : "text-[#545F7D] opacity-50 focus:outline-offset-0"
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  const handlePageSizeChange = (newPageSize: number) => {
    table.setPageSize(newPageSize);
  
  };

  const handleFilter = (filters: Record<string, any>) => {
    const newColumnFilters = Object.entries(filters)
      .filter(([_, value]) => value !== undefined && value !== "")
      .map(([id, value]) => ({ id, value }));
    setColumnFilters(newColumnFilters);

  };

  // Get unique organizations from the data
  const organizations = useMemo(() => {
    // @ts-ignore
    return Array.from(new Set(data.map((item) => item.organization)));
  }, [data]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-end">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="bg-[#39CDCC] hover:bg-[#39CDCC] text-white font-worksans text-sm font-medium flex items-center justify-center gap-2 px-4 py-6 rounded-md">
              <FilterIcon className="text-white" />
              <span>Filter</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 mr-5">
            <FilterForm
              onFilter={handleFilter}
              organizations={organizations}
              initialFilters={Object.fromEntries(
                columnFilters.map((filter) => [filter.id, filter.value])
              )}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="rounded-md border border-[#213F7D0F] shadow-userDataShadow bg-white p-4">
        <Table data-testid="user-table">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-none">
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
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
                  data-state={row.getIsSelected() && "selected"}
                  className="hover:bg-[#39CDCC] hover:bg-opacity-[3.5%]"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
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
                  className="h-24 text-center font-worksans text-[#545F7D] text-base font-normal"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="py-3 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between border-gray-200">
        <div className="flex items-center mb-4 sm:mb-0">
          <span className="mr-2 text-[#545F7D] font-normal text-sm">
            Showing
          </span>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-auto flex items-center bg-[#213F7D1A] font-worksans font-medium text-sm text-[#213F7D]"
              >
                <span>{pageSize}</span>
                <ChevronDown className="ml-2 h-6 w-6 opacity-80" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[100px] p-0">
              <div className="py-1" role="menu" aria-orientation="vertical">
                {[10, 20, 30, 50, 100].map((size) => (
                  <Button
                    key={size}
                    onClick={() => handlePageSizeChange(size)}
                    className="w-full justify-start font-normal"
                    variant="ghost"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
          <span className="ml-2 max-sm:ml-auto text-[#545F7D] font-normal text-sm">
            out of {table.getFilteredRowModel().flatRows.length}
          </span>
        </div>
        <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto">
          <nav
            className="relative z-0 inline-flex gap-3 rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="relative inline-flex items-center px-2 py-2 bg-[#213F7D1A] rounded-md text-sm font-medium"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeft
                className="h-5 w-5"
                color="#213F7D"
                aria-hidden="true"
              />
            </button>
            <span className="relative inline-flex items-center px-4 py-2 max-sm:flex-1 max-sm:w-full bg-white text-sm font-medium text-gray-700 md:hidden">
              {/* Page {pageIndex + 1} of {totalPages} */}
              Page {table.getState().pagination.pageIndex + 1} of {totalPages}
            </span>
            {renderPageNumbers()}
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="relative inline-flex items-center px-2 py-2 bg-[#213F7D1A] rounded-md text-sm font-medium"
            >
              <span className="sr-only">Next</span>
              <ChevronRight
                className="h-5 w-5"
                color="#213F7D"
                aria-hidden="true"
              />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
