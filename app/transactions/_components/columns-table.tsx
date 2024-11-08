"use client";

import { Button } from "@/app/_components/ui/button";
import {
  CATEGORY_TRANSACTIONS,
  PAYMENT_METHODS,
} from "@/app/_constants/transactions";
import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash } from "lucide-react";
import SelectBadge from "./select-badge";

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
    cell: ({ row }) => CATEGORY_TRANSACTIONS[row.original.category],
  },
  {
    accessorKey: "paymentMethod",
    header: "Método",
    cell: ({ row }) => PAYMENT_METHODS[row.original.paymentMethod],
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
    cell: ({ row }) =>
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(row.original.amount)),
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: () => {
      return (
        <div className="text-muted-foreground">
          <Button variant="ghost">
            <Pencil />
          </Button>
          <Button variant="ghost">
            <Trash />
          </Button>
        </div>
      );
    },
  },
];
