"use client";
import {ColumnDef} from "@tanstack/react-table";
import Image from "next/image";
import {DataTable} from "../ui/data-table";
import {ProductsDummyData} from "@/constants/data";
import AnalyticsCard from "./analytics-card";

export type TopProducts = {
  id: number;
  name: string;
  revenue: number;
  price: number;
  image: string;
};

export const TopProductsColumns: ColumnDef<TopProducts>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "revenue",
    header: "Revenue",
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
export const TopProducts = () => {
  const TopProducts = ProductsDummyData.sort(
    (a, b) => b.revenue - a.revenue
  ).slice(0, 4);
  return (
    <AnalyticsCard title="TOP PRODUCTS" subTitle="Showing Most Sold Products">
      <DataTable columns={TopProductsColumns} data={TopProducts}></DataTable>
    </AnalyticsCard>
  );
};
