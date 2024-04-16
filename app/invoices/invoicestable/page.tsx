import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/app/components/DataTable';
import PageTitle from '@/app/components/ui/PageTitle';
// import AddInvoiceButton from '@/app/components/buttons/AddInvoiceButton';

type Props = {};

type Invoice = {
  invoiceNumber: string;
  customerName: string;
  date: string;
  amount: number;
  status: string;
};

const columns: ColumnDef<Invoice>[] = [
  {
    accessorKey: 'invoiceNumber',
    header: 'Invoice Number',
  },
  {
    accessorKey: 'customerName',
    header: 'Customer Name',
  },
  {
    accessorKey: 'date',
    header: 'Date',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
];

const data: Invoice[] = [
  {
    invoiceNumber: 'INV001',
    customerName: 'John Doe',
    date: '2024-04-01',
    amount: 1000,
    status: 'Paid',
  },
  {
    invoiceNumber: 'INV002',
    customerName: 'Jane Smith',
    date: '2024-04-05',
    amount: 1500,
    status: 'Pending',
  },
  // Add more invoice data here
];

const InvoicesPage: React.FC<Props> = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center justify-between mb-5">
        <PageTitle title="Invoices" />
        {/* <AddInvoiceButton /> */}
      </div>
      <div className="overflow-x-auto">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default InvoicesPage;
