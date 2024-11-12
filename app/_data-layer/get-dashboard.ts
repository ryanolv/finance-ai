import "server-only";
import { db } from "../_lib/prisma";
import { auth } from "@clerk/nextjs/server";

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

  return { balance, depositsTotal, investmentsTotal, expensesTotal };
};
