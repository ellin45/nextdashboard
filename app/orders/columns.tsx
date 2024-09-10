"use client";
import Image from "next/image";
import {ColumnDef} from "@tanstack/react-table";
import {MoreHorizontal} from "lucide-react";
import {Button} from "@/components/ui/button";
import {formatDate} from "@/utils/formatDate";
import {formatPrice} from "@/utils/formatPrice";
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
  date: number;
};
export const columns: ColumnDef<Orders>[] = [
  {
    accessorKey: "orderNumber",
    header: "orderNumber",
  },
  {
    accessorKey: "totalAmount",
    header: "totalAmount",
    cell: ({row}) => {
      const totalAmount = row.getValue("totalAmount") as number;
      return <>{formatPrice(totalAmount)}</>;
    },
  },
  {
    accessorKey: "date",
    header: "date",
    cell: ({row}) => {
      const dateTimeStamp = row.getValue("date") as number;
      const dateObject = new Date(dateTimeStamp);

      return <span className="text-nowrap">{formatDate(dateObject)}</span>;
    },
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
