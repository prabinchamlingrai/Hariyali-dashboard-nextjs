"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
  number: string
  id: string
  name: string
  name2: string
  address: string
  email: string
  image: string
  action: string
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "number",
    header: "Number",
  },
  {
    accessorKey: "name",
    header: "Merchant Name",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "name2",
    header: "Product cheif name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "action",
    header: "Action",
  },
]
