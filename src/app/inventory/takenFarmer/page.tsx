import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/src/components/DataTable";
import PageTitle from "@/src/components/ui/PageTitle";
import AddFarmersButton from "@/src/components/buttons/AddFarmersButton";
import Button from "@/src/components/buttons/button";

type Props = {};

type Farmers = {
  number: number;
  name: string;
  address: string;
  projectChiefName: string;
  vatTax: string;
  email: string;
  panVatNumber: string;
};

const columns: ColumnDef<Farmers>[] = [
  {
    accessorKey: "sno",
    header: "S.No",
  },
  {
    accessorKey: "groupName",
    header: "Farmer Group Name",
  },
  {
    accessorKey: "farmerName",
    header: "Farmer Name",
  },
  {
    accessorKey: "tcommodityName",
    header: "T. Commodity Name",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "rate",
    header: "Rate",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
];

const data: Farmers[] = [
  // Add more entries here
  // Add more Farmers data objects as needed
];

const GivenFarmer: React.FC<Props> = () => {
  return (
    <div className="flex flex-col gap-5 w-full my-8 px-8">
      <div className="flex items-center justify-between">
        <PageTitle title="Taken From  Farmer" />
        <Button
          urlName={"/inventory/takenFarmer/create"}
          buttonName={"Add Inventory"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 gap-5 w-full">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default GivenFarmer;
