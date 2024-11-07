"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import {
  Transaction,
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Circle, Pencil, Trash } from "lucide-react";

const TYPE_TRANSACTIONS = {
  [TransactionType.DEPOSIT]: "Ganho",
  [TransactionType.EXPENSE]: "Gasto",
  [TransactionType.INVESTMENT]: "Investimento",
};

const CATEGORY_TRANSACTIONS = {
  [TransactionCategory.HOUSING]: "Moradia",
  [TransactionCategory.TRANSPORTATION]: "Transporte",
  [TransactionCategory.FOOD]: "Alimentação",
  [TransactionCategory.ENTERTAINMENT]: "Lazer",
  [TransactionCategory.HEALTH]: "Saúde",
  [TransactionCategory.UTILITY]: "Utilidade",
  [TransactionCategory.SALARY]: "Salário",
  [TransactionCategory.EDUCATION]: "Educação",
  [TransactionCategory.OTHER]: "Outros",
};

const PAYMENT_METHODS = {
  [TransactionPaymentMethod.CREDIT_CARD]: "Cartão de Crédito",
  [TransactionPaymentMethod.DEBIT_CARD]: "Cartão de Débito",
  [TransactionPaymentMethod.BANK_TRANSFER]: "Transferência Bancária",
  [TransactionPaymentMethod.BANK_SLIP]: "Boleto Bancário",
  [TransactionPaymentMethod.CASH]: "Dinheiro",
  [TransactionPaymentMethod.PIX]: "PIX",
  [TransactionPaymentMethod.OTHER]: "Outro",
};

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row }) => {
      if (row.original.type === TransactionType.DEPOSIT) {
        return (
          <Badge className="gap-1.5 bg-primary/15 font-bold text-primary hover:bg-primary/15">
            <Circle size={8} fill="currentColor" />
            {TYPE_TRANSACTIONS[row.original.type]}
          </Badge>
        );
      }
      if (row.original.type === TransactionType.EXPENSE) {
        return (
          <Badge className="gap-1.5 bg-destructive/15 font-bold text-destructive hover:bg-destructive/15">
            <Circle size={8} fill="currentColor" />
            {TYPE_TRANSACTIONS[row.original.type]}
          </Badge>
        );
      }
      if (row.original.type === TransactionType.INVESTMENT) {
        return (
          <Badge className="gap-1.5 bg-accent/50 font-bold hover:bg-accent/50">
            <Circle size={8} fill="currentColor" />
            {TYPE_TRANSACTIONS[row.original.type]}
          </Badge>
        );
      }
    },
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
