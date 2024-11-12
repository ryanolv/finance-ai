import { PiggyBank, TrendingDown, TrendingUp, Wallet } from "lucide-react";
import SummaryDetails from "./summary-details";

interface SummaryProps {
  balance: number;
  investmentsTotal: number;
  depositsTotal: number;
  expensesTotal: number;
}

const Summary = ({
  balance,
  investmentsTotal,
  depositsTotal,
  expensesTotal,
}: SummaryProps) => {
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
