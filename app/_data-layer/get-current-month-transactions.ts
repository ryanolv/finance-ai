import { endOfMonth, startOfMonth } from "date-fns";
import { db } from "../_lib/prisma";
import { auth } from "@clerk/nextjs/server";

export const getCurrentMonthTransactions = async () => {
  const { userId } = auth();
  if (!userId) throw new Error("Unauthorized");
  return db.transaction.count({
    where: {
      userId,
      createdAt: {
        gte: startOfMonth(new Date()),
        lt: endOfMonth(new Date()),
      },
    },
  });
};
