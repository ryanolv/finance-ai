import "server-only";

import { db } from "../_lib/prisma";
import { auth } from "@clerk/nextjs/server";

export const getTransactions = () => {
  const { userId } = auth();
  if (!userId) throw new Error("Unauthorized");
  return db.transaction.findMany({
    where: { userId },
  });
};
