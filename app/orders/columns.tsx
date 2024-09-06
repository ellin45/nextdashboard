"use client";
import Image from "next/image";
import {ColumnDef} from "@tanstack/react-table";
import {MoreHorizontal} from "lucide-react";
import {Button} from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type Orders = {
  id: string | number;
  orderNumber: string;
  totalAmount: number;
  data: number;
};
export const columns: ColumnDef<Orders>[] = [
  {
    accessorKey: "orderNumber",
    header: "orderNumber",
  },
  {
    accessorKey: "totalAmount",
    header: "totalAmount",
  },
  {
    accessorKey: "data",
    header: "data",
  },
  {
    id: "actions",
    cell: ({row}) => {
      const customers = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem> View Order Details</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
