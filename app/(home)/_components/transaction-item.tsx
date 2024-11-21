import { TRANSACTION_PAYMENT_METHOD_ICONS } from "@/app/_constants/transactions";
import { formatCurrency } from "@/app/_utils/currency";
import { Transaction } from "@prisma/client";
import Image from "next/image";

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const getColor = () => {
    switch (transaction.type) {
      case "DEPOSIT":
        return "text-primary";
      case "EXPENSE":
        return "text-destructive";
      default:
        return "text-accent-foreground";
    }
  };

  return (
    <div key={transaction.id} className="flex justify-between">
      <div className="flex items-center gap-2">
        <div className="rounded-lg bg-white/5 p-2">
          <Image
            src={TRANSACTION_PAYMENT_METHOD_ICONS[transaction.paymentMethod]}
            alt="PIX"
            height={20}
            width={20}
          />
        </div>
        <div>
          <p>{transaction.name}</p>
          <p className="text-sm text-muted-foreground">
            {new Intl.DateTimeFormat("pt-BR", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }).format(new Date(transaction.date))}
          </p>
        </div>
      </div>
      <p className={`font-bold ${getColor()}`}>
        {transaction.type === "DEPOSIT" ? "+" : "-"}
        {formatCurrency(Number(transaction.amount))}
      </p>
    </div>
  );
};

export default TransactionItem;
