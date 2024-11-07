import "server-only";

import { db } from "../_lib/prisma";

export const getTransactions = () => {
  return db.transaction.findMany({});
};
