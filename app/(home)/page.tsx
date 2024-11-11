import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Summary from "./_components/summary";
import TransactionHistory from "./_components/transaction-history";
import SelectMonth from "./_components/select-month";

const HomePage = async () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/login");
  }
  return (
    <div className="space-y-7 p-8">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <SelectMonth />
      </div>
      <div className="grid grid-cols-12 gap-8">
        <Summary />
        <TransactionHistory />
      </div>
    </div>
  );
};

export default HomePage;
