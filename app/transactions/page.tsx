import { DataTable } from "../_components/data-table";
import { db } from "../_lib/prisma";
import { columns } from "./_components/columns-table";
import AddTransactionButton from "./_components/add-transaction-button";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});

  return (
    <div className="space-y-7 p-8">
      <div className="flex w-full justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransactionButton />
      </div>
      <DataTable columns={columns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
