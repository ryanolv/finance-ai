import { DataTable } from "../_components/data-table";
import { columns } from "./_components/columns-table";
import AddTransactionButton from "./_components/add-transaction-button";
import { getTransactions } from "../_data-layer/get-transactions";

const TransactionsPage = async () => {
  const transactions = await getTransactions();

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
