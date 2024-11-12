import "server-only";
import { db } from "../../_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { TransactionType } from "@prisma/client";
import { TransactionsPercentagePerType } from "./types";

export const getDashboard = async (month: string) => {
  const { userId } = auth();
  if (!userId) throw new Error("Unauthorized");

  const where = {
    userId,
    date: {
      gte: new Date(`2024-${month}-01`),
      lt: new Date(`2024-${month}-31`),
    },
  };

  const depositsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "DEPOSIT" },
        _sum: { amount: true },
      })
    )._sum.amount,
  );
  const investmentsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "INVESTMENT" },
        _sum: { amount: true },
      })
    )._sum.amount,
  );
  const expensesTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "EXPENSE" },
        _sum: { amount: true },
      })
    )._sum.amount,
  );
  const balance = depositsTotal - investmentsTotal - expensesTotal;
  const transactionsTotal = Number(
    (
      await db.transaction.aggregate({
        where,
        _sum: { amount: true },
      })
    )._sum.amount,
  );
  const typesPercentage: TransactionsPercentagePerType = {
    [TransactionType.DEPOSIT]: Math.round(
      (depositsTotal / transactionsTotal) * 100,
    ),
    [TransactionType.INVESTMENT]: Math.round(
      (investmentsTotal / transactionsTotal) * 100,
    ),
    [TransactionType.EXPENSE]: Math.round(
      (expensesTotal / transactionsTotal) * 100,
    ),
  };

  return {
    balance,
    depositsTotal,
    investmentsTotal,
    expensesTotal,
    typesPercentage,
  };
};
