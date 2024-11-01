 "use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Sample data for batches
const data = [
    {
        id: "a1b2c3d4",
        FirstName: "Alice",
        LastName: "Johnson",
        Education: "Bachelor's in Computer Science",
        CNIC: "35201-1234567-1",
        Email: "alice.j@gmail.com",
        Address: "456 Elm St",
        Gender: "Female",
        Role: "Trainer"
    },
    {
        id: "e5f6g7h8",
        FirstName: "Bob",
        LastName: "Smith",
        Education: "Diploma in Web Development",
        CNIC: "35201-2345678-2",
        Email: "bob.smith@gmail.com",
        Address: "789 Oak St",
        Gender: "Male",
        Role: "Student"
    },
    {
        id: "i9j0k1l2",
        FirstName: "Carol",
        LastName: "Davis",
        Education: "Master's in App Development",
        CNIC: "35201-3456789-3",
        Email: "carol.d@gmail.com",
        Address: "101 Maple St",
        Gender: "Female",
        Role: "Trainer"
    },
    {
        id: "m3n4o5p6",
        FirstName: "David",
        LastName: "Martinez",
        Education: "Associate Degree in Software Engineering",
        CNIC: "35201-4567890-4",
        Email: "david.m@gmail.com",
        Address: "202 Pine St",
        Gender: "Male",
        Role: "Student"
    }
];


export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "FirstName",
    header: "First Name",
    cell: ({ row }) => <div>{row.getValue("FirstName")}</div>,
  },
  {
    accessorKey: "LastName",
    header: "Last Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("LastName")}</div>
    ),
  },
  {
    accessorKey: "Education",
    header: "Education",
    cell: ({ row }) => <div>{row.getValue("Education")}</div>,
  },
  {
    accessorKey: "CNIC",
    header: "CNIC",
    cell: ({ row }) => <div>{row.getValue("CNIC")}</div>,
  },
  {
    accessorKey: "Email",
    header: "Email",
    cell: ({ row }) => <div>{row.getValue("Email")}</div>,
  },
  {
    accessorKey: "Address",
    header: "Address",
    cell: ({ row }) => <div>{row.getValue("Address")}</div>,
  },
  {
    accessorKey: "Gender",
    header: "Gender",
    cell: ({ row }) => <div>{row.getValue("Gender")}</div>,
  },
  {
    accessorKey: "Role",
    header: "Role",
    cell: ({ row }) => <div>{row.getValue("Role")}</div>,
  },
  
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const batch = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(batch.id)}
            >
              Copy batch ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View trainer details</DropdownMenuItem>
            <DropdownMenuItem>View batch details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function StudentTable() {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter Student By Name..."
          value={table.getColumn("FirstName")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("FirstName")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
       
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) =>
                    column.toggleVisibility(!!value)
                  }
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
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
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
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
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
