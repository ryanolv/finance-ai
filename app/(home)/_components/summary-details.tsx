import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { canUserAddTransaction } from "@/app/_data-layer/can-user-add-transaction";
import { formatCurrency } from "@/app/_utils/currency";
import AddTransactionButton from "@/app/transactions/_components/add-transaction-button";
import { ReactNode } from "react";

interface SummaryDetailsProps {
  title: "Saldo" | "Investido" | "Receitas" | "Despesas";
  icon: ReactNode;
  amount: number;
  size?: "small" | "medium" | "large";
}

const SummaryDetails = async ({
  title,
  icon,
  amount,
  size = "small",
}: SummaryDetailsProps) => {
  const userCanAddTransaction = await canUserAddTransaction();
  const getStyleTitle = () => {
    switch (title) {
      case "Saldo":
        return "text-accent-foreground";
      case "Investido":
        return "text-accent-foreground";
      case "Receitas":
        return "text-primary";
      case "Despesas":
        return "text-destructive";
    }
  };

  const getStyleIcon = () => {
    switch (title) {
      case "Saldo":
        return "bg-background";
      case "Investido":
        return "bg-white/5";
      case "Receitas":
        return "bg-primary/15";
      case "Despesas":
        return "bg-destructive/20";
    }
  };

  const getStyleCard = () => {
    switch (size) {
      case "small":
        return "bg-background col-span-3";
      case "medium":
        return "bg-white/5 col-span-6";
      case "large":
        return "bg-[#161716] col-span-12 ";
    }
  };

  return (
    <Card className={`rounded-2xl ${getStyleCard()}`}>
      <CardHeader>
        <CardTitle
          className={`flex items-center gap-3 text-base font-bold ${getStyleTitle()}`}
        >
          <div className={`rounded-lg p-1.5 ${getStyleIcon()}`}>{icon}</div>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p
          className={`font-bold ${size === "large" ? "text-4xl" : "text-2xl"}`}
        >
          {formatCurrency(amount)}
        </p>
        {size === "large" && (
          <AddTransactionButton userCanAddTransaction={userCanAddTransaction} />
        )}
      </CardContent>
    </Card>
  );
};

export default SummaryDetails;
