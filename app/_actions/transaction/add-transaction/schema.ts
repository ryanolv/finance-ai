import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { z } from "zod";

export const addTransactionSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(2).max(50),
  amount: z.coerce.number().min(0),
  type: z.nativeEnum(TransactionType),
  category: z.nativeEnum(TransactionCategory),
  paymentMethod: z.nativeEnum(TransactionPaymentMethod),
  date: z.date(),
  userId: z.string(),
});

export type AddTransactionSchema = z.infer<typeof addTransactionSchema>;
