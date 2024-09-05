"use client";
import Image from "next/image";
import {ColumnDef} from "@tanstack/react-table";
import {MoreHorizontal} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Customers} from "@/components/dashboard/top-customers";

export const columns: ColumnDef<Customers>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "orders",
    header: "orders",
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({row}) => {
      const imageUrl = row.getValue("image") as string;

      return (
        <Image
          src={imageUrl}
          width={50}
          height={50}
          alt={`Product Image`}
          className="border-2 border-primary"
        />
      );
    },
  },
];
