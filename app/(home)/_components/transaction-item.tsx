import { Transaction } from "@prisma/client";
import Image from "next/image";

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const getImage = () => {
    switch (transaction.paymentMethod) {
      case "PIX":
        return "/PIX.svg";
      case "CREDIT_CARD":
        return "/CARD.svg";
      case "DEBIT_CARD":
        return "/CARD.svg";
      case "BANK_SLIP":
        return "/BANK_SLIP.svg";
      case "BANK_TRANSFER":
        return "/BANK_SLIP.svg";
      default:
        return "/CARD.svg";
    }
  };

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
          <Image src={getImage()} alt="PIX" height={20} width={20} />
        </div>
        <p>{transaction.name}</p>
      </div>
      <p className={`font-bold ${getColor()}`}>
        {transaction.type === "DEPOSIT" ? "+" : "-"}R${" "}
        {Number(transaction.amount)}
      </p>
    </div>
  );
};

export default TransactionItem;
