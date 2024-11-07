"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { addTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

interface AddTransactionsProps {
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const addTransaction = async (transaction: AddTransactionsProps) => {
  const { userId } = auth();
  if (typeof userId !== "string") {
    throw new Error("Authentication failed: userId is not a string");
  }
  addTransactionSchema.parse({ ...transaction, userId });
  await db.transaction.create({
    data: { ...transaction, userId },
  });
  revalidatePath("/transactions");
};
