import { PiggyBank, TrendingDown, TrendingUp, Wallet } from "lucide-react";
import SummaryDetails from "./summary-details";
import { db } from "@/app/_lib/prisma";

const Summary = async () => {
  const depositsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { type: "DEPOSIT" },
        _sum: { amount: true },
      })
    )._sum.amount,
  );
  const investmentsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { type: "INVESTMENT" },
        _sum: { amount: true },
      })
    )._sum.amount,
  );
  const expensesTotal = Number(
    (
      await db.transaction.aggregate({
        where: { type: "EXPENSE" },
        _sum: { amount: true },
      })
    )._sum.amount,
  );
  const balance = depositsTotal - investmentsTotal - expensesTotal;

  return (
    <div className="col-span-8 space-y-6">
      <div className="grid grid-cols-12 gap-8">
        <SummaryDetails
          title="Saldo"
          icon={<Wallet size={16} />}
          amount={balance}
          size="large"
        />
        <SummaryDetails
          title="Investido"
          icon={<PiggyBank size={16} />}
          size="medium"
          amount={investmentsTotal}
        />
        <SummaryDetails
          title="Receitas"
          icon={<TrendingUp size={16} />}
          amount={depositsTotal}
        />
        <SummaryDetails
          title="Despesas"
          icon={<TrendingDown size={16} />}
          amount={expensesTotal}
        />
      </div>
    </div>
  );
};

export default Summary;
