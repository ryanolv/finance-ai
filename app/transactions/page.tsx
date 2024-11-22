import { DataTable } from "../_components/data-table";
import { columns } from "./_components/columns-table";
import AddTransactionButton from "./_components/add-transaction-button";
import { getTransactions } from "../_data-layer/get-transactions";
import { canUserAddTransaction } from "../_data-layer/can-user-add-transaction";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

const TransactionsPage = async () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/login");
  }
  const transactions = await getTransactions();
  const userCanAddTransaction = await canUserAddTransaction();

  return (
    <div className="space-y-7 p-8">
      <div className="flex w-full justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransactionButton userCanAddTransaction={userCanAddTransaction} />
      </div>
      <DataTable columns={columns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
