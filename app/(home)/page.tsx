import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Summary from "./_components/summary";
import LastTransactions from "./_components/last-transactions";
import SelectMonth from "./_components/select-month";
import { getDashboard } from "../_data-layer/get-dashboard";
import { isMatch } from "date-fns";
import { TransactionsPieChart } from "./_components/transactions-pie-chart";
import ExpensesPerCategory from "./_components/expenses-per-category";

interface HomeProps {
  searchParams: {
    month: string;
  };
}

const HomePage = async ({ searchParams: { month } }: HomeProps) => {
  const { userId } = auth();
  if (!userId) {
    redirect("/login");
  }

  const monthIsInvalid = !month || !isMatch(month, "MM");
  if (monthIsInvalid) {
    redirect("/?month=01");
  }

  const dashboard = await getDashboard(month);

  return (
    <div className="space-y-7 p-8">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <SelectMonth />
      </div>
      <div className="grid grid-cols-12 gap-8">
        <Summary {...dashboard} />
        <LastTransactions lastTransactions={dashboard.lastTransactions} />
        <TransactionsPieChart {...dashboard} />
        <ExpensesPerCategory
          expensesPerCategory={dashboard.totalExpensePerCategory}
        />
      </div>
    </div>
  );
};

export default HomePage;
