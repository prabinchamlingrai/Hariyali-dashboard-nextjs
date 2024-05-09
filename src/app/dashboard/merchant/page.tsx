"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/src/components/DataTable";
import PageTitle from "@/src/components/ui/PageTitle";
import { urls } from "@/src/services/apiHelper";
import { getMerchant } from "@/src/services/apiService/mainService";
import AddMerchantButton from "@/src/components/buttons/AddMerchantButton";
import axios from "axios";
import Button from "@/src/components/buttons/button";
type Props = {};

type Merchant = {
  sno: number;
  number: number;
  name: string;
  address: string;
  projectChiefName: string;
  vatTax: string;
  email: string;
  panVatNumber: string;
};

const columns: ColumnDef<Merchant>[] = [
  { accessorKey: "sn", header: "S.No" },
  {
    accessorKey: "merchantName",
    header: "Merchant Name",
  },

  {
    accessorKey: "merchantNumber",
    header: "Number",
  },
  {
    accessorKey: "projectChiefName",
    header: "Project Chief Name",
  },

  {
    accessorKey: "merchantEmail",
    header: "Email ID",
  },
  {
    accessorKey: "merchantPan",
    header: "PAN/VAT Number",
  },
];

const UsersPage: React.FC<Props> = () => {
  const [sdata, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMerchant();
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const mulD = sdata?.map((item: any, index) => {
    return {
      ...item,
      sn: index + 1,
    };
  });

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex items-center justify-between">
        <PageTitle title="Merchant" />
        <Button buttonName={"Add Merchant"} urlName={"/AddMerchantForm"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 gap-5 w-full">
        <DataTable columns={columns} data={mulD} />
      </div>
    </div>
  );
};

export default UsersPage;
