"use client";

import { Button } from "@/app/_components/ui/button";
import {
  CATEGORY_TRANSACTIONS_LABELS,
  PAYMENT_METHODS_LABELS,
} from "@/app/_constants/transactions";
import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Trash } from "lucide-react";
import SelectBadge from "./select-badge";
import EditTransactionButton from "./edit-transaction-button";
import { formatCurrency } from "@/app/_utils/currency";

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row }) => <SelectBadge typeTransaction={row.original.type} />,
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row }) => CATEGORY_TRANSACTIONS_LABELS[row.original.category],
  },
  {
    accessorKey: "paymentMethod",
    header: "Método",
    cell: ({ row }) => PAYMENT_METHODS_LABELS[row.original.paymentMethod],
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row }) => {
      const date = new Intl.DateTimeFormat("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date(row.original.date));
      return <p className="text-muted-foreground">{date}</p>;
    },
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row }) => formatCurrency(Number(row.original.amount)),
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({ row }) => {
      const transaction = row.original;
      return (
        <div className="text-muted-foreground">
          <EditTransactionButton transaction={transaction} />
          <Button variant="ghost">
            <Trash />
          </Button>
        </div>
      );
    },
  },
];
